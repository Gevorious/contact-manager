const Contacts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Please choose a contact from the left sidebar to see details.
        </h1>
        <p className="text-lg text-gray-600">
          Once you select a contact, you'll be able to view and edit their details.
        </p>
      </div>
    </div>
  );
};

export default Contacts;