import type { Schedule } from '../types/types';
import { getCurrentUser } from './userApi';

export async function getSchedules(): Promise<Schedule[]> {
  const response = await fetch('./data/schedules.json');
  const schedules: Schedule[] = await response.json();

  return schedules;
}

export async function getScheduleById(id: number): Promise<Schedule | undefined> {
  const schedules = await getSchedules();
  
  return schedules.find((schedule) => schedule.id === id);
}

export async function getSchedulesByUserId(userId: number): Promise<Schedule[]> {
  const schedules = await getSchedules();

  return schedules.filter((schedule) => schedule.userId === userId);
}

export async function getSchedulesCurrentUser(): Promise<Schedule[]> {
  const schedules = await getSchedules();
  const currentUser = await getCurrentUser();

  return schedules.filter((schedule) => schedule.userId === currentUser?.id);
}
