"use client";

import { Search, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-20 bg-[#1e2742] border-b border-[#2b3a59] z-50">
      <div className="h-full flex items-center justify-between px-6 gap-4">
        <div className="flex items-center gap-3 bg-[#2b3a59] rounded-full px-4 py-2 flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Search for games"
            className="bg-transparent text-[#8ba3c7] placeholder-[#4975a8] outline-none flex-1 text-sm"
          />
          <Search className="text-[#4975a8]" size={18} />
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-[#2b3a59] flex items-center justify-center hover:bg-[#3b4a6a] transition-colors">
            <MessageCircle className="text-[#59baff]" size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#2b3a59] flex items-center justify-center text-2xl hover:bg-[#3b4a6a] transition-colors">
            🇬🇧
          </button>
          <button className="px-4 py-2 bg-[#153050] text-white font-semibold rounded-full border-2 border-[#5ab5f2] hover:bg-[#1e3a5f] transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-[#fea912] text-[#1e2742] font-semibold rounded-full border-2 border-[#fea912] hover:bg-[#ffd866] transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
