import { MoveRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Personal Information removal",
      description:
        "Lets users quickly find answers to their questions without having to search through multiple sources.",
    },
    {
      title: "AI-Powered SEO Optimization",
      description:
        "Boost your online visibility and rank higher with our intelligent SEO strategies and automation tools.",
    },
    {
      title: "Custom Web Development",
      description:
        "From sleek landing pages to complex web applications, we build solutions that perform and impress.",
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-blue-900/50 text-white text-sm rounded-full border border-blue-500/30">
              Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See our Services</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our team delivers technology-driven solutions across web development, AI, design, and marketing to empower
            your projects and ideas.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl p-[1.5px] transition-all duration-300 ease-in-out hover:scale-[1.03] shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-fuchsia-500/50"
              style={{
                background: 'linear-gradient(120deg, #c026d3, #8b5cf6, #3b82f6)',
                clipPath: 'polygon(0% 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, 0% 100%)',
              }}
            >
              <div
                className="bg-gradient-to-b from-[#0b001c] via-[#1a1a2e] to-[#2c104d] text-white p-8 rounded-3xl h-full flex flex-col min-h-[420px]"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, 0% 100%)',
                }}
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 text-left">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-left">{service.description}</p>
                </div>
                <a href="#" className="flex items-center text-white font-semibold mt-8 hover:text-purple-400 transition-colors group/link">
                  Explore More
                  <MoveRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}