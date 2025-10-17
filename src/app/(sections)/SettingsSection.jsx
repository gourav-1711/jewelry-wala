"use client";

import {
  ArrowRight,
  CheckCircle,
  Lock,
  Mail,
  Phone,
  X,
  Key,
  LogOut,
} from "lucide-react";
import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputPassword } from "@/components/ui/input-password";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { logout } from "@/redux/features/auth";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

const token = Cookies.get("user");
// Password Change Options Dialog
function PasswordOptionsDialog({ open, onOpenChange, onOptionSelect }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Choose how you want to change your password.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="justify-start gap-2"
            onClick={() => onOptionSelect("change")}
          >
            <Lock className="h-4 w-4" />
            <span>Change Password</span>
          </Button>
          <Link href="/reset-password">
            <Button
              variant="outline"
              className="justify-start gap-2 text-amber-600 hover:text-amber-700"
              onClick={() => onOptionSelect("forgot")}
            >
              <Lock className="h-4 w-4" />
              <span>I forgot my password</span>
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Password Change Form Sheet
function PasswordFormSheet({ open, onOpenChange, type = "change" }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle password change logic here
    try {
      const token = Cookies.get("user");
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "api/website/user/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            oldPassword: currentPassword,
            newPassword,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const resData = await response.json();
      if (resData._status === true) {
        toast.success("Password changed successfully.");
        onOpenChange(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong. Please try again.");
      setIsLoading(false);
    } 
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-white px-6 py-8 rounded-l-2xl shadow-2xl animate-in slide-in-from-right duration-300 ease-out">
        <SheetHeader className="text-center mb-6">
          <SheetTitle className="text-2xl font-semibold text-[#5d4037]">
            {type === "change" ? "Change Password" : "Reset Password"}
          </SheetTitle>
          <SheetDescription className="text-[#795548]/80">
            {type === "change"
              ? "Enter your current password and a new password."
              : "Enter your email to receive a password reset link."}
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 animate-in fade-in duration-500"
        >
          {type === "change" && (
            <div className="space-y-1">
              <InputPassword
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                label="Current Password"
                className="focus:ring-2 focus:ring-[#d7ccc8] rounded-lg transition-all duration-200"
              />
            </div>
          )}

          <div className="space-y-1">
            <InputPassword
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              label="New Password"
              className=" focus:ring-2 focus:ring-[#d7ccc8] rounded-lg transition-all duration-200"
            />
          </div>

          <div className="space-y-1">
            <InputPassword
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              label="Confirm New Password"
              className=" focus:ring-2 focus:ring-[#d7ccc8] rounded-lg transition-all duration-200"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-[#d7b377] via-[#b98b5d] to-[#8d6e63] text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
          >
            {isLoading ? "Processing..." : "Update Password"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}

// Verification Dialog
function VerificationDialog({ open, onOpenChange, type = "email", value }) {
  const [code, setCode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  console.log(code);

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(code);
    try {
      setCode("");
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "api/website/user/complete-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            otp: code,
            token: Cookies.get("verify"),
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong Please try again");
      }
      const data = await response.json();
      if (data._status === true) {
        onOpenChange(false);
        setIsLoading(false);
        toast.success(data._message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleResendCode = () => {};
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Verify {type === "email" ? "Email" : "Phone"}
          </DialogTitle>
          <DialogDescription>
            We've sent a verification code to {value}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleVerify} className="mt-4">
          <div className="flex justify-center gap-2 mb-6">
            <InputOTP
              value={code}
              onChange={(value) => setCode(value)}
              maxLength={6}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="text-center text-sm text-muted-foreground mb-6">
            Didn't receive a code?{" "}
            <button
              type="button"
              onClick={handleResendCode}
              className="text-amber-600 hover:underline"
              disabled={isResending}
            >
              {isResending ? "Sending..." : "Resend code"}
            </button>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading || code == ""}>
              {isLoading ? "Verifying..." : "Verify Now"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function SettingsSection({ data }) {
  const router = useRouter();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showPasswordOptions, setShowPasswordOptions] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const dispatch = useDispatch();

  // Handle verify email/phone
  const handleVerifyClick = async (type) => {
    if (type === "email") {
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
            body: JSON.stringify({
              email: data.email,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Something went wrong. Please try again.");
        }

        const resData = await response.json();
        if (resData._status === true) {
          Cookies.set("verify", resData._token, {
            expires: new Date(Date.now() + 10 * 60 * 1000),
          });
          router.push(`/verify-email?email=${encodeURIComponent(data.email)}`);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message || "Something went wrong. Please try again.");
      }
    } else if (type === "phone") {
      // Handle phone verification
      // Similar to email verification but for phone
    }
  };

  // Handle logout
  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <div className="space-y-6">
      {/* Security Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Security</h3>

        {/* Change Password Button */}
        <button
          onClick={() => setShowPasswordOptions(true)}
          className="w-full flex items-center justify-between p-4 bg-white/80 rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors duration-300">
              <Lock size={18} className="text-amber-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">Change Password</p>
              <p className="text-sm text-gray-500">
                Update your password regularly
              </p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
        </button>

        {/* Verify Email Button */}
        <button
          onClick={() => handleVerifyClick("email")}
          className="w-full flex items-center justify-between p-4 bg-white/80 rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
              <Mail size={18} className="text-blue-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800 flex items-center gap-2">
                Verify Email
                {!data?.isEmailVerified && (
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                    Pending
                  </span>
                )}
                {data?.isEmailVerified && (
                  <CheckCircle size={16} className="text-green-600" />
                )}
              </p>
              <p className="text-sm text-gray-500">
                {data?.isEmailVerified
                  ? "Your email is verified"
                  : "Verify your email address"}
              </p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
        </button>

        {/* Logout Button */}
        <div className="pt-4 border-t border-gray-200">
          <Button
            onClick={() => setShowLogoutDialog(true)}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors duration-300 bg-white border-red-600 hover:bg-red-600/20"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </Button>
        </div>
        <PasswordOptionsDialog
          open={showPasswordOptions}
          onOpenChange={setShowPasswordOptions}
          onOptionSelect={(option) => {
            if (option === "change") {
              setShowPasswordOptions(false);
              setShowPasswordForm(true);
            } else {
              router.push("/reset-password");
            }
          }}
        />
        <PasswordFormSheet
          open={showPasswordForm}
          onOpenChange={setShowPasswordForm}
          type={"change"}
        />

        {/* Logout Confirmation Dialog */}
        <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to sign out?
              </AlertDialogTitle>
              <AlertDialogDescription>
                You'll need to sign in again to access your account.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700"
              >
                Sign Out
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
