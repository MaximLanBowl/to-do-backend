import { forwardRef, Module } from '@nestjs/common';

import { ProjectsController } from './projects.controller';
import { ProjectService } from './projects.service';
import { AuthModule } from '../auth/auth.module';
import { ProjectEntity } from './projects.entity';
import { User } from 'src/users/users.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnEntity } from 'src/columns/columns.entity';

@Module({
  imports: [
  forwardRef(() => AuthModule),
  TypeOrmModule.forFeature([User, ProjectEntity, ColumnEntity]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectService],
})
export class ProjectModule {}
