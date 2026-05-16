"use client";

import { Button, Input, Label } from "@heroui/react";
import { X } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen pt-20 bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 rounded-xl p-6 max-w-sm w-full mx-4 relative">
        <Link
          href="/"
          className="absolute top-2 right-2 text-slate-400 hover:text-white"
        >
          <X size={20} />
        </Link>
        <h2 className="text-white text-center text-xl mb-4">Login</h2>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label className="text-blue-400 text-sm font-medium">Email</Label>
            <Input
              placeholder="Enter your email"
              type="email"
              className="bg-white border border-slate-300 rounded-lg text-slate-800"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-blue-400 text-sm font-medium">Password</Label>
            <Input
              placeholder="Enter your password"
              type="password"
              className="bg-white border border-slate-300 rounded-lg text-slate-800"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-600 text-white hover:bg-blue-500 mt-2"
          >
            Login
          </Button>
        </form>
        <p className="text-slate-400 text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-amber-400 hover:text-amber-300">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}