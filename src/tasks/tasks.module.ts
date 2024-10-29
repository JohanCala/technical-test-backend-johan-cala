// src/tasks/tasks.module.ts
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule], 
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}