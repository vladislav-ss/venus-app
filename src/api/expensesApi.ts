import type { Expense } from '../types/types';
import { getCurrentUser } from './userApi';

export async function getExpenses(): Promise<Expense[]> {
  const response = await fetch('./data/expenses.json');
  const expenses: Expense[] = await response.json();

  return expenses;
}

export async function getExpenseById(id: number): Promise<Expense | undefined> {
  const expenses = await getExpenses();
  return expenses.find((expense) => expense.id === id);
}

export async function getExpensesByUserId(userId: number): Promise<Expense[]> {
  const expenses = await getExpenses();
  return expenses.filter((expense) => expense.userId === userId);
}

export async function getExpensesCurrentUser(): Promise<Expense[]> {
  const expenses = await getExpenses();
  const currentUser = await getCurrentUser();
  const currentUserId = currentUser ? currentUser.id : 1;

  return expenses.filter((expense) => expense.userId === currentUserId);
}
