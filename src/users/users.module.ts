import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { AuthModule } from 'src/auth/auth.module';
import { ProjectEntity } from 'src/projects/projects.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User]),
 
  ],
  exports: [
    UsersService,
  ]
})
export class UsersModule {}