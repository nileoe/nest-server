import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid roles are INTERN, ENGINEER or ADMIN.',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}

 // inherits all validation defined in CreateUserDto (nice)
export class UpdateUserDto extends PartialType(CreateUserDto) {}
