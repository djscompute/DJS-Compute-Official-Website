"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Project } from "../page";
import TimelineNode from "./TimelineNode";
import ProjectContainer from "./ProjectContainer";

interface HorizontalTimelineProps {
  projects: Project[];
}

const HorizontalTimeline: React.FC<HorizontalTimelineProps> = ({
  projects,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const sectionDuration = 1 / projects.length;

  // Keep local scroll value in state so we can compute numeric progress values and re-render
  const [scroll, setScroll] = useState(() => scrollYProgress.get());
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setScroll(v));
    return () => unsubscribe();
  }, [scrollYProgress]);

  const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const getRawProgress = (index: number) => {
    const start = index * sectionDuration;
    const end = start + sectionDuration;
    const span = end - start || 1;
    return clamp((scroll - start) / span, 0, 1);
  };

  const computeOpacity = (index: number) => {
    const start = index * sectionDuration;
    const end = start + sectionDuration;
    const isLastProject = index === projects.length - 1;
    const isFirstProject = index === 0;
    const fadeFraction = 0.06;

    if (isFirstProject) {
      if (scroll <= end - sectionDuration * fadeFraction) return 1;
      if (scroll >= end + sectionDuration * fadeFraction) return 0;
      return 1;
    }

    if (isLastProject) {
      const inStart = start - sectionDuration * fadeFraction;
      const inEnd = start + sectionDuration * fadeFraction;
      return clamp((scroll - inStart) / (inEnd - inStart), 0, 1);
    }

    const inStart = start - sectionDuration * fadeFraction;
    const inEnd = start + sectionDuration * fadeFraction;
    const outStart = end - sectionDuration * fadeFraction;
    const outEnd = end + sectionDuration * fadeFraction;

    if (scroll < inStart) return 0;
    if (scroll >= inStart && scroll < inEnd) {
      return clamp((scroll - inStart) / (inEnd - inStart), 0, 1);
    }
    if (scroll >= inEnd && scroll < outStart) return 1;
    if (scroll >= outStart && scroll < outEnd) {
      return 1 - clamp((scroll - outStart) / (outEnd - outStart), 0, 1);
    }
    return 0;
  };

  return (
    <section
      ref={targetRef}
      className="relative bg-transparent"
      style={{ height: `${projects.length * 60}vh` }}
    >
      <div className="sticky top-24 flex h-screen flex-col items-start overflow-hidden pt-4">
        {/* Timeline track container with vertical margin */}
        <div className="w-full h-24 flex items-center justify-center px-4 md:px-8 lg:px-12">
          {/* Enclosed container */}
          <div className="relative w-full h-20 bg-slate-900/50 border border-slate-700 rounded-full flex items-center px-4 md:px-8 lg:px-12">
            {/* Track Background */}
            <div className="h-1.5 w-full rounded-full bg-neutral-700" />

            {/* Track Progress */}
            <motion.div
              style={{
                width: `${Math.round(Math.max(0, Math.min(1, scroll)) * 100)}%`,
              }}
              className="absolute top-1/2 left-4 md:left-8 lg:left-12 h-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-transparent"
            />

            {/* Nodes */}
            <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 lg:px-12">
              {projects.map((project, index) => {
                const rawProgress = getRawProgress(index);
                const nodeProgress = Math.max(0.25, rawProgress);
                return <TimelineNode key={project.id} progress={nodeProgress} />;
              })}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="relative flex-grow w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              style={{ opacity: computeOpacity(index) }}
              className="absolute inset-0 flex items-start justify-center pt-16"
            >
              <ProjectContainer project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalTimeline;
