
'use client'; // This is important for client-side hooks in App Router

import { useRef, useCallback, useMemo } from 'react';
import { Navbar } from "../components/navbar";
import TeamMemberCard from './components/TeamMemberCard';
import { FaChevronLeft } from 'react-icons/fa';
// import useIntersectionObserver from './hooks/useIntersectionObserver';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';

const Team = () => {
  const allTeamMembers = [
    {
      name: 'Lokesh Sahuji',
      imageUrl: '/team/WebMentors/Lokesh.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/krishnavora/'
    },
    {
      name: 'Ebrahim Gamdiwala',
      imageUrl: '/team/WebMentors/Ebrahim.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Ayush Patel',
      imageUrl: '/team/WebMentors/Ayush Patel.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Chhavi Rathod',
      imageUrl: '/team/WebMentors/Chhavi Rathod.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Aagnya Mistry',
      imageUrl: '/team/DAMLMentors/Aagnya .jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Megh Dave',
      imageUrl: '/team/DAMLMentors/Megh Dave.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Pranjay Sharma',
      imageUrl: '/team/DAMLMentors/Pranjay.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Prisha Gupta',
      imageUrl: '/team/DAMLMentors/Prisha Gupta.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Rohan Gandhi',
      imageUrl: '/team/DAMLMentors/Rohan Gandhi IMG.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Smayan Kulkarni',
      imageUrl: '/team/DAMLMentors/Smayan Kulkarni.',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Vedant Shirgaokar',
      imageUrl: '/team/DAMLMentors/Vedant.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Swastik Chiplunkar',
      imageUrl: '/team/SocialMediaHeads/Swastik.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Krishna Vora',
      imageUrl: '/team/SocialMediaHeads/Krishna.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Kirtan Gosalia',
      imageUrl: '/team/OperationHead/Kirtan.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Aarav Bhardwaj',
      imageUrl: '/team/OperationHead/AaravBhardwaj.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    {
      name: 'Tanmay Chaudhari',
      imageUrl: '/team/OperationHead/Tanmay Chaudhari.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim-gamdiwala/',
    },
    
  ];

  const teamSectionsData = useMemo(() => {
    const sections = [];
    for (let i = 0; i < allTeamMembers.length; i += 2) {
      if (allTeamMembers[i] && allTeamMembers[i + 1]) {
        sections.push({
          members: [allTeamMembers[i], allTeamMembers[i + 1]],
          isReversed: (i / 2) % 2 !== 0,
        });
      }
    }
    return sections;
  }, [allTeamMembers]);

  const sectionRefs = useRef<Array<React.RefObject<HTMLElement | null>>>([]);

  if (sectionRefs.current.length === 0) {
    for (let i = 0; i < teamSectionsData.length; i++) {
      sectionRefs.current[i] = { current: null };
    }
  }

  const setSectionRef = useCallback((index: number) => (node: HTMLElement | null) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].current = node;
    }
  }, []);

  // Removed baseSpotlightStyle and activeSpotlightStyle as they are no longer needed


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
          backgroundSize: '120% 120%',
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <br /><br />
        <main className="container mx-auto px-4 py-8 relative">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mt-19">
              Not Just a Club <br /> Our Collective <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Codebase</span>
            </h1>
          </section>

          <section
            id="our-team-section"
            className="relative w-full max-w-7xl mx-auto rounded-xl p-0.5 mb-16 z-20"
            style={{
              backgroundImage: 'linear-gradient(to right, #1A367C, #28C6B6, #1E27D4)',
            }}
          >
            <div className="flex items-center space-x-2 px-8 py-5 rounded-xl bg-dark-background text-white">
              <FaChevronLeft className="text-white" />
              <span className="text-lg font-semibold">Our Team</span>
            </div>
          </section>

          <div className="relative z-10">
            {teamSectionsData.map((section, index) => {
              // No need for Intersection Observer specific to spotlight anymore,
              // as the hover effect is on the card itself.
              // However, we keep the ref and observer for future potential scroll-based effects
              // or if you want to re-introduce something.
              const sectionRefObject = sectionRefs.current[index];
              // const sectionEntry = useIntersectionObserver(
              //   sectionRefObject,
              //   { threshold: 0.4 }
              // );
              // const isSectionVisible = !!sectionEntry?.isIntersecting; // Not used for spotlight now

              return (
                <section
                  key={index}
                  ref={setSectionRef(index)}
                  className={`flex flex-col mb-20 gap-8 relative z-10 ${section.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                  style={index > 0 ? {marginTop: '80px'} : {}}
                >
                  <div className={`md:w-1/3 text-4xl font-bold leading-relaxed ${section.isReversed ? 'pl-8 text-right' : 'pr-8'}`}>
                    We are passionate about creating visually stunning and functional solutions that communicate effectively
                  </div>

                  <div className="md:w-2/3 relative flex justify-center gap-8 p-10 pt-0">
                    {/* Removed Horizontal Light Source */}
                    {/* Removed Deep Spotlight */}

                    <div className="flex gap-8 relative z-20">
                      <TeamMemberCard {...section.members[0]} />
                      <TeamMemberCard {...section.members[1]} />
                    </div>
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