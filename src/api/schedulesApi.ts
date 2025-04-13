import { getCurrentUser } from './userApi';

interface Schedule {
  id: number;
  userId: number;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
}

export async function getSchedules(): Promise<Schedule[]> {
  const response = await fetch('./data/schedules.json');
  const schedules: Schedule[] = await response.json();
  return schedules;
}

export async function getScheduleById(id: number): Promise<Schedule | undefined> {
  const schedules = await getSchedules();
  return schedules.find((schedule) => schedule.id === id);
}

export async function getSchedulesCurrentUser(): Promise<Schedule[]> {
  const schedules = await getSchedules();
  const currentUser = await getCurrentUser();
  const currentUserId = currentUser ? currentUser.id : 1;

  return schedules.filter((schedule) => schedule.userId === currentUserId);
}
