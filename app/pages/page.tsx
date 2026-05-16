"use client";

import Link from "next/link";

export default function PagesIndex() {
    return (
        <main className="min-h-screen pt-20 bg-slate-900 flex items-center justify-center">
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <Link href="/pages/about" className="text-slate-300 hover:text-amber-400 transition-colors px-6 py-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-amber-500/50 w-56 text-center">
                        About Us
                    </Link>
                    <Link href="/pages/payments" className="text-slate-300 hover:text-amber-400 transition-colors px-6 py-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-amber-500/50 w-56 text-center">
                        Payments
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href="/pages/privacy" className="text-slate-300 hover:text-amber-400 transition-colors px-6 py-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-amber-500/50 w-56 text-center">
                        Privacy Policy
                    </Link>
                    <Link href="/pages/terms" className="text-slate-300 hover:text-amber-400 transition-colors px-6 py-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-amber-500/50 w-56 text-center">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </main>
    );
}