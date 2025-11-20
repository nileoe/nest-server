import { Injectable } from '@nestjs/common';
import { dummyUsers } from 'dummy-data';
import { User, CreateUserDto, UpdateUserDto } from 'src/users/users-types';

@Injectable()
export class UsersService {
  private users = dummyUsers;

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(createUserDto: CreateUserDto): User {
    // simulate DB creating an ID
    let maxId = this.users[0].id;
    const highestIdUser = this.users.reduce(
      (userWithMaxId: User, currentUser: User) =>
        currentUser.id > userWithMaxId.id ? currentUser : userWithMaxId,
    );
    const createdUser: User = {
      ...createUserDto,
      id: highestIdUser.id + 1,
    };
    // post to DB with user, NOT createdUser (simulating for now)
    this.users.push(createdUser);
    return createdUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    const updatedUser = { ...this.users[userIndex], ...updateUserDto };
    this.users[userIndex] = updatedUser;
    return this.findOne(id);
  }

  delete(id: number): User | undefined {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
