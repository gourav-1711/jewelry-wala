"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, Lock } from "lucide-react";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState("request");
  
  const token = Cookies.get("user")
  const returnTo = searchParams.get("returnTo");



  const handleRequestReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "api/website/user/forgot-password",
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
        throw new Error("Failed to send reset link. Please try again.");
      }

      const data = await response.json();
      if (data._status === true) {
        Cookies.set("resetToken", data._token, { expires: 1 });
        setStep("otp");
        toast.success("Verification code sent to your email");
      }
    } catch (error) {
      console.error("Reset request error:", error);
      toast.error(
        error.message || "Failed to send reset link. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "api/website/user/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            otp: otp.join(""),
            token: Cookies.get("resetToken"),
            newPassword,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to reset password. Please try again.");
      }

      const data = await response.json();
      if (data._status === true) {
        toast.success(
          "Password reset successfully! "
        );
        router.push(returnTo || "/");
      }
    } catch (error) {
      console.error("Reset password error:", error);
      toast.error(
        error.message || "Failed to reset password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
            <Lock className="h-6 w-6 text-amber-600" />
          </div>
          <CardTitle className="text-2xl font-bold">
            {step === "request" ? "Reset Password" : "Create New Password"}
          </CardTitle>
          <CardDescription>
            {step === "request"
              ? "Enter your email to receive a password reset link"
              : "Create a new password for your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "request" ? (
            <form onSubmit={handleRequestReset} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </form>
          ) : step === "otp" ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep("reset");
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Enter verification code
                </label>
                <div className="flex justify-center space-x-2">
                  {otp.map((digit, i) => (
                    <Input
                      key={i}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="h-12 w-12 text-center text-lg"
                    />
                  ))}
                </div>
              </div>
              <Button type="submit" className="w-full">
                Verify Code
              </Button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Reset Password"
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
