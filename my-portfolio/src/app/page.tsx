import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero-section/Hero";
import About from "./components/about/About";

export default function Home() {
  return (
    <main className=" antialiased bg-grid-white/[0.0] text-white">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
