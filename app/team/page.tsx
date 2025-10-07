
"use client"; // This is important for client-side hooks in App Router

import { useRef, useCallback, useMemo } from "react"; // Removed useState
import { Navbar } from "../components/navbar";
import TeamMemberCard from "./components/TeamMemberCard";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { CornerDownRight } from "lucide-react"; // Removed Chevron icons

const Team = () => {
  const teamMembersWithRoles = [
    {
      name: 'Lokesh Sahuji',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/WebMentors/Lokesh.jpg',
      linkedinUrl: '#'
    },
    {
      name: 'Ebrahim Gamdiwala',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/WebMentors/Ebrahim.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Ayush Patel',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/WebMentors/Ayush Patel.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Chhavi Rathod',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/WebMentors/Chhavi_Rathod.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Aagnya Mistry',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/DAMLMentors/Aagnya .jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Megh Dave',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/DAMLMentors/Megh Dave.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Pranjay Sharma',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/DAMLMentors/Pranjay.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Prisha Gupta',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/DAMLMentors/Prisha Gupta.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Rohan Gandhi',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/DAMLMentors/Rohan Gandhi IMG.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Smayan Kulkarni',
      role: 'Web & DAML Mentor',
      imageUrl: '/team/DAMLMentors/Smayan.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Vedant Shirgaokar',
      role: 'Web & DAML Mentor', // Member 11, should be alone
      imageUrl: '/team/DAMLMentors/VedantS.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Swastik Chiplunkar',
      role: 'Social Media Head',
      imageUrl: '/team/SocialMediaHeads/Swastik.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Krishna Vora',
      role: 'Social Media Head',
      imageUrl: '/team/SocialMediaHeads/Krishna.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Kirtan Gosalia',
      role: 'Operation Head',
      imageUrl: '/team/OperationHead/Kirtan.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Tanmay Chaudhari',
      role: 'Operation Head',
      imageUrl: '/team/OperationHead/Tanmay Chaudhari.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Aarav Bhardwaj',
      role: 'Operation Head', // Member 16, should be alone
      imageUrl: '/team/OperationHead/AaravBhardwaj.jpg',
      linkedinUrl: '#',
    },
  ];

  const teamSectionsData = useMemo(() => {
    const sections = [];
    let tempMembers = [...teamMembersWithRoles];

    const sectionContent = [
      {
        heading: "Web Dev Mentors", // 1st Section (index 0)
        description: ""
      },
      {
        description: "We bring ideas to life on the web through sleek, responsive, and dynamic designs. From concept to code, we ensure every website we craft is fast, intuitive, and built to impress."
      },
      {
        heading: "DAML Mentors", // 3rd Section (index 2)
        description: ""
      },
      {
        description: "We harness data and intelligent systems to turn numbers into insights and machines into problem-solvers — driving smarter, adaptive, and innovative decisions."
      },
      {
        description: "We explore the potential of intelligent systems - teaching machines to learn, predict, and adapt. Our projects blend innovation with problem-solving to push what's possible with Al."
      },
      {
        description: "We uncover the stories hidden within data through smart visualization and statistical insight. Our work helps drive smarter decisions and meaningful interpretations from numbers that matter."
      },
      {
        heading: "Social Media & Design Heads", // 7th Section (index 6)
        description: ""
      },
      {
        heading: "Operations Heads", // 8th Section (index 7)
        description: ""
      },
      { description: "We're the team that keeps everything running like clockwork - from planning and logistics to seamless coordination.Every event and initiative you see stands on the foundation we build behind the scenes." },
      // Add more descriptions if you have more sections than these, otherwise it will use default empty description
      { description: "" }, // Placeholder for section 9
      { description: "" }, // Placeholder for section 10
      { description: "" }, // Placeholder for section 11
    ];

    let sectionIndex = 0;
    while (tempMembers.length > 0) {
      let membersForSection;
      let isReversed = sectionIndex % 2 !== 0;

      if (
        tempMembers[0] === teamMembersWithRoles[10] || // Vedant
        tempMembers[0] === teamMembersWithRoles[15]    // Aarav
      ) {
        membersForSection = [tempMembers.shift()!];
      } else if (tempMembers.length >= 2) {
        membersForSection = [tempMembers.shift()!, tempMembers.shift()!];
      } else {
        membersForSection = [tempMembers.shift()!];
      }

      const currentSectionContent = sectionContent[sectionIndex] || { heading: undefined, description: "" };

      sections.push({
        members: membersForSection,
        isReversed: isReversed,
        ...currentSectionContent,
        isSingleCard: membersForSection.length === 1
      });
      sectionIndex++;
    }
    return sections;
  }, [teamMembersWithRoles]);


  const sectionRefs = useRef<Array<React.RefObject<HTMLElement | null>>>([]);

  if (sectionRefs.current.length === 0) {
    for (let i = 0; i < teamSectionsData.length; i++) {
      sectionRefs.current[i] = { current: null };
    }
  }

  const setSectionRef = useCallback(
    (index: number) => (node: HTMLElement | null) => {
      if (sectionRefs.current[index]) {
        sectionRefs.current[index].current = node;
      }
    },
    []
  );

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
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
        className="fixed inset-0 z-0 opacity-80 bg-cover bg-center bg-no-repeat animate-bg-pan"
        style={{
          backgroundImage: "url('/projects/project_bg.png')",
          mixBlendMode: "overlay",
          backgroundSize: "120% 120%",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <br />
        <br />
        <main className="container mx-auto px-4 py-8 relative">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mt-19">
              Not Just a Club <br /> Our Collective{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Codebase
              </span>
            </h1>
          </section>

          <section
            id="our-team-section"
            className="relative w-full max-w-7xl mx-auto rounded-xl p-0.5 mb-16 z-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1A367C, #28C6B6, #1E27D4)",
            }}
          >
            <div className="flex items-center space-x-2 px-8 py-5 rounded-xl bg-dark-background text-white">
              <CornerDownRight size={24} color="#fff" />
              <span className="text-lg font-semibold">Our Team</span>
            </div>
          </section>

          <div className="relative z-10">
            {teamSectionsData.map((section, index) => {
              const sectionRefObject = sectionRefs.current[index];

              return (
                <section
                  key={index}
                  ref={setSectionRef(index)}
                  className={`flex flex-col mb-20 gap-8 relative z-10 ${
                    section.isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                  style={index > 0 ? { marginTop: "80px" } : {}}
                >
                  {/* Text Description / Title for the section */}
                  <div
                    className={`md:w-1/3 text-2xl md:text-2xl font-bold leading-relaxed px-8 sm:px-12 md:px-16 lg:px-20 ${
                      section.isReversed ? "pl-8 text-right" : "pr-8"
                    } ${section.heading ? 'text-5xl md:text-6xl' : ''}`}
                  >
                    {section.heading && <h2 className="mb-4">{section.heading}</h2>}
                    <p className={`hidden md:block ${section.heading ? 'text-xl' : ''}`}>
                      {section.description}
                    </p>
                  </div>

                  {/* Wrapper for the cards - now simply stacks on small screens */}
                  <div className={`md:w-2/3 relative flex flex-col items-center md:flex-row md:flex-wrap justify-center gap-8 p-10 pt-0 `}>
                    {section.members.map((member, memberIndex) => (
                      <TeamMemberCard key={memberIndex} {...member} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Team;