"use client";
import { CheckIcon, SparkleIcon, SparklesIcon } from "lucide-react";
import Button from "./Button";
import { LuArrowRight } from "react-icons/lu";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { FaRegDotCircle } from "react-icons/fa";
import { PiPaperPlaneFill } from "react-icons/pi";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative mt-24 lg:mt-0 z-10 min-h-screen flex flex-row items-center justify-center">
            <div className="px-12 container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 ">
                <div className="inline-flex border-2 border-border w-fit rounded-full px-4 py-2 text-sm items-center gap-2"><SparklesIcon className="text-[#426FC9] h-4 w-4"/>
                <span className="text-foreground">Free Beta - No Credit Card Required</span></div>
                <h1 className={` text-4xl lg:text-7xl tracking-tight font-poppins font-bold leading-tight w-fit`}>
                    <span className="text-[#426FC9]">Free</span> Customer Support.
                     Powered by AI.
                </h1>
                <p className="max-w-xl text-muted-foreground">We're a new startup building AI-powered customer support. Try it free - we're in beta. No credit card required.</p>
                <div className="inline-flex gap-4">
                    <Link href="/conversations"><Button className="gap-2 items-center">Start Free Beta <LuArrowRight /></Button></Link>
                    <Link href="/billing"><Button className="gap-2 items-center" variant="outline">Try Pro <LuArrowRight /></Button></Link>
                </div>
                <div className="flex-wrap flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <CheckIcon className="text-[#426FC9] h-4 w-4"/>
                        <span>AI-Powered Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon className="text-[#426FC9] h-4 w-4"/>
                        <span>2-Minute Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon className="text-[#426FC9] h-4 w-4"/>
                        <span>Voice Integration</span>
                    </div>
                </div>
            </div>
            <div className="relative lg:h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-md max-auto">
                    <div className="bg-card shadow-2xl rounded-2xl border-border overflow-hidden border ">
                        <div className="bg-primary px-6 py-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 items-center justify-center flex">
                                <HiOutlineChatBubbleOvalLeftEllipsis className="text-white h-6 w-6"/>
                            </div>
                            <div className="flex-1 ">
                                <h3 className="text-white font-semibold text-sm">Support Chat</h3>
                                <p className="text-white/70 text-xs">We reply Instantly</p>
                            </div>
                            <div className="w-2 h-2 animate-pulse bg-green-400 rounded-full"/>
                        </div>
                        <div className="p-6 space-y-4 bg-muted/30 h-80 overflow-hidden">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary items-center justify-center flex">
                                    <FaRegDotCircle className="text-white h-4 w-4 " />
                                </div>
                                <div className="flex items-center max-w-[80%] bg-card px-4 py-2 rounded-lg rounded-tl-none border">
                                    <p className="text-sm">Hello! How can I assist you today?</p>
                                </div>
                            </div>
                            <div className="flex gap-3 justify-end">
                                <div className="flex items-center w-fit bg-primary px-4 py-2 rounded-lg rounded-tr-none border ">
                                    <p className="text-sm text-white">Hello! How can I assist you today?</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary items-center justify-center flex">
                                    <FaRegDotCircle className="text-white h-4 w-4 " />
                                </div>
                                <div className="flex items-center max-w-[80%] bg-card px-4 py-2 rounded-lg rounded-tl-none border">
                                    <p className="text-sm text-left">We're currently free during our beta! No credit card required. 🎉</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary items-center justify-center flex">
                                    <FaRegDotCircle className="text-white h-4 w-4 " />
                                </div>
                                <div className="flex items-center max-w-[80%] bg-card px-4 py-2 rounded-lg rounded-tl-none border">
                                    <p className="text-sm text-left">...</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-card border-t border-border">
                            <div className="flex items-center gap-3 rounded-full px-4 py-2 ">
                                <input id="user-input" name="user-input" placeholder="Type your message here..." className="bg-transparent outline-none flex-1" type="text" onChange={(e) => {e.target.value}}/>
                                <Button variant="primary" className="rounded-full" size="icon" onClick={()=>{}}>
                                    <PiPaperPlaneFill  className="h-5 w-5 text-white"/>
                                </Button>
                            </div>
                         </div>
                    </div>
                    <div className="absolute -top-4 -right-3 bg-primary rounded-full px-3 py-2 flex items-center shadow-lg gap-2 animate-pulse text-white text-xs">
                        Ai Powered ✨
                    </div>
                </div>
                
            </div>
            </div>
        </section>
    )
}