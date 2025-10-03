import Image from 'next/image';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageUrl,
  instagramUrl,
  linkedinUrl,
}) => {
  return (
    // Card now has fixed width and height as requested
    // Removed the dark background and bottom gradient overlay so text sits directly on the image
    <div className="relative w-[300px] h-[400px] rounded-lg overflow-hidden group shadow-lg">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg opacity-100 group-hover:opacity-100 transition-opacity duration-300"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
      </div>

      {/* Text content positioned directly over the image; colors set for contrast */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-20 text-center"> {/* Higher z-index for text */}
        <h3 className="text-xl font-bold mt-2 text-white">{name}</h3>
        <p className="text-sm text-gray-200">{role}</p>
        <div className="flex justify-center space-x-3 mt-3">
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaLinkedinIn size={20} />
            </a>
          )}
          {instagramUrl && (
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;