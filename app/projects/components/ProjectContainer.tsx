"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../page";

type ExtendedProject = Project & {
  images?: string[];
  bullets?: string[];
};

interface ProjectContainerProps {
  project: ExtendedProject;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ project }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Text Content - 70% on large screens */}
        <div className="text-white space-y-5 text-center lg:text-left lg:basis-[70%]">
          <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
            {project.title}
          </h3>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            {project.description}
          </p>
          {project.bullets && project.bullets.length > 0 && (
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm lg:text-base">
              {project.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors text-lg font-medium group cursor-pointer"
            >
              Visit Site
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          )}
        </div>

        {/* Image Content - 30% on large screens */}
        <div className="relative w-full lg:w-auto lg:basis-[30%] space-y-4">
          {project.images && project.images.length > 0
            ? project.images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/20"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} ${idx + 1}`}
                    width={1200}
                    height={900}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-orange-500/10" />
                </div>
              ))
            : project.image && (
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={900}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-orange-500/10" />
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
