import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TaskFieldService } from './tasks-field.service';
import { TaskFieldEntity } from './tasksField.entity';
import { OwnerGuard } from 'src/auth/owner.guard';

@Controller('task-fields')
@UseGuards(OwnerGuard)
export class TaskFieldController {
  constructor(private readonly taskFieldService: TaskFieldService) {}

  @Post()
  create(@Body() taskField: Partial<TaskFieldEntity>): Promise<TaskFieldEntity> {
    return this.taskFieldService.create(taskField);
  }

  @Get()
  findAll(): Promise<TaskFieldEntity[]> {
    return this.taskFieldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TaskFieldEntity> {
    return this.taskFieldService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() taskField: Partial<TaskFieldEntity>): Promise<TaskFieldEntity> {
    return this.taskFieldService.update(id, taskField);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.taskFieldService.remove(id);
  }
}