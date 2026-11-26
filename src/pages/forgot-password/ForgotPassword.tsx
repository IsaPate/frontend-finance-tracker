import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet } from "lucide-react";
import { Link } from "react-router";

export default function ForgotPassword() {
  return (
    <main className="grid min-h-svh place-items-center px-5 py-12">
      <div className="flex w-full max-w-[400px] flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <Wallet className="size-6" aria-hidden />
          <span className="font-semibold">Finance Tracker</span>
        </div>
        <h1 id="signin-h" className="text-[26px] font-semibold ">
          Forgot Password
        </h1>
        <form aria-labelledby="signin-h" className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="email">Email</Label>
                <Link to="/register" className="text-[15px] text-primary">
                  Sign in
                </Link>
              </div>
              <Input
                id="email"
                type="email"
                autoComplete="username"
                className="h-11 bg-card"
              />
            </div>
          </div>
          <Button type="submit" className="h-11 text-[15px] font-semibold">
            Send code
          </Button>
        </form>
      </div>
    </main>
  );
}
