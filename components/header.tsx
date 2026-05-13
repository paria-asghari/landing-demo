"use client";

import { Search, MessageCircle } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-20 bg-slate-800 border-b border-slate-700 z-50">
      <div className="h-full flex items-center justify-between px-6 gap-4">
        <div className="flex items-center gap-3 bg-slate-700 rounded-full px-4 py-2 flex-1 max-w-sm">
          <Search className="text-blue-600" size={18} />
          <input
            type="text"
            placeholder="Search for games"
            className="bg-transparent text-blue-300 placeholder-blue-600 outline-none flex-1 text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button isIconOnly className="bg-slate-700 hover:bg-slate-600">
            <MessageCircle className="text-blue-400" size={18} />
          </Button>
          <Button isIconOnly className="bg-slate-700 hover:bg-slate-600 text-2xl">
            🇬🇧
          </Button>
          <Link
            href="/login"
            className="bg-slate-800 text-white border-2 border-blue-400 hover:bg-slate-700 font-semibold rounded-full px-6 py-2"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-amber-500 text-slate-800 border-2 border-amber-500 hover:bg-amber-400 font-semibold rounded-full px-6 py-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
