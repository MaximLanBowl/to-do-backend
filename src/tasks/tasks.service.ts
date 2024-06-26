import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColumnEntity } from 'src/columns/columns.entity';
import { ProjectEntity } from 'src/projects/projects.entity';
import { DeleteResult, Repository } from 'typeorm';
import { TaskEntity } from './tasks.entity';
import { Priority } from './tasks.entity';

@Injectable()
export class TaskService {
  taskFieldService: any;

  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
    @InjectRepository(ColumnEntity)
    private columnRepository: Repository<ColumnEntity>,
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) { }

  async createTask(projectId: number, columnId: number, task: TaskEntity): Promise<TaskEntity> {
    const column = await this.columnRepository.findOne({ where: { id: columnId, project: { id: projectId } } })
    task.column = column
    return this.taskRepository.save(task)
  }
  async findAll(): Promise<TaskEntity[]> {
    return this.taskRepository.find({ relations: ['taskFields'] });
  }

  async findOne(id: number): Promise<TaskEntity> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async updateTask(projectId: number, columnId: number, taskId: number, task: TaskEntity): Promise<TaskEntity> {
    const column = await this.columnRepository.findOne({ where: { id: columnId, project: { id: projectId } } })
    return this.taskRepository.save({ id: taskId, column, ...task })
  }

  deleteTask(projectId: number, columnId: number, taskId: number): Promise<DeleteResult> {
    return this.taskRepository.delete({ id: taskId, column: { id: columnId, project: { id: projectId } } })
  }

  async addFieldToTask(taskId: number, fieldId: number): Promise<TaskEntity> {
    const task = await this.findOne(taskId);
    const field = await this.taskFieldService.findOne(fieldId);
    task.taskFields.push(field);
    return this.taskRepository.save(task);
  }

  async getTaskByPriority(priority: Priority): Promise<TaskEntity[]> {
    return this.taskRepository.find({ where: { priority } })
  }

  async updateTaskPriority(taskId: number, priority: Priority): Promise<TaskEntity> {
    const task = await this.findOne(taskId)
    task.priority = priority
    return this.taskRepository.save(task)
  }

}