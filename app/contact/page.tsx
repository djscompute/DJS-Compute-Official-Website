import { Navbar } from "../components/navbar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main className="pt-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <p className="text-white/80 text-lg">
              Coming soon... Get in touch with us to learn more about joining DJS Compute or collaborating on projects.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
