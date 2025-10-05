'use client'; 

import { useRef, useCallback, useMemo } from 'react'; 
import { Navbar } from "../components/navbar";
import TeamMemberCard from './components/TeamMemberCard';
import { FaChevronLeft } from 'react-icons/fa';
import useIntersectionObserver from './hooks/useIntersectionObserver';

const Team = () => {
  // --- START: YOUR IMAGE DATA HERE ---
  // Replace these placeholder objects with your actual 24 team members' data.
  // The 'imageUrl' should be the path to the image in your 'public' folder.
  const allTeamMembers = [
    {
      name: 'Krishna Vora',
      role: 'Social Media & Design',
      imageUrl: '/lokesh.jpg', // Replace with '/your-image-1.jpg'
      linkedinUrl: 'https://www.linkedin.com/in/krishnavora/',
      instagramUrl: 'https://www.instagram.com/krishna.vora/',
    },
    {
      name: 'Swastik',
      role: 'Social Media & Design',
      imageUrl: '/aagnya.jpg', // Replace with '/your-image-2.jpg'
      linkedinUrl: 'https://www.linkedin.com/in/swastik/',
      instagramUrl: 'https://www.instagram.com/swastik.insta/',
    },
    {
      name: 'Ayush Sharma',
      role: 'Web-Dev',
      imageUrl: '/Ayush.jpg', // Replace with '/your-image-3.jpg'
      linkedinUrl: 'https://www.linkedin.com/in/ayush/',
      instagramUrl: 'https://www.instagram.com/ayush.insta/',
    },
    {
      name: 'Ebrahim Ali',
      role: 'Web-Dev',
      imageUrl: '/Ebrahim.jpg', // Replace with '/your-image-4.jpg'
      linkedinUrl: 'https://www.linkedin.com/in/ebrahim/',
      instagramUrl: 'https://www.instagram.com/ebrahim.insta/',
    },
    // Add 20 more team member objects here, like this:
    { name: 'Member 5', role: 'Management', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 6', role: 'Graphics', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 7', role: 'Content', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 8', role: 'PR', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 9', role: 'Logistics', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 10', role: 'Marketing', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 11', role: 'Finance', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 12', role: 'Operations', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 13', role: 'Design', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 14', role: 'Development', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 15', role: 'Research', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 16', role: 'Strategy', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 17', role: 'Support', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 18', role: 'Outreach', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 19', role: 'Innovation', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 20', role: 'Community', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 21', role: 'Data Science', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 22', role: 'AI/ML', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 23', role: 'Cybersecurity', imageUrl: '/lokesh.jpg', linkedinUrl: '#', instagramUrl: '#' },
    { name: 'Member 24', role: 'Cloud Computing', imageUrl: '/aagnya.jpg', linkedinUrl: '#', instagramUrl: '#' },
  ];
  // --- END: YOUR IMAGE DATA HERE ---

  // Group members into pairs for sections
  const teamSectionsData = useMemo(() => {
    const sections = [];
    for (let i = 0; i < allTeamMembers.length; i += 2) {
      if (allTeamMembers[i] && allTeamMembers[i + 1]) { // Ensure both members exist
        sections.push({
          members: [allTeamMembers[i], allTeamMembers[i + 1]],
          isReversed: (i / 2) % 2 !== 0, // Alternate section layout (text left/right)
        });
      }
    }
    return sections;
  }, [allTeamMembers]); // Recalculate if allTeamMembers changes

  // Refs for each team section to observe
  // This approach ensures we have a ref for each dynamically created section.
  const sectionRefs = useRef<Array<React.RefObject<HTMLElement | null>>>([]); // Correctly type for an array of RefObjects

  // Initialize refs array with empty RefObjects
  if (sectionRefs.current.length === 0) {
    for (let i = 0; i < teamSectionsData.length; i++) {
      sectionRefs.current[i] = { current: null };
    }
  }

  // Function to set refs dynamically, now assigns to the 'current' of the RefObject
  const setSectionRef = useCallback((index: number) => (node: HTMLElement | null) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].current = node;
    }
  }, []);

  // Base and active spotlight styles (defined once for consistency)
  // Use useMemo to prevent unnecessary re-renders of style objects
  const baseSpotlightStyle = useMemo(() => ({
    backgroundImage: 'linear-gradient(to bottom, rgba(187, 134, 252, 0.2) 0%, rgba(187, 134, 252, 0.1) 10%, transparent 80%)',
    filter: 'blur(30px)',
    opacity: 0,
    transform: 'scale(1)',
    transition: 'opacity 800ms ease-in-out, transform 800ms ease-in-out, filter 800ms ease-in-out', // Smoother transition
  }), []);

  const activeSpotlightStyle = useMemo(() => ({
    backgroundImage: 'linear-gradient(to bottom, #1E27D4 0%, #1A367C 10%, transparent 120%)',
    filter: 'blur(20px)',
    opacity: 1,
    transform: 'scale(1.05)',
    transition: 'opacity 800ms ease-in-out, transform 800ms ease-in-out, filter 800ms ease-in-out', // Ensure active also transitions
  }), []);


  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundColor: '#0d001a',
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(20, 30, 100, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 90%, rgba(20, 30, 100, 0.3) 0%, transparent 50%),
          linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 50%)
        `,
        backgroundAttachment: 'fixed',
      }}
    >
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
            <div className="flex items-center space-x-2 px-6 py-4 rounded-xl bg-dark-background text-white">
              <FaChevronLeft className="text-white" />
              <span className="text-lg font-semibold">Our Team</span>
            </div>
          </section>

          {/* Wrapper for content where dots should appear */}
          <div className="relative z-10">
            {/* Dotted Pattern Layer */}
            {/* <div
              className="absolute inset-0 z-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            ></div> */}

            {/* Dynamically render team sections */}
            {teamSectionsData.map((section, index) => {
              // Now we simply pass the RefObject directly from our array
              const sectionRefObject = sectionRefs.current[index];

              const sectionEntry = useIntersectionObserver(
                sectionRefObject, // Pass the RefObject
                { threshold: 0.4 }
              );
              const isSectionVisible = !!sectionEntry?.isIntersecting;

              return (
                <section
                  key={index}
                  ref={setSectionRef(index)} // Assign ref dynamically
                  className={`flex flex-col mb-20 gap-8 relative z-10 ${section.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                  style={index > 0 ? {marginTop: '80px'} : {}}
                >
                  {/* Text Description */}
                  <div className={`md:w-1/3 text-4xl font-bold leading-relaxed ${section.isReversed ? 'pl-8 text-right' : 'pr-8'}`}>
                    We are passionate about creating visually stunning and functional solutions that communicate effectively
                  </div>

                  {/* Wrapper for the two cards and their shared spotlight */}
                  <div className="md:w-2/3 relative flex justify-center gap-8 p-10 pt-0">
                    {/*Horizontal Light Source */}
                    <div
                      className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-djs-blue-light to-djs-purple-dark z-20"
                      /* style={{
                        boxShadow: '0 0 20px 5px #1A367C, 0 0 40px 10px #1E27D4',
                      }} */
                    ></div>

                    {/* Deep Spotlight - dynamic style based on scroll visibility */}
                    <div
                      className="absolute top-0 w-full h-[400px] z-[15]"
                      style={isSectionVisible ? activeSpotlightStyle : baseSpotlightStyle}
                    ></div>

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