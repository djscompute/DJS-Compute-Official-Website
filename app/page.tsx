import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { Navbar } from "./components/navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Spline from '@splinetool/react-spline/next';

export default function HomePage() {
  return (
    // Main container for background layers.
    <div className="relative h-screen bg-[#0c021d] overflow-hidden">
      
      {/* Backgrounds are now managed at z-index 0, behind all content. */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(20, 20, 40)"
        gradientBackgroundEnd="rgb(60, 20, 80)"
        firstColor="75, 0, 130"
        secondColor="138, 43, 226"
        thirdColor="72, 61, 139"
        fourthColor="123, 104, 238"
        fifthColor="147, 112, 219"
        pointerColor="220, 44, 164"
        size="80%"
        blendingValue="multiply"
        containerClassName="fixed inset-0 z-0"
        interactive={true}
      />
      <div
        className="fixed inset-0 z-0 opacity-80 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/landing/landing-bg.png')",
          mixBlendMode: "overlay",
        }}
      />

      {/* Floating Decorative Elements */}
      <div className="fixed top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
      <div className="fixed bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="fixed top-1/2 right-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      {/* This is the new layout structure.
        - It uses flexbox to push the header to the top and the cards to the bottom.
        - `justify-between` creates space between the two main sections.
        - `overflow-hidden` is applied here to contain the decorative elements without affecting the Spline model.
      */}
      <main className="relative z-10 flex flex-col h-screen items-center justify-between p-4 md:p-8 lg:p-12 overflow-hidden">
        
        {/* Header Section (Logo & Text) */}
        <div className="flex flex-col items-center text-center pt-16 flex-shrink-0">
          <Image
            src="/landing/djs-compute-logo.png"
            alt="DJS Compute"
            width={600}
            height={250}
            className="w-auto h-32 sm:h-40 md:h-48"
            priority
          />
          <div className="mt-4 mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-b from-[#5695fb] to-[#8955ff] bg-clip-text text-transparent block">
                The Official Computing Club
              </span>
              <span className="bg-gradient-to-b from-[#5695fb] to-[#8955ff] bg-clip-text text-transparent block">
                of DJSCE
              </span>
            </h1>
            <p className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold">
              <span className="bg-gradient-to-b from-[#5695fb] to-[#8955ff] bg-clip-text text-transparent">
                Powered by{" "}
              </span>
              <span className="text-yellow-400">AWS</span>
            </p>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-4 lg:gap-8 items-end flex-shrink-0 pb-4">
          
          {/* Description Card */}
          <div className="flex-1 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-white">Discover. Develop. Deliver.</h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              DJS Compute Tech Club fosters a culture of learning and innovation. We equip members with practical
              skills, real-world projects, and the confidence to excel in the tech industry.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium text-sm md:text-base group"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Consultation Card with Spline Model */}
          <div className="relative flex-1">
            {/* CORE FIX:
              - The container is larger (w/h-[300px]) to give the model space.
              - It's positioned absolutely above the button.
              - The problematic `marginTop` style was removed from the Spline component itself.
              - Hidden on small devices, visible only on lg and above
              - Wrapped in overflow-hidden container to hide watermark at bottom
            */}
            <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-[300px] h-[280px] sm:w-[350px] sm:h-[320px] overflow-hidden pointer-events-none">
              <div className="w-full h-[350px] sm:h-[400px]">
                <Spline
                  scene="https://prod.spline.design/5vOoyHHHXPV6NNnI/scene.splinecode"
                />
              </div>
            </div>
            
            <Link
              href="/contact"
              className="block w-full bg-black text-white font-semibold py-4 px-6 rounded-full text-center transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:bg-gray-900 text-sm md:text-base relative group overflow-hidden"
              style={{
                background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, #8955ff, #5695fb) border-box',
                border: '2px solid transparent'
              }}
            >
              <span className="relative z-10">Request a Consultation</span>
              {/* Gradient border that disappears on hover */}
              <div className="absolute inset-0 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Existing hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}