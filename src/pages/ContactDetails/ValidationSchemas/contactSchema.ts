import { z } from 'zod';
import { StandardSchemaV1, Validator } from '@tanstack/react-form';

export const updateSchema = z.object({
  name: z.string().min(3, 'name must be at least 3 characters'),
  username: z.string().min(3, 'username must be at least 3 characters'),
  email: z.string().email('must be a valid email'),
  phone: z.string().min(10, 'phone number must be at least 10 characters'),
  website: z.string().url('must be a valid URL').or(z.literal('')).optional(),
});

export type Contact = z.infer<typeof updateSchema>;

export type Adapter = Validator<unknown, StandardSchemaV1<any, any>>