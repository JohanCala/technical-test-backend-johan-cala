
import { IsString, IsNotEmpty, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
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
  @Matches(/(?=.*[A-Z])/, { message: 'Password must contain at least one uppercase letter' })
  @Matches(/(?=.*[a-z])/, { message: 'Password must contain at least one lowercase letter' })
  @Matches(/(?=.*\d)/, { message: 'Password must contain at least one number' })
  @Matches(/(?=.*[@$!%*?&])/, { message: 'Password must contain at least one special character' })
  password: string;
}
