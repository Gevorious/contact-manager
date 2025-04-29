import { standardSchemaValidator, useForm } from '@tanstack/react-form';
import { Adapter, Contact, updateSchema } from '../ValidationSchemas/contactSchema';
import FormField from '../../../components/FormField';

type ContactEditFormProps = {
  contact: Contact;
  onSave: (updatedContact: Contact) => void;
};

const ContactEditForm = ({ contact, onSave }: ContactEditFormProps) => {
  const form = useForm<Contact, Adapter>({
      defaultValues: contact,
      onSubmit: ({ value }) => {
        onSave(value);
      },
      validators: {
        onChange: updateSchema,
      },
      validatorAdapter: standardSchemaValidator(),
    });

  return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
      <form.Field name="name" children={(field) => (
        <FormField field={field} label="Name*" />
      )} />
      <form.Field name="username" children={(field) => (
        <FormField field={field} label="Username*" />
      )} />
      <form.Field name="email" children={(field) => (
        <FormField field={field} label="Email*" />
      )} />
      <form.Field name="phone" children={(field) => (
        <FormField field={field} label="Phone*" />
      )} />
      <form.Field name="website" children={(field) => (
        <FormField field={field} label="Website" />
      )} />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="submit"
              disabled={!canSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
      </div>)} />
    </form>
  );
};

export default ContactEditForm;