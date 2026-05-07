"use client";

import Link from "next/link";
import { Hexagon, House, Gamepad2, Tv, Volleyball, Crown, Box, ChevronLeft, X, MessageCircle, Send, Play } from "lucide-react";

export function Sidebar() {
    const menuItems = [
        { icon: House, label: "Home Page", href: "/", isActive: true },
        { icon: Gamepad2, label: "All games", href: "/games" },
        { icon: Tv, label: "All Casino", href: "/casino" },
        { icon: Volleyball, label: "Sport" },
        { icon: Crown, label: "VIP Club" },
        { icon: Box, label: "NFT Cases" },
    ]

    const footerLinks = ["About Us", "Payments", "Privancy Policy", "Terms & Conditions"]

    const socialIcons = [X, MessageCircle, Send, Play]

    return (
        <aside className="w-64 min-h-screen bg-slate-800 fixed left-0 top-0 flex flex-col items-center pt-8">
            <span className="absolute -right-10 top-4 -translate-x-1/2 p-2 rounded-full bg-slate-700 z-100 border border-slate-600">
                <ChevronLeft className="text-blue-600" size={20} />
            </span>
            <Link href="/" className="flex items-center gap-2 mt-2 mb-5 relative z-50">
                <Hexagon className="text-amber-500" size={28} />
                <span className="text-amber-500 font-bold text-lg">BGAMES</span>
            </Link>
            <div className="flex flex-col gap-2 px-2">
                {menuItems.map((item) => (
                    <Link
                        href={item.href || "#"}
                        key={item.label}
                        className={`flex items-center gap-2 px-2 py-2 rounded-full min-w-42 ${item.isActive ? "bg-slate-700" : ""}`}
                    >
                        <span className={`p-2 rounded-full ${item.isActive ? "bg-blue-500" : "bg-blue-800"}`}>
                            <item.icon className="text-white" size={14} />
                        </span>
                        <span className={`font-medium ${item.isActive ? "text-blue-400" : "text-blue-600"}`}>{item.label}</span>
                    </Link>
                ))}
            </div>
            <div className="w-48 h-px bg-blue-600 mt-4" />
            <div className="flex flex-col items-start gap-2 mt-4 text-blue-600 text-sm">
                {footerLinks.map((link) => (
                    <span key={link}>{link}</span>
                ))}
            </div>
            <div className="flex items-center gap-3 mt-auto pt-8 pb-8 ml-auto mr-auto">
                {socialIcons.map((Icon, index) => (
                    <Icon key={index} className="text-blue-600" size={20} />
                ))}
            </div>
        </aside>
    );
}
