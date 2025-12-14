import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Integration from "@/components/Integration";
import Navbar from "@/components/Navbar";

export default function Page() {
    return (
        <div className="relative " style={{ scrollBehavior: "smooth"}}>
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