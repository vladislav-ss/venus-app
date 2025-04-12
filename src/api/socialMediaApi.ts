import type { SocialMedia } from '../types/types';
import { getCurrentUser } from './userApi';

export async function getSocialMedia(): Promise<SocialMedia[]> {
  const response = await fetch('./data/socialMedia.json');
  const socialMedia: SocialMedia[] = await response.json();

  return socialMedia;
}

export async function getSocialMediaById(id: number): Promise<SocialMedia | undefined> {
  const socialMedia = await getSocialMedia();

  return socialMedia.find((socialMedia) => socialMedia.id === id);
}

export async function getSocialMediaByUserId(userId: number): Promise<SocialMedia[]> {
  const socialMedia = await getSocialMedia();

  return socialMedia.filter((socialMedia) => socialMedia.userId === userId);
}

export async function getSocialMediaCurrentUser(): Promise<SocialMedia[]> {
  const socialMedia = await getSocialMedia();
  const currentUser = await getCurrentUser();

  return socialMedia.filter((socialMedia) => socialMedia.userId === currentUser?.id);
}
