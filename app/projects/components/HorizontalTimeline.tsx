"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  return (
    <section
      ref={targetRef}
      className="relative bg-transparent"
      style={{ height: `${projects.length * 60}vh` }}
    >
      <div className="sticky top-24 flex h-screen flex-col items-start overflow-hidden pt-4">
        {/* Timeline track container with vertical margin */}
        <div className="w-full h-24 flex items-center justify-center px-12">
          {/* Enclosed container */}
          <div className="relative w-full h-20 bg-slate-900/50 border border-slate-700 rounded-full flex items-center px-12">
            {/* Track Background */}
            <div className="h-1.5 w-full rounded-full bg-neutral-700" />

            {/* Track Progress */}
            <motion.div
              style={{
                width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              }}
              className="absolute top-1/2 left-12 h-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-transparent"
            />

            {/* Nodes */}
            <div className="absolute inset-0 flex justify-between items-center px-12">
              {projects.map((project, index) => {
                const start = index * sectionDuration;
                const end = start + sectionDuration;
                const progressMV = useTransform(
                  scrollYProgress,
                  [start, end],
                  [0, 1]
                );
                // Ensure nodes are always at least faintly active for visibility
                const rawProgress = progressMV.get();
                const nodeProgress = Math.max(0.25, rawProgress);
                return (
                  <TimelineNode key={project.id} progress={nodeProgress} />
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="relative flex-grow w-full">
          {projects.map((project, index) => {
            const start = index * sectionDuration;
            const end = start + sectionDuration;

            const isLastProject = index === projects.length - 1;
            const isFirstProject = index === 0;
            const fadeFraction = 0.06; // uniform fade width across all projects

            // Animation logic for each project
            let opacityInputRange, opacityOutputRange;

            if (isFirstProject) {
              // Start fully visible, then fade out near the end of its section
              opacityInputRange = [
                0,
                end - sectionDuration * fadeFraction,
                end + sectionDuration * fadeFraction,
              ];
              opacityOutputRange = [1, 1, 0];
            } else if (isLastProject) {
              // Fade in with the same width, then stay visible
              opacityInputRange = [
                start - sectionDuration * fadeFraction,
                start + sectionDuration * fadeFraction,
              ];
              opacityOutputRange = [0, 1];
            } else {
              // Symmetric fade in/out for middle projects
              opacityInputRange = [
                start - sectionDuration * fadeFraction,
                start + sectionDuration * fadeFraction,
                end - sectionDuration * fadeFraction,
                end + sectionDuration * fadeFraction,
              ];
              opacityOutputRange = [0, 1, 1, 0];
            }

            const opacity = useTransform(
              scrollYProgress,
              opacityInputRange,
              opacityOutputRange
            );

            return (
              <motion.div
                key={project.id}
                style={{ opacity }}
                className="absolute inset-0 flex items-start justify-center pt-16"
              >
                <ProjectContainer project={project} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HorizontalTimeline;
