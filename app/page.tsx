import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-black text-white">
			<div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />
			<div className="absolute right-0 top-[700px] h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[170px]" />
			<div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

			<div className="relative z-10">
				<Navbar />
				<Hero />
				<Features />
				<Stats />
				<Testimonials />
				<Services />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		</main>
	);
}
