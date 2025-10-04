import { Navbar } from "../components/navbar";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CTASection } from "../components/landing/cta-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(20, 20, 40)"
        gradientBackgroundEnd="rgb(12, 5, 29)"
        firstColor="75, 0, 130"
        secondColor="138, 43, 226"
        thirdColor="72, 61, 139"
        fourthColor="123, 104, 238"
        fifthColor="147, 112, 219"
        pointerColor="220, 44, 164"
        size="80%"
        blendingValue="soft-light"
        containerClassName="fixed inset-0 z-0"
        interactive={false}
      />

      {/* Navbar */}
      <Navbar />
      <div
        className="fixed inset-0 z-0 opacity-80 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/projects/project_bg.png')",
          mixBlendMode: "overlay",
        }}
      />

      {/* Background Blur Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-teal-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 max-w-[1400px] mx-auto pt-20 sm:pt-24 md:pt-28">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[40px] p-8 sm:p-10 md:p-12 lg:p-16 mb-6 md:mb-8 relative overflow-hidden">
          {/* Decorative Image (Replacing Overlapping Cards) */}
          <img
            src="/about/about_bg_element.png"
            alt="Decorative Background"
            className="absolute right-4 sm:right-10 md:right-20 top-8 md:top-12 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] opacity-90 pointer-events-none select-none z-10 hidden sm:block"
          />

          {/* Hero Text */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Where Ideas
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Become Innovation
              </span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg md:text-xl">
              Focuses on transformation and creativity
            </p>
          </div>
        </div>

        {/* Who Are We & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Who Are We */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[40px] p-8 sm:p-10 md:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              <span className="text-white">Who </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Are{" "}
              </span>
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                We?
              </span>
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              <span className="font-bold text-white">
                DJS COMPUTE is a community of tech enthusiasts, innovators, and
                problem-solvers dedicated to exploring the endless possibilities
                of technology.
              </span>{" "}
              We aim to create an environment where learning, collaboration, and
              innovation thrive.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-br from-slate-800/40 to-teal-900/30 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[40px] p-8 sm:p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-600/10"></div>

            <img 
              src="/about/text-infinite.png" 
              alt="infinity_symbol" 
              className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mx-auto md:mx-0"
            /> 

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 relative z-10 pt-6 md:pt-10">
              Our Mission
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed relative z-10">
              Our mission is to empower students to develop their technical
              skills, collaborate on exciting projects, and stay ahead in the
              rapidly evolving world of technology.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 md:mb-10">
            What We Do?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* Card 1 - Workshop & Hackathons */}
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[35px] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent"></div>
              <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-3 md:mb-4 relative z-10 tracking-wide">
                WORKSHOP & HACKATHONS
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-4 md:mb-6 relative z-10 leading-relaxed">
                Gain firsthand knowledge from top AI experts and pioneers
                shaping the industry.
              </p>
              <div className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-blue-500/20 leading-none relative z-0 -mb-8 md:-mb-12">
                01
              </div>
            </div>

            {/* Card 2 - Project Development */}
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-950/50 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[35px] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
              <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-3 md:mb-4 relative z-10 tracking-wide">
                PROJECT DEVELOPMENT &<br />MENTORSHIP
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-4 md:mb-6 relative z-10 leading-relaxed">
                Participate in interactive workshops, live demos, and deep-dive
                sessions to sharpen your skills.
              </p>
              <div className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-blue-400/20 leading-none relative z-0 -mb-8 md:-mb-12">
                02
              </div>
            </div>

            {/* Card 3 - Coding Competitions */}
            <div className="bg-gradient-to-br from-slate-900/50 to-purple-950/50 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[35px] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-transparent"></div>
              <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-3 md:mb-4 relative z-10 tracking-wide">
                CODING COMPETITIONS &<br />CHALLENGES
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-4 md:mb-6 relative z-10 leading-relaxed">
                Connect with AI leaders, investors, startups, and fellow
                professionals at curated networking events.
              </p>
              <div className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-blue-500/20 leading-none relative z-0 -mb-8 md:-mb-12">
                03
              </div>
            </div>

            {/* Card 4 - Tech Talks */}
            <div className="bg-gradient-to-br from-teal-900/50 to-blue-950/50 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[35px] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent"></div>
              <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-3 md:mb-4 relative z-10 tracking-wide">
                TECH TALKS &<br />KNOWLEDGE-SHARING<br />SESSIONS
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-4 md:mb-6 relative z-10 leading-relaxed">
                Explore groundbreaking AI solutions, from emerging startups to
                tech giants redefining the future.
              </p>
              <div className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-blue-400/20 leading-none relative z-0 -mb-8 md:-mb-12">
                04
              </div>
            </div>
          </div>
        </div>
      </main>
      <CTASection/>
    </div>
  );
}