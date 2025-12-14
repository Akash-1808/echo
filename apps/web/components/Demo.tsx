import { ArrowLeftIcon, ArrowRightIcon, CheckCircle2Icon, CheckCircleIcon } from "lucide-react";
import Button from "./Button";

export default function Demo() {
    return (
        <section id="demo" className="py-16 sm:py-20 bg-[#C2D6FF] relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-poppins font-medium text-foreground mb-4">Start Building Better Customer Support</h2>
                  <p className="text-2xl text-muted-foreground">Get started with our modern customer support platform. Free to start, no credit card required.</p>
                  <a href="/conversations"><Button className="text-white gap-2 py-5 px-12 mt-12">Get Started Free <ArrowRightIcon className="text-white"/></Button></a>
                </div>
                <div className="flex-wrap flex items-center justify-center gap-8 pt-12 text-md text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="text-[#426FC9] h-8 w-8"/>
                        <span>Free to start</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="text-[#426FC9] h-8 w-8"/>
                        <span>Setup in minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="text-[#426FC9] h-8 w-8"/>
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="text-[#426FC9] h-8 w-8"/>
                        <span>Reduce 75% of work</span>
                    </div>
                </div>
            </div>
        </section>
    )
}