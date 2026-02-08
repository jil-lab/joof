const Contact = () => {
  return (
    <div className="container-custom section">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-8">
        Get in touch with us for inquiries, partnerships, or more information about our programs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href="mailto:joofoundationhub@gmail.com" className="text-teal-500 hover:underline">
                joofoundationhub@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +234 XXX XXX XXXX
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> [Address details]
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <p className="text-gray-700">Contact form coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
