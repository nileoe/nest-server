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
import { CreateUserDto, UpdateUserDto, User } from './users-types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): User[] {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    const parsedInt: number = parseInt(id);
    if (parsedInt) {
      return this.usersService.findOne(parsedInt);
    }
  }

  @Post()
  create(@Body() user: CreateUserDto): User {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() userUpdate: UpdateUserDto,
  ): User | undefined {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string): User | undefined {
    return this.usersService.delete(+id);
  }
}
