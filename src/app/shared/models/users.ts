export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
  role?: Roles;
}
export class Users {
    $key!: string;
    fname!: string;
    lname!: string;
    email!: string;
    password!: number;
    phonenumber!: number;
    role!: string;
}
