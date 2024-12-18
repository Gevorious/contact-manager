
type ContactInfoCardProps = {
    contact: {
        email: string;
        address: {
        suite: string;
        street: string;
        city: string;
        zipcode: string;
        };
        phone: string;
        website: string;
    };
};

const ContactInfoCard = ({ contact }: ContactInfoCardProps) => {
  return (
    <div>
         <div>
          <h2 className="text-xl font-semibold text-gray-700">Email</h2>
          <p className="text-lg text-gray-600">{contact.email}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">Address</h2>
          <p className="text-lg text-gray-600">
            {contact.address?.suite}, {contact.address?.street}, {contact.address?.city}, {contact.address?.zipcode}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
          <p className="text-lg text-gray-600">{contact.phone}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">Website</h2>
          <p className="text-lg text-blue-500 hover:underline">
            <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer">
              {contact.website}
            </a>
          </p>
        </div>
    </div>
  )
}

export default ContactInfoCard