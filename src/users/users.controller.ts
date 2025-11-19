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
interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: 'Lino' },
  { id: 2, name: 'Muriel' },
  { id: 3, name: 'Fred' },
  { id: 4, name: 'Anne' },
];

@Controller('users')
export class UsersController {
  @Get()
  getAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): User[] {
    console.log(role)
    return users;
  }

  @Get(':id')
  getOne(@Param('id') id: string): User {
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
