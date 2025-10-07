
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

interface TeamMemberCardProps {
  name: string;
  imageUrl: string;
  linkedinUrl: string;
}

const TeamMemberCard = ({ name, imageUrl, linkedinUrl }: TeamMemberCardProps) => {
  return (
    <div
      className="relative flex flex-col items-center rounded-xl overflow-hidden
                 transform transition-all duration-300 ease-in-out group
                 hover:scale-105 w-[280px] h-[380px] cursor-pointer" // Removed border, padding, added cursor-pointer
      style={{
        // backdropFilter and WebkitBackdropFilter removed as image will be full background
        boxShadow: '0 0 0 transparent',
        '--hover-shadow-color': 'rgba(187, 134, 252, 0.7)',
        '--active-shadow-color': 'rgba(187, 134, 252, 0.9)',
        '--hover-shadow': '0px 0px 30px var(--hover-shadow-color), 0px 0px 60px var(--hover-shadow-color)',
        '--active-shadow': '0px 0px 40px var(--active-shadow-color), 0px 0px 80px var(--active-shadow-color)',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out', // Removed border-color transition
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--hover-shadow)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 transparent';
      }}
    >
      {/* Image as full background */}
      <Image
        src={imageUrl}
        alt={name}
        layout="fill" // Fill the parent div
        objectFit="cover" // Cover the area, cropping if necessary
        className="z-0 rounded-xl transition-all duration-300 group-hover:scale-105" // Add hover scale to image
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-10 transition-opacity duration-300 group-hover:opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-70 transition-opacity duration-300 group-hover:opacity-50"></div>


      {/* Content overlay at bottom center */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20
                    flex flex-col items-center text-center
                    bg-gradient-to-t from-black via-black/80 to-transparent rounded-b-xl"> {/* Semi-transparent gradient background for text */}
        <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-lg">{name}</h3> {/* Added drop-shadow for text readability */}
        <div className="flex space-x-4">
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;