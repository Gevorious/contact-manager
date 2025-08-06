import { useState } from 'react'
import { useContacts } from '../../../hooks/useContacts';
import { Link } from '@tanstack/react-router';

const Content = ({onLinkClick}: { onLinkClick?: () => void }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: contacts = [], isLoading, isError } = useContacts();
  

  if (isLoading) return <div className="p-4">Loading contacts...</div>;
  if (isError) return <div className="p-4 text-500">Error loading contacts</div>;

  const filteredContacts = contacts.filter((contact: { name: string }) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
     <div className="w-64 h-full bg-gray-800 text-white p-4 space-y-6">
        <div>
          <input
            type="text"
            placeholder="Search Contacts"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul className="space-y-2">
          {filteredContacts.map((contact: { id: number, name: string }) =>
            <li
              key={contact.id}
            >
              <Link
                to={`/contacts/${contact.id}`} className="p-2 block cursor-pointer hover:bg-gray-600 rounded-md"
                onClick={onLinkClick}>
                    {contact.name}
              </Link>
            </li>
          )}
        </ul>
  
        <div className="mt-4">
          <Link
            to="/contacts/new"
            className="block w-full py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all ease-in-out duration-300"
            onClick={onLinkClick}
          >
            Add New Contact
          </Link>
        </div>
      </div>
  )
}

export default Content