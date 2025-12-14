import { BotIcon, BrainIcon, DatabaseIcon, MessageSquare, PhoneCallIcon, SparklesIcon, UserRound, UsersRound, VoicemailIcon } from "lucide-react";

export default function HowItWorks(){
    return (
        <section id="how-it-works" className="relative h-fit my-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className=" mb-12 justify-center flex flex-col items-center">
                 <div className="inline-flex border-2 border-border w-fit rounded-full px-4 py-2 text-sm items-center gap-2"><SparklesIcon className="text-[#426FC9] h-4 w-4"/>
                <span className="text-foreground">AI-Powered Support</span></div>
                <div className="mb-12">
                    <h2 className="text-6xl font-medium mb-2 text-center sm:mt-6">
                    AI That Learns Your Business
                </h2>
                <p className="text-[#7C7C7E] text-center ">Train our AI on your docs and FAQs. It provides accurate answers to customer questions - automatically, 24/7.</p>
                </div>
                
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 container items-center mb-12">
                 <div className="bg-card border-border border rounded-2xl p-8 overflow-hidden relative">
                    <div className="relative z-10">
                    <BotIcon className="text-[#426FC9] h-24 w-24" />
                    <h3 className="text-2xl text-foreground mb-4">How It Works</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-border flex items-center justify-center text-sm text-muted-foreground">1</div>
                            <div>
                                <h4 className="text-foreground mb-1">Upload Your Knowledge</h4>
                                <p className="text-muted-foreground text-sm">Add docs, FAQs, help articles, or connect your existing knowledge base</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-border flex items-center justify-center text-sm text-muted-foreground">2</div>
                            <div>
                                <h4 className="text-foreground mb-1">AI Learns & Indexes</h4>
                                <p className="text-muted-foreground text-sm">Our AI processes and understands your content</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-border flex items-center justify-center text-sm text-muted-foreground">3</div>
                            <div>
                                <h4 className="text-foreground mb-1">Accurate Answers</h4>
                                <p className="text-muted-foreground text-sm">AI retrieves relevant info and generates precise responses</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-border flex items-center justify-center text-sm text-muted-foreground">4</div>
                            <div>
                                <h4 className="text-foreground mb-1">Human Escalation</h4>
                                <p className="text-muted-foreground text-sm">Complex questions? AI hands off to your team with context</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-border flex items-center justify-center text-sm text-muted-foreground">5</div>
                            <div>
                                <h4 className="text-foreground mb-1">Voice Integration</h4>
                                <p className="text-muted-foreground text-sm">Voice  integration and call is possible </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-card border-border border rounded-2xl p-6 hover:shadow-xs transition-all ">
                    <div className="text-4xl font-bold text-[#426FC9]">Most Questions</div>
                    <h4 className="text-foreground mb-2">Automated Responses</h4>
                    <p className="text-sm text-muted-foreground">AI handles common questions automatically, freeing up your team for complex issues</p>
                    </div>
                    <div className="bg-card border-border border rounded-2xl p-6 hover:shadow-xs transition-all ">
                    <div className="text-4xl font-bold text-[#426FC9]">24/7</div>
                    <h4 className="text-foreground mb-2">Always Available</h4>
                    <p className="text-sm text-muted-foreground">Instant responses any time of day. No time zones, no delays, no frustration</p>
                    </div>
                    <div className="bg-card border-border border rounded-2xl p-6 hover:shadow-xs transition-all ">
                    <div className="text-4xl font-bold text-[#426FC9]">Instant</div>
                    <h4 className="text-foreground mb-2">Response Time</h4>
                    <p className="text-sm text-muted-foreground">Lightning-fast AI answers that keep customers happy and engaged</p>
                    </div>
                </div>
                </div>
                <div className="grid  sm:grid-cols-2 gap-6 mb-12">
                    <div className="relative bg-card border-border border rounded-2xl p-6 hover:shadow-xs transition-all">
                    <div className="flex items-start gap-4 ">
                        <div className="flex-shrink-0 w-12 h-12 justify-center items-center rounded-md bg-[#426FC9] p-2.5">
                            <BrainIcon className="text-white h-full w-full " />
                        </div>
                        <div>
                            <h3 className="text-lg text-foreground mb-2">Smart AI Intelligence</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Train AI on your documentation, FAQs, and knowledge base. Get accurate, context-aware responses every time.</p>
                        </div>
                    </div>
                    </div>
                    <div className="relative bg-card border-border border rounded-2xl p-6 hover:shadow-xs transition-all">
                    <div className="flex items-start gap-4 ">
                        <div className="flex-shrink-0 w-12 h-12 justify-center items-center rounded-md bg-[#426FC9] p-2.5">
                            <DatabaseIcon className="text-white h-full w-full " />
                        </div>
                        <div>
                            <h3 className="text-lg text-foreground mb-2">Your Knowledge, Your AI</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Upload documents, connect your help center, or integrate with your CMS. AI learns from your actual content.</p>
                        </div>
                    </div>
                    </div>
                    <div className="relative bg-card border-border border rounded-2xl p-6 hover:shadow-xs transition-all">
                    <div className="flex items-start gap-4 ">
                        <div className="flex-shrink-0 w-12 h-12 justify-center items-center rounded-md bg-[#426FC9] p-2.5">
                            <MessageSquare className="text-white h-full w-full " />
                        </div>
                        <div>
                            <h3 className="text-lg text-foreground mb-2">Smart Auto-Responses</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">AI handles common questions automatically, providing instant answers while your team focuses on complex issues.</p>
                        </div>
                    </div>
                    </div>
                    <div className="relative bg-card border-border border rounded-2xl p-6 hover:shadow-xs transition-all">
                    <div className="flex items-start gap-4 ">
                        <div className="flex-shrink-0 w-12 h-12 justify-center items-center rounded-md bg-[#426FC9] p-2.5">
                            <UsersRound className="text-white h-full w-full " />
                        </div>
                        <div>
                            <h3 className="text-lg text-foreground mb-2">Seamless Human Handoff</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">When AI can't help, conversations smoothly transfer to human agents with full context preserved.</p>
                        </div>
                    </div>
                    </div>
                    <div className="relative bg-card border-border border rounded-2xl p-6 hover:shadow-xs transition-all">
                        <div className="flex items-start gap-4 ">
                        <div className="flex-shrink-0 w-12 h-12 justify-center items-center rounded-md bg-[#426FC9] p-2.5">
                            <VoicemailIcon className="text-white h-full w-full " />
                        </div>
                        <div>
                            <h3 className="text-lg text-foreground mb-2">Voice Integration</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Integrate voice capabilities to allow customers to interact with AI through voice commands, enhancing accessibility and user experience.</p>
                        </div>
                    </div>
                    </div>
                     <div className="relative bg-card border-border border rounded-2xl p-6 hover:shadow-xs transition-all">
                        <div className="flex items-start gap-4 ">
                        <div className="flex-shrink-0 w-12 h-12 justify-center items-center rounded-md bg-[#426FC9] p-2.5">
                            <PhoneCallIcon className="text-white h-full w-full " />
                        </div>
                        <div>
                            <h3 className="text-lg text-foreground mb-2">Call Integration</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Allow customers support through voice commands, enhancing user experience</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="inline-flex border-2 border-border w-fit rounded-full px-4 py-2 text-sm items-center gap-2 mb-12"><DatabaseIcon className="text-[#426FC9] h-4 w-4"/>
                <span className="text-foreground">Multi-tenant architecture with organization-level isolation for enterprise security</span></div>
                </div>
            </div>
        </section>
    )
}