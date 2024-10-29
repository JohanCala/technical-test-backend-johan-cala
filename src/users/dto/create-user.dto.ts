// src/users/dto/create-user.dto.ts
import { IsString, IsNotEmpty, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'username123', description: 'Nombre de usuario' })
  @IsString()
  @IsNotEmpty({ message: 'Username is required' })
  @Length(4, 20)
  @Matches(/^[a-zA-Z0-9]+$/)
  username: string;

  @ApiProperty({ example: 'StrongPassword1!', description: 'Contraseña del usuario' })
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 50)
  password: string;
}
