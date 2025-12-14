"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";

export default function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    },[])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={`fixed z-30 w-screen pt-7 pb-7 transition-all hidden lg:flex items-center ${
            isScrolling
            ? "bg-white/10 backdrop-blur-2xl shadow-sm"
            : "bg-none border-0" 
        }`}>
            <Link href={"/"}>
            <div className="flex items-center gap-x-2 ml-[102px]">
                
                <Image src="/logo.svg" alt="Logo" width={30} height={30} />
                <span className="text-[#292B3D] text-xl">echo.chat</span>
            </div>
            </Link>
            <div className="flex-grow flex justify-center">
                <ul className="flex items-center gap-x-8 text-[#6E7191]">
                    <li><Link href="#features" className="hover:text-[#426FC9]">Features</Link></li>
                    <li><Link href="#integrations" className="hover:text-[#426FC9]">Integration</Link></li>
                    <li><Link href="#how-it-works" className="hover:text-[#426FC9]">How It Works</Link></li>
                </ul>
            </div>
            <div className="flex items-center gap-x-4 mr-[102px]">
                <Button variant="ghost" size="md" ><a href="/sign-in">Sign In</a></Button>
                <a href="/conversations"><Button variant="primary" size="md" className="ml-4 gap-2">Get Started <LuArrowRight /></Button></a>
            </div>
        </nav>
    )
}