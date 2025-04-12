export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  location: string;
}

export interface Earning {
  id: number;
  userId: number;
  description: string;
  amount: number;
  date: string;
}

export interface Expense {
  id: number;
  userId: number;
  description: string;
  amount: number;
  date: string;
}

export interface Client {
  id: number;
  userId: number;
  name: string;
  dateJoined: string;
}

export interface Service {
  id: number;
  userId: number;
  name: string;
  price: number;
  date: string;
}

export interface SocialMedia {
  id: number;
  userId: number;
  projects: number;
  followers: number;
  following: number;
}

export interface Booking {
  id: number;
  userId: number;
  clientName: string;
  serviceName: string;
  date: string;
  time: string;
}

export interface Schedule {
  id: number;
  userId: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
}
