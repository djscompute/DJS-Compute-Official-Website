"use client";
import React from "react";
import {
  Shield,
  Search,
  Code,
  TrendingUp,
  FileText,
  DollarSign,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Secure",
    description:
      "Configure your infrastructure in your own cloud, using best practices, automatically",
  },
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: "Compliant",
    description:
      "Get an audit trail of your SDLC from requirements, to development, to testing & deployment.",
  },
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: "Developer-native",
    description:
      "Builds and deployments are surfaced intuitively, empowering your team regardless of DevOps experience.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Scalable",
    description:
      "Coherence makes sure your cloud is there for your users, and that you are avoiding surprise costs from automation.",
  },
  {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: "No Lock-in",
    description:
      "You can cut off Coherence's access at any time — your infrastructure remains safe in your own cloud.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "Cost-effective",
    description:
      "You get back engineering time and optimize your cloud deployments to lower your spend.",
  },
];

const FeaturesGrid: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
          <span className="text-blue-400">
            Don't build all this stuff yourself.{" "}
          </span>{" "}
          DJS Compute gets infrastructure work off your roadmap.
        </h2>
      </div>

      {/* Features Grid with responsive borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-12 md:mb-16 lg:mb-20">
        {features.map((feature, index) => {
          // Responsive border logic
          const isLastInRow = {
            mobile: false, // no right border on mobile (1 col)
            tablet: index % 2 === 1, // last in row for 2-col
            desktop: index % 3 === 2, // last in row for 3-col
          };

          const isInTopRows = {
            mobile: index < features.length - 1, // all except last
            tablet: index < 4, // first 2 rows (4 items)
            desktop: index < 3, // first row (3 items)
          };

          return (
            <div
              key={index}
              className={`text-center space-y-4 md:space-y-5 lg:space-y-6 p-6 md:p-7 lg:p-8
                ${!isLastInRow.mobile ? "md:border-r-0" : ""}
                ${
                  !isLastInRow.tablet
                    ? "md:border-r-2 md:border-white/30"
                    : "md:border-r-0"
                }
                ${
                  !isLastInRow.desktop
                    ? "lg:border-r-2 lg:border-white/30"
                    : "lg:border-r-0"
                }
                ${
                  isInTopRows.mobile
                    ? "border-b-2 border-white/30 md:border-b-0"
                    : ""
                }
                ${
                  isInTopRows.tablet
                    ? "md:border-b-2 md:border-white/30 lg:border-b-0"
                    : ""
                }
                ${isInTopRows.desktop ? "lg:border-b-2 lg:border-white/30" : ""}
              `}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight pb-8 md:pb-10 lg:pb-12">
          <span className="text-blue-400">
            Get back to building your product. {""}
          </span>
          Let DJSCompute handle the rest.
        </h3>
      </div>
    </div>
  );
};

export default FeaturesGrid;
