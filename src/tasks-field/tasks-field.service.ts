
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskFieldEntity } from './tasksField.entity';

@Injectable()
export class TaskFieldService {
  constructor(
    @InjectRepository(TaskFieldEntity)
    private taskFieldRepository: Repository<TaskFieldEntity>,
  ) {}

  async create(taskField: Partial<TaskFieldEntity>): Promise<TaskFieldEntity> {
    return this.taskFieldRepository.save(taskField);
  }

  async findAll(): Promise<TaskFieldEntity[]> {
    return this.taskFieldRepository.find();
  }

  async findOne(id: number): Promise<TaskFieldEntity> {
    return this.taskFieldRepository.findOne({where:{id}});
  }

  async update(id: number, taskField: Partial<TaskFieldEntity>): Promise<TaskFieldEntity> {
    await this.taskFieldRepository.update(id, taskField);
    return this.taskFieldRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    await this.taskFieldRepository.delete(id);
  }
}