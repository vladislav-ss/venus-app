import type { Earning } from '../types/types';
import { getCurrentUser } from './userApi';

export async function getEarnings(): Promise<Earning[]> {
  const response = await fetch('./data/earnings.json');
  const earnings: Earning[] = await response.json();

  return earnings;
}

export async function getEarningById(id: number): Promise<Earning | undefined> {
  const earnings = await getEarnings();

  return earnings.find((earning) => earning.id === id);
}

export async function getEarningsByUserId(userId: number): Promise<Earning[]> {
  const earnings = await getEarnings();

  return earnings.filter((earning) => earning.userId === userId);
}

export async function getEarningsCurrentUser(): Promise<Earning[]> {
  const earnings = await getEarnings();
  const currentUser = await getCurrentUser();
  const currentUserId = currentUser ? currentUser.id : 1;
  return earnings.filter((earning) => earning.userId === currentUserId);
}
