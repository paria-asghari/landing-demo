"use client";

import { promises } from "dns";
import { Suspense, use } from "react";
import NotFound from "@/components/not-found";

const content: Record<string, { title: string; paragraphs: string[] }> = {
    about: {
        title: "About Us",
        paragraphs: [
            "Welcome to BGAMES — your ultimate destination for immersive online gaming and live casino entertainment. We bring together a premium collection of casino games, live dealer experiences, and exciting rewards in one modern and secure platform designed for players around the world.",
            "At BGAMES, we believe gaming should be more than just playing — it should be an experience. That's why we focus on delivering a sleek interface, smooth gameplay, and carefully selected games from top providers. Whether you enjoy classic casino tables, live roulette, blackjack, poker, or modern slot adventures, there's always something exciting waiting for you.",
            "Our platform is built with security, fairness, and performance in mind. With fast access, responsive design, and secure transactions, players can enjoy every moment with confidence. We continuously update our game library and features to ensure fresh content and the best possible user experience.",
            "BGAMES is also a growing community for passionate players who love competition, entertainment, and big wins. From exclusive VIP rewards and seasonal promotions to live tournaments and jackpots, we create opportunities for every player to enjoy and succeed.",
            "Join BGAMES today and discover a new generation of online casino entertainment — modern, exciting, and made for winners.",
        ],
    },
    payments: {
        title: "Payments",
        paragraphs: [
            "At BGAMES, we provide fast, secure, and reliable payment solutions to ensure a smooth gaming experience for every player. Our platform supports multiple trusted payment methods, allowing users to deposit and withdraw funds quickly and safely from anywhere in the world.",
            "We prioritize transaction security by using advanced encryption technologies and protected payment gateways. Every payment is processed with strict security standards to protect your personal and financial information at all times.",
            "Players can enjoy instant deposits, fast withdrawal processing, and transparent transaction history directly from their account dashboard. Our goal is to make every financial transaction simple, convenient, and hassle-free so you can focus entirely on your gaming experience.",
            "If you have any questions regarding deposits, withdrawals, payment verification, or supported methods, our support team is available 24/7 to assist you.",
        ],
    },
    privacy: {
        title: "Privacy Policy",
        paragraphs: [
            "BGAMES values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard the data you provide while using our platform and services.",
            "When you create an account or use our website, we may collect information such as your name, email address, payment details, device information, and gameplay activity. This information is used to improve platform performance, provide secure transactions, personalize your experience, and comply with legal obligations.",
            "We implement advanced security measures and encryption technologies to protect your data against unauthorized access, misuse, or disclosure. Your personal information is never sold to third parties, and all sensitive data is handled with strict confidentiality.",
            "BGAMES may use cookies and analytics tools to enhance website functionality, improve user experience, and understand player preferences. These technologies help us optimize our services and deliver more relevant content and promotions.",
            "By using BGAMES, you agree to the collection and use of information in accordance with this Privacy Policy. If you have any questions or concerns regarding your privacy or data protection, our support team is available to assist you at any time.",
        ],
    },
    terms: {
        title: "Terms & Conditions",
        paragraphs: [
            "By accessing and using BGAMES, you agree to comply with the following Terms & Conditions. These terms are designed to ensure a fair, secure, and enjoyable gaming environment for all users of the platform.",
            "Players must be of legal age in their jurisdiction to register and participate in any games or services offered on BGAMES. By creating an account, you confirm that all information provided is accurate, complete, and up to date.",
            "BGAMES reserves the right to modify, suspend, or terminate any service, promotion, or user account at any time if suspicious activity, fraud, abuse, or violation of platform rules is detected. Any attempt to manipulate gameplay, payment systems, or bonuses may result in account restrictions or permanent suspension.",
            "All deposits, withdrawals, bonuses, and promotional offers are subject to specific requirements and verification procedures. Players are responsible for reviewing bonus conditions, wagering requirements, and payment policies before participating.",
            "While we strive to provide uninterrupted access and accurate content, BGAMES does not guarantee that the platform will always operate without technical issues or temporary downtime. Users agree that gameplay and services are provided \"as available\" without warranties of any kind.",
            "By continuing to use BGAMES, you acknowledge that you have read, understood, and accepted these Terms & Conditions. If you do not agree with any part of these terms, you should discontinue use of the platform immediately.",
        ],
    },
};

export default function PagePublic({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const page = content[slug]
    console.log(page, "disbug")
    if (!page) {
        return <NotFound title="Page Not Found" />;
    }
    return (
        <Suspense fallback={<div className="pt-20  min-h-screen bg-slate-900"><div className="max-w-2xl mx-auto py-24 px-6 text-blue-300">Loading...</div></div>}>
            <div className="pt-20  min-h-screen bg-slate-900">
                <div className="max-w-2xl mx-auto py-24 px-6">
                    <h1 className="text-3xl font-bold text-amber-500 mt-8 mb-8 text-left">{page.title}</h1>
                    <div className="text-blue-300 leading-relaxed space-y-6">
                        {page.paragraphs.map((text: string, i: number) => (
                            <p key={i} className="whitespace-normal">{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>
    );
}