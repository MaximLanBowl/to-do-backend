import { ApiProperty } from "@nestjs/swagger";
import { TaskEntity } from "src/tasks/tasks.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('task_fields')
export class TaskFieldEntity {
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'project_id', description: 'Название поля' })
    @Column()
    name: string;

    @ApiProperty({ example: 'number', description: 'Тип поля' })
    @Column()
    type: string | number;

    @ManyToOne(() => TaskEntity, (task) => task.taskFields, {onDelete: "CASCADE"})
    task: TaskEntity;
}
