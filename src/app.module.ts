import { Module } from "@nestjs/common";

import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './projects/projects.module';
import { ColumnsModule } from './columns/columns.module';
import { ProjectEntity } from "./projects/projects.entity";
import { ColumnEntity } from "./columns/columns.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskModule } from './tasks/tasks.module';
import { TaskFieldModule } from './tasks-field/tasks-field.module';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [User, ColumnEntity, ProjectEntity],
            synchronize: true,
          }),
        UsersModule,
        AuthModule,
        ProjectModule,
        ColumnsModule,
        TaskModule,
        TaskFieldModule,
    ],

})
export class AppModule {}