// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  // Método para crear una tarea asociada a un usuario
  async create(createTaskDto: CreateTaskDto, userId: number) {
    return this.prisma.task.create({
      data: {
        ...createTaskDto,
        userId: userId, 
      },
    });
  }

  // Método para obtener todas las tareas de un usuario
  async findAll(userId: number) {
    return this.prisma.task.findMany({
      where: { userId },
    });
  }

  // Método para obtener una tarea específica de un usuario
  async findOne(id: number, userId: number) {
    const task = await this.prisma.task.findFirst({
      where: {
        id,
        userId, // Asegura que la tarea pertenezca al usuario autenticado
      },
    });
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  // Método para actualizar una tarea de un usuario
  async update(id: number, updateTaskDto: UpdateTaskDto, userId: number) {
    const task = await this.prisma.task.updateMany({
      where: {
        id,
        userId, // Asegura que la tarea pertenezca al usuario autenticado
      },
      data: updateTaskDto,
    });

    if (task.count === 0) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  // Método para eliminar una tarea de un usuario
  async remove(id: number, userId: number) {
    const task = await this.prisma.task.deleteMany({
      where: {
        id,
        userId, // Asegura que la tarea pertenezca al usuario autenticado
      },
    });

    if (task.count === 0) {
      throw new NotFoundException('Task not found');
    }

    return { message: 'Task deleted successfully' };
  }
}
