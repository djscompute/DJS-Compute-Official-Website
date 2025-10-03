import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { ServicesSection } from "./services-section"

export function TrustedBySection() {
    const marqueeItems = [{
        quote: "DJS Compute transformed our online presence with their expert SEO services. Our traffic and sales have skyrocketed!",
        name: "Alice Johnson",
        title: "CEO, Tech Solutions"
    },
    {
        quote: "The team at DJS Compute is fantastic! Their web development skills brought our vision to life, and their AI solutions are top-notch.",
        name: "Bob Smith",
        title: "Founder, InnovateX"
    }]

    return (
        <section style={{
            backgroundImage: "url('/landing/trusted-by-bg.png')",
        }} className="relative py-16 overflow-hidden w-full bg-cover bg-center bg-no-repeat">
            {/* Top gradient overlay for seamless transition */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0c021d] to-transparent z-10" />
            {/* Bottom gradient overlay for seamless transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a0a3e] to-transparent z-10" />
            {/* Grid dot background effect - hidden on small screens */}
            <div className="absolute inset-0 opacity-40 w-full hidden lg:block">
                <div className="grid grid-cols-20 gap-4 h-full w-full p-4 pl-15">
                    {[...Array(400)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 animate-pulse"
                            style={{
                                opacity: 0.3 + (i % 3) * 0.2,
                            }}
                        />
                    ))}
                </div>
            </div>
            <ServicesSection />

            {/* Soft glow effects for smooth transitions */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/10 blur-3xl" />
            
            <div className="relative z-20">
                {/* Trusted by heading */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold"><span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Trusted </span><span className="text-white">by</span></h2>
                </div>

                {/* Infinite scrolling marquee */}
                <div className="mb-16">
                    <InfiniteMovingCards items={marqueeItems} direction="right" speed="fast" pauseOnHover={true} />
                </div>

                {/* Why choose us section */}
                <div className="text-center px-4">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-1 bg-yellow-600/20 text-yellow-500 text-sm rounded-full border border-yellow-600/30">
                            Features
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why <span className="text-purple-500">choose</span> us ?
                    </h3>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        We are the only service that provides all 3 services as a packaged service
                    </p>
                </div>
            </div>
        </section>
    )
}
