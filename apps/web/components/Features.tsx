import { Building2Icon, BuildingIcon, CheckIcon, CodeXmlIcon, DatabaseIcon, ShieldIcon, Users2Icon, VoicemailIcon, ZapIcon } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="relative max-h-fit">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col justify-center items-center mb-12">
                    <h1 className="text-4xl font-bold text-center">Simple, Powerful Features</h1>
                    <p className="text-center text-muted-foreground">Everything you need to provide great customer support, without the complexity</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-12">
                    <div className="group relative bg-card p-4 rounded-2xl flex flex-col items-start gap-4 hover:border-primary transition-all duration-300 hover:shadow-xs opacity-100 translate-y-0">
                        <div className="relative group-hover:scale-105 transition-transform duration-300 w-12 h-12 justify-center items-center rounded-md bg-none p-2.5 border border-[#426FC9]">
                            <ZapIcon className="text-[#426FC9] h-full w-full " />
                        </div>
                        <h3 className="relative text-lg font-semibold text-foreground mb-2">
                            Intelligent AI Agent
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Train AI on your knowledge base. Advanced AI technology ensures accurate answers, not hallucinations. Handles 70% of questions automatically.
                        </p>
                    </div>
                    <div className="group relative bg-card p-4 rounded-2xl flex flex-col items-start gap-4 hover:border-primary transition-all duration-300 hover:shadow-xs opacity-100 translate-y-0">
                        <div className="relative group-hover:scale-105 transition-transform duration-300 w-12 h-12 justify-center items-center rounded-md bg-none p-2.5 border border-[#426FC9]">
                            <Users2Icon className="text-[#426FC9] h-full w-full " />
                        </div>
                        <h3 className="relative text-lg font-semibold text-foreground mb-2">
                            Unlimited Agents
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                        Add your entire team without worrying about costs. No per-seat pricing means predictable budgets as you grow.
                        </p>
                    </div><div className="group relative bg-card p-4 rounded-2xl flex flex-col items-start gap-4 hover:border-primary transition-all duration-300 hover:shadow-xs opacity-100 translate-y-0">
                        <div className="relative group-hover:scale-105 transition-transform duration-300 w-12 h-12 justify-center items-center rounded-md bg-none p-2.5 border border-[#426FC9]">
                            <ShieldIcon className="text-[#426FC9] h-full w-full " />
                        </div>
                        <h3 className="relative text-lg font-semibold text-foreground mb-2">
                            Multi-Tenant Architecture
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Organization-level isolation for enterprise security. Deploy for multiple clients or customer segments on one platform.
                        </p>
                    </div><div className="group relative bg-card p-4 rounded-2xl flex flex-col items-start gap-4 hover:border-primary transition-all duration-300 hover:shadow-xs opacity-100 translate-y-0">
                        <div className="relative group-hover:scale-105 transition-transform duration-300 w-12 h-12 justify-center items-center rounded-md bg-none p-2.5 border border-[#426FC9]">
                            <CodeXmlIcon className="text-[#426FC9] h-full w-full " />
                        </div>
                        <h3 className="relative text-lg font-semibold text-foreground mb-2">
                            2-Line Integration
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Copy, paste, done. Works with any framework, any platform. Live in 2 minutes, not 2 days. No complex SDKs or dependencies.
                        </p>
                    </div><div className="group relative bg-card p-4 rounded-2xl flex flex-col items-start gap-4 hover:border-primary transition-all duration-300 hover:shadow-xs opacity-100 translate-y-0">
                        <div className="relative group-hover:scale-105 transition-transform duration-300 w-12 h-12 justify-center items-center rounded-md bg-none p-2.5 border border-[#426FC9]">
                            <Building2Icon className="text-[#426FC9] h-full w-full " />
                        </div>
                        <h3 className="relative text-lg font-semibold text-foreground mb-2">
                            Self-Hosting Option
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Deploy on your infrastructure for complete data control. Perfect for regulated industries and enterprise compliance needs.
                        </p>
                    </div>
                    <div className="group relative bg-card p-4 rounded-2xl flex flex-col items-start gap-4 hover:border-primary transition-all duration-300 hover:shadow-xs opacity-100 translate-y-0">
                        <div className="relative group-hover:scale-105 transition-transform duration-300 w-12 h-12 justify-center items-center rounded-md bg-none p-2.5 border border-[#426FC9]">
                            <VoicemailIcon className="text-[#426FC9] h-full w-full " />
                        </div>
                        <h3 className="relative text-lg font-semibold text-foreground mb-2">
                            Voice Support Integration
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Seamlessly integrate voice support into your customer service. Enhance user experience with AI-driven voice interactions using Vapi.
                        </p>
                    </div>
                </div>
                <div className="my-20 text-center">
                    <h3 className="text-3xl text-foreground md-8">And Much More...</h3>
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        <div className="inline-flex border-2 border-border w-fit rounded-full px-4 py-2 text-sm items-center gap-2"><CheckIcon className="text-[#426FC9] h-4 w-4"/>
                <span className="text-foreground">Knowledge Base Integration</span></div>
                <div className="inline-flex border-2 border-border w-fit rounded-full px-4 py-2 text-sm items-center gap-2 "><CheckIcon className="text-[#426FC9] h-4 w-4"/>
                <span className="text-foreground">AI-Powered Auto-Responses</span></div>
                <div className="inline-flex border-2 border-border w-fit rounded-full px-4 py-2 text-sm items-center gap-2 "><CheckIcon className="text-[#426FC9] h-4 w-4"/>
                <span className="text-foreground">Analytics Dashboard</span></div>
                <div className="inline-flex border-2 border-border w-fit rounded-full px-4 py-2 text-sm items-center gap-2 "><CheckIcon className="text-[#426FC9] h-4 w-4"/>
                <span className="text-foreground">Team Collaboration</span></div>
                <div className="inline-flex border-2 border-border w-fit rounded-full px-4 py-2 text-sm items-center gap-2"><CheckIcon className="text-[#426FC9] h-4 w-4"/>
                <span className="text-foreground">White-Label Ready</span></div>
                <div className="inline-flex border-2 border-border w-fit rounded-full px-4 py-2 text-sm items-center gap-2 "><CheckIcon className="text-[#426FC9] h-4 w-4"/>
                <span className="text-foreground">Voice Integrations</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}