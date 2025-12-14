import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section id="footer" className="bg-card border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                    <div>
                       <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
                       <ul className="space-y-2 text-xs text-muted-foreground sm:text-sm">
                        <li>
                            <Link href="/#features" className="hover:text-primary transition-colors">Features</Link>
                        </li>
                        <li>
                            <Link href="/integrations" className="hover:text-primary transition-colors">Integration</Link>
                        </li>
                        <li>
                            <Link href="/conversations" className="hover:text-primary transition-colors">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/billing" className="hover:text-primary transition-colors">Pricing</Link>
                        </li>
                        </ul> 
                    </div>
                </div>
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                            <a className="flex items-center gap-2" href="/">
                               <Image src="/logo.svg" alt="Logo" width={30} height={30} /> 
                               <span className="font-normal text-base text-foreground">echo.chat</span>
                            </a>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                © 2025 echo.chat. All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}