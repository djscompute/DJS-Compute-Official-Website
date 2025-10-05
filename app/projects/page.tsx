import { Navbar } from "../components/navbar";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import HorizontalTimeline from "./components/HorizontalTimeline";
import FeaturesGrid from "./components/FeaturesGrid";
import ProjectContainer from "./components/ProjectContainer";
import { projects as rawProjects } from "./components/ProjectsData";

export type Project = {
  id: number;
  title: string;
  description: string;
  link?: string;
  image?: string;
};

// Type the imported JS data for TS consumers
const projects: Project[] = rawProjects as unknown as Project[];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
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
        <main className="pt-24 px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mt-19">
              Showcasing Projects that Shape{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                What's Next
              </span>
            </h1>
          </div>
        </main>

        {/* Desktop: Horizontal Timeline with scroll effects */}
        <div className="hidden lg:block">
          <HorizontalTimeline projects={projects} />
        </div>

        {/* Mobile/Tablet: Simple vertical stack */}
        <div className="lg:hidden space-y-12 px-4 pb-16">
          {projects.map((project) => (
            <ProjectContainer key={project.id} project={project} />
          ))}
        </div>

        <FeaturesGrid />
      </div>
    </div>
  );
}
