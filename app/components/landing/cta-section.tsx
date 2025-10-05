"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CTASection() {
    const [email] = useState("info.djscompute@gmail.com")
    // Generate star positions on client only
    const [stars, setStars] = useState<Array<{left: string; top: string; opacity: number}>>([])
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(email)
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
            } catch (err) {
                setCopied(false)
                alert("Failed to copy email. Please copy manually.")
            }
        } else {
            // fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = email;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            } catch (err) {
                setCopied(false);
                alert("Failed to copy email. Please copy manually.");
            }
            document.body.removeChild(textarea);
        }
    }

    useEffect(() => {
      const generated = Array.from({ length: 30 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.3,
      }))
      setStars(generated)
    }, [])

    return (
        <section className="relative  py-20 px-4 overflow-hidden">
            <div className="relative z-10 max-w-5xl mx-auto">
                <div style={{ backgroundImage: "url('/landing/ready-to-collaborate.png')" }} className="backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10 min-h-[600px] bg-cover bg-center bg-no-repeat flex flex-col justify-center relative">
                    {/* Starry background generated client-side */}
                    <div className="absolute inset-0 animate-pulse opacity-30 z-0">
                        {stars.map((star, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{ left: star.left, top: star.top, opacity: star.opacity }}
                            />
                        ))}
                    </div>
                    {/* Content */}
                    <div className="text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Collaborate on Your Next Project?
                        </h2>
                        <p className="text-gray-400 text-lg mb-10">
                            Get started with DJS Compute and stay on top of your rankings in no time!
                        </p>

                        {/* Email input with copy button */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                            <div className="relative flex items-center bg-[#0a1628]/80 rounded-full px-6 py-3 border border-white/10 w-full sm:w-auto">
                                <input
                                    type="email"
                                    value={email}
                                    readOnly
                                    className="bg-transparent text-gray-400 outline-none w-full sm:w-64"
                                />
                            </div>
                            <Button
                                onClick={handleCopy}
                                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-6 rounded-full font-medium transition-colors cursor-pointer"
                            >
                                {copied ? "Copied!" : "Copy"}
                            </Button>
                        </div>

                        {/* Features */}
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                            <span>No credit card required</span>
                            <span className="text-gray-600">✦</span>
                            <span>14-days free trial</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
