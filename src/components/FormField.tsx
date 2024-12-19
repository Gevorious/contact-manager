import { FieldApi } from '@tanstack/react-form';
import FieldInfo from './FieldInfo';
import { Contact } from '../pages/AddContactForm/ValidationSchemas/contactSchema';

type FormFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  field: FieldApi<Contact, any, any, any>;
}

const FormField = ({ field, label, type = 'text', placeholder }: FormFieldProps) => (
  <div>
    <label
      htmlFor={field.name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      id={field.name}
      name={field.name}
      type={type}
      value={field.state.value}
      onBlur={field.handleBlur}
      onChange={(e) => field.handleChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
    />
    <FieldInfo fieldMeta={field.state.meta} />
  </div>
);

export default FormField;
