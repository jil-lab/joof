import { FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/joolabisifoundation',
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            aria-label={`Visit our ${link.name} page`}
          >
            <Icon className="w-6 h-6" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
