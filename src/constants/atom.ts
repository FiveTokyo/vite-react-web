import { atom } from 'jotai'

export interface UserInfoAtom {
    id?: string;
    name?: string;
    age?: number;
    address?: string;
    email?: string;
    phone?: string;
    gender?: string;
    birthday?: string;
    avatar?: string;
    description?: string;
    avatarUrl?: string;
    genderUrl?: string;
    birthdayUrl?: string;
    descriptionUrl?: string;
}

export const userInfoAtom = atom<UserInfoAtom>({ name: 'tokyo', age: 25 })



export interface OptionsAtom {
    [k: string]: {
        label?: string;
        value?: string;
    }[]
}

export const optionsAtom = atom<OptionsAtom>({})