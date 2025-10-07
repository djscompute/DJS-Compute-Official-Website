import Link from "next/link";
import { Navbar } from "./components/navbar";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

export default function NotFound() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
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

      <div
        className="fixed inset-0 z-0 opacity-80 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/projects/project_bg.png')",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight">404</h1>
            <h2 className="text-2xl md:text-3xl mt-4 font-semibold">Page not found</h2>
            <p className="mt-6 text-gray-300 text-lg">
              Sorry — the page you are looking for does not exist or has been moved.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:opacity-95"
              >
                Go home
              </Link>

              <Link
                href="/projects"
                className="px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5"
              >
                View projects
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
