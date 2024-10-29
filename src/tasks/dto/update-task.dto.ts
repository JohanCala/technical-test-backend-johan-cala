import { IsString, IsOptional, IsIn, IsDateString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsIn(['pending', 'in-progress', 'completed'], { message: 'Status must be pending, in-progress, or completed' })
  @IsOptional()
  status?: string;

  @IsDateString({}, { message: 'Due date must be a valid date' })
  @IsOptional()
  dueDate?: string;
}
