const API_BASE_URL = "http://localhost:3001";

export const fetchContacts = async () => {
  const response = await fetch(`${API_BASE_URL}/contacts`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export const fetchContact = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/contacts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
};

export const updateContact = async (id: string, updatedContact: any) => {
  const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedContact),
  });
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  return response.json();
};

type NewContact = {
  name: string; email: string, description: string;
  profilePicture: string; 
}

export const createContact = async (newContact: NewContact) => {
  const response = await fetch(`${API_BASE_URL}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newContact),
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
};

export const deleteContact = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
  return response.json();
};