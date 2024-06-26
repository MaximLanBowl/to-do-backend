import { ApiProperty } from "@nestjs/swagger";
import { ColumnEntity } from "src/columns/columns.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskFieldEntity } from "src/tasks-field/tasksField.entity";

export enum Priority {
    High = 'высокий',
    Medium = 'средний',
    Low = 'низкий',
}

@Entity('tasks')
export class TaskEntity {
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Задачи', description: 'Название' })
    @Column()
    name: string;

    @ApiProperty({ example: 'DD-MM-YYYY', description: 'Название' })
    @Column()
    createdAt: Date;

    @ApiProperty({ example: 'to-do', description: 'Статус' })
    @Column()
    status: string;

    @OneToMany(() => ColumnEntity, (column: ColumnEntity) => column.project)
    column: ColumnEntity;

    @OneToMany(() => TaskFieldEntity, (field) => field.task, { cascade: true })
    taskFields: TaskFieldEntity[];

    @ApiProperty({ example: 'Средний', description: 'Приоритет задачи' })
    @Column({
        type: 'enum',
        enum: Priority,
        default: Priority.Medium,
      })
    priority: Priority

}



