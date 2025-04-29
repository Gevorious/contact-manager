import { standardSchemaValidator, useForm } from '@tanstack/react-form';
import { Adapter, Contact, contactSchema } from './ValidationSchemas/contactSchema';
import { useCreateContact } from '../../hooks/useContacts';
import FormField from '../../components/FormField';
import { useAlert } from '../../contexts/AlertContext';

 const CreateContact = () => {
  const createContact = useCreateContact();
  const { showAlert } = useAlert();

  const submitContact = (contact: Contact) => {
    const { street, suite, city, ...rest } = contact;
    const hasAddress = street || suite || city;
    const data = { ...rest, ...(hasAddress && {address: {street, suite, city}})};


    createContact.mutate(data, {
      onSuccess: () => {        
       showAlert("New contact is created!", "success");
       form.reset();
      },
      onError: (error) => {
        showAlert(`Error: ${error.message}`, "error");
      },
    });
  };

  const form = useForm<Contact, Adapter>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      phone: '',
      street: "",
      suite: "",
      city: "",
      website: '',
    },
    onSubmit: ({ value }) => {
      submitContact(value);
    },
    validators: {
      onChange: contactSchema,
    },
    validatorAdapter: standardSchemaValidator(),
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Contact</h1>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
      }}
    >  
      <form.Field name="name" children={(field) => (
        <FormField field={field} label="Name*" placeholder="Enter full name" />
        )} />

      <form.Field name="username" children={(field) => (
        <FormField field={field} label="Username*" placeholder="Enter a username" />
        )} />
    
      <form.Field name="email" children={(field) => (
          <FormField field={field} label="Email*" placeholder="Enter email address" />
        )} />
      <form.Field name="phone" children={(field) => (
        <FormField field={field} label="Phone*" placeholder="Enter phone number" />
        )} />
      <form.Field name="street" children={(field) => (
          <FormField field={field} label="Street" placeholder="Enter street address" />
        )} />
        
      <form.Field name="suite" children={(field) => (
          <FormField field={field} label="Suite" placeholder="Enter suite number" />
        )}/>
      <form.Field name="city" children={(field) => (
          <FormField field={field} label="City" placeholder="Enter city" />
        )} />
      <form.Field name="website" children={(field) => (
          <FormField field={field} label="Website" placeholder="Enter website" />
        )} />
      <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <div className='text-right mt-2'>
              <button
                type="submit"
                disabled={!canSubmit}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Create Contact'}
              </button>
            </div>
          )}
        />
      </form>
    </div>
  );
}

export default CreateContact;