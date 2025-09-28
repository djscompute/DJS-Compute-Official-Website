import { Navbar } from "../components/navbar";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import HorizontalTimeline from "./components/HorizontalTimeline";
import FeaturesGrid from "./components/FeaturesGrid";

export type Project = {
  id: number;
  title: string;
  description: string;
  link?: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "SVKM Hall Booking System",
    description:
      "A streamline system to manages hall bookings and events for SVKM institution with real-time availability and...",
    link: "#",
    image: "/projects/project-1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for project 2.",
    link: "#",
    image: "/projects/project-1.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for project 3.",
    link: "#",
    image: "/projects/project-1.png",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description for project 4.",
    link: "#",
    image: "/projects/project-1.png",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description for project 5.",
    link: "#",
    image: "/projects/project-1.png",
  },
];

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
        <HorizontalTimeline projects={projects} />
        <FeaturesGrid />
      </div>
    </div>
  );
}
