import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnEntity } from 'src/columns/columns.entity';

@Entity('projects')
export class ProjectEntity {

    @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'Название', description: 'Название проекта' })
    @Column()
    name: string;

    @ApiProperty({ example: 'Описание', description: 'Описание проекта' })
    @Column()
    description: string;

    @OneToMany(() => ColumnEntity, (column: ColumnEntity) => column.project)
    @JoinColumn({ name: 'columnId' })
    column: ColumnEntity;
    userId: any;
} 