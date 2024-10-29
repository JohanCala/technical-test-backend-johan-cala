import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tasks') 
@ApiBearerAuth() 
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiResponse({ status: 201, description: 'Tarea creada con éxito' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto, @Request() req) {
    const userId = req.user.userId;
    return await this.tasksService.create(createTaskDto, userId);
  }

  @ApiOperation({ summary: 'Listar todas las tareas del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Lista de tareas' })
  @Get()
  async findAll(@Request() req) {
    const userId = req.user.userId;
    return await this.tasksService.findAll(userId);
  }

  @ApiOperation({ summary: 'Obtener una tarea específica' })
  @ApiResponse({ status: 200, description: 'Detalles de la tarea' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    const userId = req.user.userId;
    return await this.tasksService.findOne(+id, userId);
  }

  @ApiOperation({ summary: 'Actualizar una tarea existente' })
  @ApiResponse({ status: 200, description: 'Tarea actualizada con éxito' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto, @Request() req) {
    const userId = req.user.userId;
    return await this.tasksService.update(+id, updateTaskDto, userId);
  }

  @ApiOperation({ summary: 'Eliminar una tarea' })
  @ApiResponse({ status: 200, description: 'Tarea eliminada con éxito' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    const userId = req.user.userId;
    return await this.tasksService.remove(+id, userId);
  }
}
