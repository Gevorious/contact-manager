import { useParams, useNavigate } from "@tanstack/react-router";
import { useContact, useDeleteContact, useUpdateContact } from '../../hooks/useContacts';
import ContactInfoCard from '../../components/ContactInfoCard';
import ContactEditForm from './partials/ContactEditForm';
import { useState } from 'react';
import ConfirmModal from "../../components/ConfirmModal";
import { useAlert } from "../../contexts/AlertContext";

const ContactDetails = () => {
  const { contactId } = useParams({from: '/contacts/$contactId'});
  const { data: contact = {}, isLoading, isError } = useContact(contactId);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const updateContact = useUpdateContact(contactId);
  const deleteContact = useDeleteContact();
  const { showAlert } = useAlert();
  const navigate = useNavigate();


  const onSave = (data: typeof contact) => {
    updateContact.mutate(data, {
      onSuccess: () => {
        showAlert('Contact updated!', 'success');
      },
      onError: (error) => {
        showAlert(`Error: ${error.message}`, 'error');
      },
      onSettled: () => setIsEditing(false),
    })
    
  };

  const onDelete = () => {
    deleteContact.mutate(contactId, {
      onSuccess: () => {
        showAlert('Contact deleted!', 'success');
        navigate({to: '/contacts'});
      },
      onError: (error: { message: string; }) => {
        showAlert(`Error: ${error.message}`, 'error');
      },
    });
  };

  if (isLoading) {
  return (
    <div className="text-center text-gray-600 mt-8">
      <p className="text-lg font-medium">Loading contact...</p>
    </div>
  );
}

if (isError || !contact) {
  return (
    <div className="text-center text-gray-600 mt-8">
      <p className="text-lg font-semibold text-red-500">Contact not found</p>
    </div>
  );
}

  const imgURL = `https://robohash.org/${contact.id}?set=set2&size=300x300`;

  return (
    <div className="flex-1 p-0 md:p-6">
      <div className="flex items-center mb-4">
        <img
          src={imgURL}
          alt={contact.name}
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">{contact.name}</h1>
          <p className="text-xl text-gray-500">@{contact.username}</p>
        </div>
      </div>
      <div className="space-y-4 max-w-lg bg-white shadow-lg rounded-lg p-6 mb-6">
       {!isEditing && <ContactInfoCard contact={contact} />}
       {isEditing && <ContactEditForm contact={contact} onSave={onSave} />}
      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
        >
           {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={() => setIsModalVisible(true)}
        >
          Delete
        </button>
      </div>
      </div>
      <ConfirmModal
        title="Delete Contact"
        message="Are you sure you want to delete this contact? This action cannot be undone."
        isVisible={isModalVisible}
        onConfirm={() => {
          setIsModalVisible(false);
          onDelete();
        }}
        onCancel={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default ContactDetails;