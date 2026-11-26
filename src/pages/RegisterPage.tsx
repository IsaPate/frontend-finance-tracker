import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet } from "lucide-react";
import { Link } from "react-router";

export default function RegisterPage() {
  return (
    <main className="grid min-h-svh place-items-center px-5 py-12">
      <div className="flex w-full max-w-[400px] flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <Wallet className="size-6" aria-hidden />
          <span className="font-semibold">Finance Tracker</span>
        </div>
        <h1 id="register-h" className="text-[26px] font-semibold ">
          Register
        </h1>
        <form aria-labelledby="register-h" className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              autoComplete="name"
              className="h-11 bg-card"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="username"
              className="h-11 bg-card"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between">
              <Label htmlFor="password">Password</Label>
              <Button
                type="button"
                variant="link"
                size="sm"
                className="h-8 px-1"
              >
                Show
              </Button>
            </div>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              className="h-11 bg-card"
            />
            <div className="flex items-baseline justify-between">
              <p className="text-[13px] text-muted-foreground">
                At least 8 characters.
              </p>
              <Link
                to="/login"
                className="text-[13px] text-primary hover:underline"
              >
                Already have an account?
              </Link>
            </div>
          </div>
          <Button type="submit" className="h-11 text-[15px] font-semibold">
            Create account
          </Button>
        </form>
      </div>
    </main>
  );
}
