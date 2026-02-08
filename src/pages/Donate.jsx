const Donate = () => {
  return (
    <div className="container-custom section">
      <h1 className="text-4xl font-bold mb-6">Support Our Mission</h1>
      <p className="text-gray-700 mb-8">
        Your generous donations help us continue our vital work in healthcare and education.
      </p>
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">How to Donate</h2>
        <p className="text-gray-700 mb-4">
          You can support our foundation through bank transfer. Details for online payment integration coming soon.
        </p>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Bank Details:</h3>
          <p className="text-gray-700">Bank: [Bank Name]</p>
          <p className="text-gray-700">Account Name: John Oyediran Olabisi Foundation</p>
          <p className="text-gray-700">Account Number: XXXXXXXXXX</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
