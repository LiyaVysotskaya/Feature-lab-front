import { atom } from 'jotai';
import { UserProfile } from '../types/data';

export const userProfileAtom = atom<UserProfile | null>(null);
