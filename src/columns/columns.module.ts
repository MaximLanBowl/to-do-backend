import { forwardRef, Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { ColumnEntity } from './columns.entity';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/users/users.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectService } from 'src/projects/projects.service';
import { ProjectEntity } from 'src/projects/projects.entity';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User, ColumnEntity, ProjectEntity]),
    ],
  providers: [ColumnsService],
  controllers: [ColumnsController]
})
export class ColumnsModule {}
