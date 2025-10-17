"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (!email) {
      router.push("/profile");
      return;
    }

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, email, router]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const token = Cookies.get("user");
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "api/website/user/complete-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            otp,
            token: Cookies.get("verify"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Verification failed. Please try again.");
      }

      const data = await response.json();
      if (data._status === true) {
        toast.success(data._message);
        router.push("/profile");
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast.error(error.message || "Failed to verify email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (countdown > 0) return;

    setIsResending(true);
    try {
      const token = Cookies.get("user");
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "api/website/user/verify-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to resend OTP. Please try again.");
      }

      const data = await response.json();
      if (data._status === true) {
        Cookies.set("verify", data._token, {
          expires: new Date(Date.now() + 10 * 60 * 1000),
        });
        setCountdown(30);
        toast.success("Verification code resent successfully!");
      }
    } catch (error) {
      console.error("Resend error:", error);
      toast.error(error.message || "Failed to resend OTP. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  if (!email) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Verify Your Email</CardTitle>
          <CardDescription>
            We've sent a verification code to <span className="font-medium">{email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                Enter 6-digit code
              </label>
              <div className="flex justify-center space-x-2">
                {[...Array(6)].map((_, i) => (
                  <Input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={otp[i] || ""}
                    onChange={(e) => {
                      const newOtp = otp.split("");
                      newOtp[i] = e.target.value;
                      setOtp(newOtp.join(""));
                    }}
                    className="h-12 w-12 text-center text-lg"
                    autoFocus={i === 0}
                  />
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Email"
              )}
            </Button>

            <div className="text-center text-sm text-gray-600">
              Didn't receive a code?{" "}
              <button
                type="button"
                onClick={handleResendCode}
                disabled={countdown > 0 || isResending}
                className={`font-medium ${
                  countdown > 0 || isResending
                    ? "text-gray-400"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                {isResending
                  ? "Sending..."
                  : countdown > 0
                  ? `Resend in ${countdown}s`
                  : "Resend code"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}