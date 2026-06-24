import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container-custom px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="navigation" aria-label="Footer navigation">
          {/* About Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">JOOF Foundation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering communities through healthcare and education initiatives for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-teal-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/about/team" className="text-gray-400 hover:text-teal-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Our Team
                </Link>
              </li>
              {/* <li>
                <Link to="/news" className="text-gray-400 hover:text-teal-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  News
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Donate
                </Link>
              </li>
<li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:joofoundationhub@gmail.com" className="hover:text-teal-400 transition-colors">
                  joofoundationhub@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2349115268054" className="hover:text-teal-400 transition-colors">
                  +234 911 526 8054
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} John Oyediran Olabisi Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
