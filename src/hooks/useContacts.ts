import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  fetchContacts,
  createContact,
  fetchContact,
  updateContact,
  deleteContact
} from '../services/api';

export const useContacts = () => {
  return useQuery({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
  });
};

export const useContact = (id: string) => {
  return useQuery({
    queryKey: ['contacts', id],
    queryFn: () => fetchContact(id),
  });
};

export const useUpdateContact = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedContact: any) => updateContact(id, updatedContact),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:(newContact: any) => createContact(newContact),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
};