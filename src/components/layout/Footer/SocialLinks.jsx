import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://facebook.com/jooffoundation', // Replace with actual URL
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/jooffoundation', // Replace with actual URL
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/company/jooffoundation', // Replace with actual URL
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com/@jooffoundation', // Replace with actual URL
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
            className="text-gray-400 hover:text-teal-400 transition-colors"
            aria-label={link.name}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
