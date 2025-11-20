export interface User {
  id: number;
  name: string;
  email: string;
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}

export type CreateUserDto = Omit<User, 'id'>;
export type UpdateUserDto = Partial<User>;