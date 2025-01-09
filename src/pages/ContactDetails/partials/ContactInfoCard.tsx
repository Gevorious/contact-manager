
type ContactInfoCardProps = {
    contact: {
        email: string;
        address?: {
          suite: string;
          street: string;
          city: string;
        };
        phone: string;
        website: string;
    };
};

const ContactInfoCard = ({ contact }: ContactInfoCardProps) => {
  const { email, address, phone, website } = contact;
  return (
    <div>
         <div>
          <h2 className="text-xl font-semibold text-gray-700">Email</h2>
          <p className="text-lg text-gray-600">{email}</p>
        </div>

        <div>
          {
            address && <>
              <h2 className="text-xl font-semibold text-gray-700">Address</h2>
              <p className="text-lg text-gray-600">
                {Object.values(address).map((value) => {
                  return value ? `${value}, ` : '';
                })}
              </p>
            </>
          }
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
          <p className="text-lg text-gray-600">{phone}</p>
        </div>

        <div>
          {
            website && <>
              <h2 className="text-xl font-semibold text-gray-700">Website</h2>
              <p className="text-lg text-blue-500 hover:underline">
                <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
                  {website}
                </a>
              </p>
            </>
          }
        </div>
    </div>
  )
}

export default ContactInfoCard