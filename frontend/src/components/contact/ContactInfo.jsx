import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SocialLinks from '../layout/Footer/SocialLinks';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'joofoundationhub@gmail.com',
      link: 'mailto:joofoundationhub@gmail.com',
      color: 'text-teal-600',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+234 911 526 8054',
      link: 'tel:+2349115268054',
      color: 'text-teal-600',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: '12, Adeagbo Odeniyi Avenue, Idi-Ape, Ibadan',
      link: null,
      color: 'text-teal-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Get in Touch</h2>
        <p className="text-gray-600">
          We'd love to hear from you. Whether you have questions about our programs, want to volunteer,
          or are interested in partnering with us, we're here to help.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;
          const content = (
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`${detail.color} mt-1`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{detail.label}</h3>
                <p className="text-gray-700 mt-1">{detail.value}</p>
              </div>
            </div>
          );

          return detail.link ? (
            <a
              key={detail.label}
              href={detail.link}
              className="block hover:scale-[1.02] transition-transform"
            >
              {content}
            </a>
          ) : (
            <div key={detail.label}>{content}</div>
          );
        })}
      </div>

      {/* Social Media */}
      <div className="pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
        <p className="text-gray-600 mb-4 text-sm">
          Stay connected with us on social media for updates, stories, and ways to get involved.
        </p>
        <SocialLinks />
      </div>

      {/* Office Hours */}
      <div className="p-4 bg-teal-50 rounded-lg border border-teal-100">
        <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
        <div className="text-sm text-gray-700 space-y-1">
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p className="text-gray-600 italic">Closed on Sundays and public holidays</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
