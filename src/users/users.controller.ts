import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { dummyUsers } from 'dummy-data';
import {User} from "../types/users-types"

let users = dummyUsers

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): User[] {
    console.log(role)
    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    console.log(id);
    return users[id];
  }

  @Post()
  create(@Body() user: any) {
    console.log(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `deleted user with id ${id}.`;
  }
}
