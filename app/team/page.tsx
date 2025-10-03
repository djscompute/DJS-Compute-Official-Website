'use client'; // This is important for client-side hooks in App Router

import { useRef, useCallback, useMemo } from 'react'; // Import useMemo for optimizing style objects
import { Navbar } from "../components/navbar"; // Adjust path if necessary
import TeamMemberCard from './components/TeamMemberCard'; // Adjust path if necessary
import { FaChevronLeft } from 'react-icons/fa';
import useIntersectionObserver from './hooks/useIntersectionObserver'; // Adjust path if necessary

// Import the BackgroundGradientAnimation component
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'; // Adjust path if necessary

const Team = () => {
  // --- START: YOUR IMAGE DATA HERE ---
  // Replace these placeholder objects with your actual 24 team members' data.
  // The 'imageUrl' should be the path to the image in your 'public' folder.
  const allTeamMembers = [
    {
      name: 'Krishna Vora',
      role: 'Social Media & Design',
      imageUrl: '/team/Krishna.jpg', // Replace with '/your-image-1.jpg'
      linkedinUrl: 'https://www.linkedin.com/in/krishnavora/',
      instagramUrl: 'https://www.instagram.com/krishna.vora/',
    },
    {
      name: 'Swastik',
      role: 'Social Media & Design',
      imageUrl: '/team/Lokesh.jpg', // Replace with '/your-image-2.jpg'
      linkedinUrl: 'https://www.linkedin.com/in/swastik/',
      instagramUrl: 'https://www.instagram.com/swastik.insta/',
    },
    {
      name: 'Ayush Sharma',
      role: 'Web-Dev',
      imageUrl: '/team/Krishna.jpg', // Replace with '/your-image-3.jpg'
      linkedinUrl: 'https://www.linkedin.com/in/ayush/',
      instagramUrl: 'https://www.instagram.com/ayush.insta/',
    },
    {
      name: 'Ebrahim Ali',
      role: 'Web-Dev',
      imageUrl: '/team/Lokesh.jpg', // Replace with '/your-image-4.jpg'
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

  // Base and active spotlight styles (defined once for consistency)
  const baseSpotlightStyle = useMemo(() => ({
    backgroundImage: 'linear-gradient(to bottom, rgba(187, 134, 252, 0.2) 0%, rgba(187, 134, 252, 0.1) 10%, transparent 80%)',
    filter: 'blur(30px)',
    opacity: 0,
    transform: 'scale(1)',
    transition: 'opacity 800ms ease-in-out, transform 800ms ease-in-out, filter 800ms ease-in-out',
  }), []);

  const activeSpotlightStyle = useMemo(() => ({
    backgroundImage: 'linear-gradient(to bottom, #3400A3 0%, #3400A3 30%, transparent 120%)',
    filter: 'blur(20px)',
    opacity: 1,
    transform: 'scale(1.05)',
    transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out, filter 300ms ease-in-out',
  }), []);


  return (
    // Root container, removed old bg styles
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* BackgroundGradientAnimation for the blob-like effect */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(20, 20, 40)"
        gradientBackgroundEnd="rgb(12, 5, 29)"
        firstColor="75, 0, 130"    // Deep Purple
        secondColor="138, 43, 226" // Medium Purple
        thirdColor="72, 61, 139"   // Slate Blue
        fourthColor="123, 104, 238" // Light Slate Blue
        fifthColor="147, 112, 219" // Periwinkle
        pointerColor="220, 44, 164" // Pinkish/Magenta
        size="80%"
        blendingValue="soft-light"
        containerClassName="fixed inset-0 z-0"
        interactive={false} // Set to false for a consistent background
      />

      {/* project_bg.png layer with constant movement animation */}
      <div
        className="fixed inset-0 z-0 opacity-80 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/projects/project_bg.png')",
          mixBlendMode: "overlay",
        }}
      />
      {/* Add a CSS keyframe animation for `animate-bg-pan` in your global CSS (e.g., globals.css) */}
      {/* Example CSS (add this to your globals.css or a dedicated CSS file):
        @keyframes bg-pan {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      */}


      <div className="relative z-10">
        <Navbar />
        <br /><br />
        <main className="container mx-auto px-4 py-8 relative">
          <section className="text-center mb-16">
            <h1 className="text-7xl font-extrabold text-white leading-tight">
              Not Just a Club <br /> Our Collective <span className="text-djs-green">Codebase</span>
            </h1>
          </section>

          <section
            id="our-team-section"
            className="relative w-full max-w-4xl mx-auto rounded-xl p-0.5 mb-16 z-20"
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
            {/* Removed the old dotted pattern as the new background effects are comprehensive */}
            {/* If you still want dots, we'd need to re-evaluate its layering */}

            {/* Dynamically render team sections */}
            {teamSectionsData.map((section, index) => {
              const sectionRefObject = sectionRefs.current[index];

              const sectionEntry = useIntersectionObserver(
                sectionRefObject,
                { threshold: 0.4 }
              );
              const isSectionVisible = !!sectionEntry?.isIntersecting;

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
                    <div
                      className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-djs-blue-light to-djs-purple-dark z-20"
                      /* style={{
                        boxShadow: '0 0 20px 5px #1A367C, 0 0 40px 10px #1E27D4',
                      }} */
                    ></div>

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