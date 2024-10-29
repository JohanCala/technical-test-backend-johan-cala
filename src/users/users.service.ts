// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {} 

  
  async create(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;
    return this.prisma.user.create({
      data: {
        username,
        password, 
      },
    });
  }

  // Método para obtener todos los usuarios
  async findAll() {
    return this.prisma.user.findMany();
  }

  // Método para obtener un usuario por ID
  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Método para actualizar un usuario por ID
  async update(id: number, updateUserDto: Partial<CreateUserDto>) {
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Método para eliminar un usuario por ID
  async remove(id: number) {
    const user = await this.prisma.user.delete({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Método para buscar un usuario por username (útil para autenticación)
  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }
}
