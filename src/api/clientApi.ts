import type { Client } from '../types/types';
import { getCurrentUser } from './userApi';

export async function getClients(): Promise<Client[]> {
  const response = await fetch('./data/clients.json');
  const clients: Client[] = await response.json();

  return clients;
}

export async function getClientById(id: number): Promise<Client | undefined> {
  const clients = await getClients();

  return clients.find((client) => client.id === id);
}

export async function getClientsByUserId(userId: number): Promise<Client[]> {
  const clients = await getClients();

  return clients.filter((client) => client.userId === userId);
}

export async function getClientsCurrentUser(): Promise<Client[]> {
  const clients = await getClients();
  const currentUser = await getCurrentUser();
  const currentUserId = currentUser ? currentUser.id : 1;

  return clients.filter((client) => client.userId === currentUserId);
}
