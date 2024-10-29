
import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Complete the project', description: 'Título de la tarea' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Finish the project documentation', description: 'Descripción de la tarea' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'pending', description: 'Estado de la tarea (pendiente, en progreso, completada)' })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({ example: '2024-12-31T00:00:00Z', description: 'Fecha de vencimiento de la tarea' })
  @IsDateString()
  dueDate: string; 
}
