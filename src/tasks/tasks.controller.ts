import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TaskEntity } from './tasks.entity';
import { OwnerGuard } from 'src/auth/owner.guard';
import { TaskService } from './tasks.service';
import { ApiOperation } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';


@Controller('projects/:projectId/columns/:columnId/tasks')
@UseGuards(OwnerGuard)
export class TaskController {
  constructor(private taskService: TaskService) {}
    @ApiOperation({ summary: 'Создание задачи' })
    @Post()
    createTask(@Param('projectId') projectId: number, @Param('columnId') columnId: number,
    @Body() task: TaskEntity): Promise<TaskEntity> {
        return this.taskService.createTask(projectId, columnId, task)
    }

    @ApiOperation({ summary: 'Обновление задачи' })
    @Put(':taskId')
    updateTask(@Param('taskId') taskId: number, @Param('projectId') projectId: number,
    @Param('columnId') columnId: number, @Body() task: TaskEntity): Promise<TaskEntity> {
        return this.taskService.updateTask(taskId, projectId, columnId, task)
    }

    @ApiOperation({ summary: 'Удаление задачи' })
    @Delete(':taskId')
    deleteTask(@Param('taskId') taskId: number, @Param('projectId') projectId: number,
    @Param('columnId') columnId: number): Promise<DeleteResult> {
        return this.taskService.deleteTask(taskId, projectId, columnId)
    }

    @ApiOperation({ summary: 'Добавление поля к задаче' })
    @Post(':taskId/fields/:fieldId')
    addFieldToTask(@Param('taskId') taskId: number, @Param('fieldId') fieldId: number): Promise<TaskEntity> {
        return this.taskService.addFieldToTask(taskId, fieldId);
    }
    
}
