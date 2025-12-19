import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Integration from "@/components/Integration";
import Navbar from "@/components/Navbar";
import Script from "next/script";

export default function Page() {
    return (
        <div className="relative " style={{ scrollBehavior: "smooth"}}>
            <Script
          src="https://echo-widget-rust.vercel.app/widget.js"
          data-organization-id="org_31jTXdDXd7zomyLjOjuz03MfLqg"
          strategy="afterInteractive" 
        />
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        <Integration />
        <Demo />
        <Footer />
        </div>
    );
}
