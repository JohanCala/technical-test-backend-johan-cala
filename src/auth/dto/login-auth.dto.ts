// src/auth/dto/login-auth.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({ example: 'username123', description: 'Nombre de usuario' })
  @IsString()
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @ApiProperty({ example: 'password123!', description: 'Contraseña del usuario' })
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
