import type { User } from '../types/types';
import { DEFAULT_USER_ID } from '@/utils/constants';

export async function getUsers(): Promise<User[]> {
  const response = await fetch('./data/users.json');
  const users: User[] = await response.json();

  return users;
}

export async function getUserById(id: number): Promise<User | undefined> {
  const users = await getUsers();

  return users.find((user) => user.id === id);
}

export async function getCurrentUser(): Promise<User | undefined> {
  const users = await getUsers();

  return users.find((user) => user.id === DEFAULT_USER_ID);
}
