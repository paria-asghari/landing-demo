"use client";

import { Hexagon, House, Gamepad2, Tv, Volleyball, Crown, Box, ChevronLeft, X, MessageCircle, Send, Play } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#1e2742] fixed left-0 top-0 flex flex-col items-center pt-8 relative">
      <span className="absolute right-0 top-4 p-2 rounded-full bg-[#2b3a59] mr-[-16px] z-[60]">
        <ChevronLeft className="text-[#4d75a8]" size={20} />
      </span>
      <div className="flex items-center gap-2 mt-2 mb-5 relative z-50">
        <Hexagon className="text-[#fea912]" size={28} />
        <span className="text-[#fea912] font-bold text-lg">BGAMES</span>
      </div>
      <div className="flex items-center gap-2 mt-2 px-2 py-2 rounded-full bg-[#1b3e63] min-w-42">
        <span className="p-2 rounded-full bg-[#59baff]">
          <House className="text-white" size={14} />
        </span>
        <span className="text-[#59baff] font-medium">Home Page</span>
      </div>
      <div className="flex items-center gap-2 mt-2 px-2 py-2 rounded-full min-w-42">
        <span className="p-2 rounded-full bg-[#4975a8]">
          <Gamepad2 className="text-white" size={14} />
        </span>
        <span className="text-[#4975a8] font-medium">All games</span>
      </div>
      <div className="flex items-center gap-2 mt-2 px-2 py-2 rounded-full min-w-42">
        <span className="p-2 rounded-full bg-[#4975a8]">
          <Tv className="text-white" size={14} />
        </span>
        <span className="text-[#4975a8] font-medium">All Casino</span>
      </div>
      <div className="flex items-center gap-2 mt-2 px-2 py-2 rounded-full min-w-42">
        <span className="p-2 rounded-full bg-[#4975a8]">
          <Volleyball className="text-white" size={14} />
        </span>
        <span className="text-[#4975a8] font-medium">Sport</span>
      </div>
      <div className="flex items-center gap-2 mt-2 px-2 py-2 rounded-full min-w-42">
        <span className="p-2 rounded-full bg-[#4975a8]">
          <Crown className="text-white" size={14} />
        </span>
        <span className="text-[#4975a8] font-medium">VIP Club</span>
      </div>
      <div className="flex items-center gap-2 mt-2 px-2 py-2 rounded-full min-w-42">
        <span className="p-2 rounded-full bg-[#4975a8]">
          <Box className="text-white" size={14} />
        </span>
        <span className="text-[#4975a8] font-medium">NFT Cases</span>
      </div>
      <div className="w-42 h-px bg-[#4975a8] mt-4" />
      <div className="flex flex-col items-start gap-2 mt-4 text-[#4975a8] text-sm">
        <span>About Us</span>
        <span>Payments</span>
        <span>Privancy Policy</span>
        <span>Terms & Conditions</span>
      </div>
      <div className="flex items-center gap-3 mt-auto pt-8 pb-8 ml-auto mr-auto">
        <X className="text-[#4975a8]" size={20} />
        <MessageCircle className="text-[#4975a8]" size={20} />
        <Send className="text-[#4975a8]" size={20} />
        <Play className="text-[#4975a8]" size={20} />
      </div>
    </aside>
  );
}
