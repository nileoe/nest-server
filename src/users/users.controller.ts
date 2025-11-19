import { Controller, Get } from '@nestjs/common';
interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {id: 1,name:"Lino"}
]

@Controller('users')
export class UsersController {
    @Get()
    findAll(): User[] {
        return users
    }
}
