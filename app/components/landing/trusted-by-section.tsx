import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { ServicesSection } from "./services-section"
import { Shield, Zap, Layers, Key, TrendingUp, Users } from "lucide-react"

export function TrustedBySection() {
    const marqueeItems = [
        {
            quote: "DJS Compute built our SVKM Hall Tracker — a dependable attendance and room-management system. Their team reduced manual check-ins by over 80% and delivered a polished, easy-to-use admin dashboard. They were responsive during rollout and provided excellent post-launch support.",
            name: "",
            title: "Operations Manager, SVKM Hall"
        },
        {
            quote: "Working with DJS Compute accelerated our product development. They helped Recrutr ship a realtime candidate-matching dashboard that improved recruiter efficiency and reliably handled our traffic spikes.",
            name: "Amit Desai",
            title: "CTO, Recrutr"
        },
        {
            quote: "The team provided hands-on guidance and shipped production-ready ML pipelines that scaled for Scholr's student base. Their pragmatic engineering and clear documentation made it easy for our team to take ownership.",
            name: "Megha Rao",
            title: "Co-founder, Scholr"
        }
    ]

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

                {/* Infinite scrolling marquee - centered within a constrained container */}
                <div className="mb-16 flex justify-center">
                    <div className="w-full max-w-4xl">
                        <InfiniteMovingCards items={marqueeItems} direction="right" speed="fast" pauseOnHover={true} />
                    </div>
                </div>

                {/* Why choose us section */}
                <div className="px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
                        <div className="text-center md:text-left">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-1 bg-yellow-600/20 text-yellow-500 text-sm rounded-full border border-yellow-600/30">
                                    Features
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Why <span className="text-purple-500">choose</span> us?
                            </h3>
                            <p className="text-gray-300 text-lg max-w-xl">
                                Businesses choose COMPUTE because we build dependable products that create long-term value. We focus on secure, maintainable systems that scale with your needs, and we make it simple for your team to own and operate the technology we deliver.
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <a className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition" href="/projects">
                                    <Zap className="w-4 h-4 text-white" />
                                    See our projects
                                </a>
                                <a className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-white border border-white/10 rounded-full hover:bg-white/5 transition" href="mailto:info.djscompute@gmail.com">
                                    <Users className="w-4 h-4 text-white" />
                                    Contact us
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-black/40 border border-white/6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md">
                                            <Shield className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Secure & Compliant</h4>
                                            <p className="text-sm text-gray-300">Security is built in, not bolted on — we follow best practices so your data stays safe.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md">
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">High Performance</h4>
                                            <p className="text-sm text-gray-300">Fast, responsive apps and websites that perform well in the real world.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-gradient-to-br from-green-400 to-cyan-400 rounded-md">
                                            <Layers className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Modular & Maintainable</h4>
                                            <p className="text-sm text-gray-300">We build modular systems so improvements and scaling are low cost.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-md">
                                            <Key className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Full Ownership</h4>
                                            <p className="text-sm text-gray-300">We provide complete documentation and handover so you retain full control.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-md">
                                            <TrendingUp className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Cost Efficient</h4>
                                            <p className="text-sm text-gray-300">We optimize for value — efficient engineering that reduces long-term costs.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-md">
                                            <Users className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Reliable Partnership</h4>
                                            <p className="text-sm text-gray-300">We aim for long-term partnerships and support your product as it grows.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
