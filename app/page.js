import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Service from "@/components/Service";
// import Videos from "@/components/Videos";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Service />
      {/* <Videos /> */}
      <Contact />
      <Footer />
    </>
  );
}
