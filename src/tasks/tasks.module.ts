import { forwardRef, Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TaskService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ColumnEntity } from 'src/columns/columns.entity';
import { ProjectEntity } from 'src/projects/projects.entity';
import { User } from 'src/users/users.model';
import { TaskEntity } from './tasks.entity';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User, ColumnEntity, ProjectEntity, TaskEntity]),
    ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
