"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../../page";

interface ProjectContainerProps {
  project: Project;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ project }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-8">
      <div className="flex flex-col items-center space-y-8">
        {/* Image Content - 80% width, centered */}
        {project.image && (
          <div className="relative w-4/5 max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/20">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105 scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-orange-500/10" />
            </div>
          </div>
        )}

        {/* Text Content - Full width, centered */}
        <div className="text-white space-y-6 text-center max-w-4xl">
          <h3 className="text-5xl lg:text-6xl font-bold leading-tight">
            {project.title}
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            {project.description}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors text-lg font-medium group"
            >
              Visit Site
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
