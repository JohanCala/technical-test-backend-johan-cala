import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module'; // Importa el PrismaModule

@Module({
  imports: [AuthModule, UsersModule, TasksModule, PrismaModule], // Agrega PrismaModule aquí
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}