import { Navbar } from "../components/navbar"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main className="pt-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Our Projects</h1>
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <p className="text-white/80 text-lg">
              Coming soon... Explore the innovative projects and initiatives developed by our talented members.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
