import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany } from 'typeorm';
import { ProjectEntity } from 'src/projects/projects.entity';

@Entity('columns')
export class ColumnEntity {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @PrimaryGeneratedColumn() 
    id: number

    @ApiProperty({ example: 'Имя', description: 'Имя' })
    @Column()
    name: string

    @ApiProperty({ example: 1, description: 'Позиция' })
    @Column()
    order: number

    @OneToMany(() => ProjectEntity, (project) => project.column)
    @JoinColumn({name: 'projectId'})
    project: ProjectEntity
    
    // @OneToMany(() => TaskEntity, (task: TaskEntity) => task.column)
    // tasks: TaskEntity[];
}





