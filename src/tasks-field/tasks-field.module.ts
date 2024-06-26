
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskFieldEntity } from './tasksField.entity';
import { TaskFieldService } from './tasks-field.service';
import { TaskFieldController } from './tasks-field.controller';
import { ColumnEntity } from 'src/columns/columns.entity';
import { ProjectEntity } from 'src/projects/projects.entity';
import { User } from 'src/users/users.model';
import { TaskEntity } from 'src/tasks/tasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ColumnEntity, ProjectEntity, TaskEntity, TaskFieldEntity])],
  providers: [TaskFieldService],
  controllers: [TaskFieldController],
  exports: [TaskFieldService],
})
export class TaskFieldModule {}