import { Injectable } from '@nestjs/common';
import { dummyUsers } from 'dummy-data';

@Injectable()
export class UsersService {
  private users = dummyUsers;

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users
  }
}
