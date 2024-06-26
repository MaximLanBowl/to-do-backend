import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColumnEntity } from 'src/columns/columns.entity';
import { ProjectEntity } from 'src/projects/projects.entity';

@Injectable()
export class ColumnsService {

    constructor(
        @InjectRepository(ColumnEntity)
        private columnRepository: Repository<ColumnEntity>,
        @InjectRepository(ProjectEntity)
        private projectRepository: Repository<ProjectEntity>,
    ) {}

    async createColumn(projectId: number, column: ColumnEntity): Promise<ColumnEntity> {
        const project = await this.projectRepository.findOne({where: {id: projectId}});
        column.project = project
        return this.columnRepository.save(column)
    }   

    async updateColumn(projectId: number, columnId: number, column: ColumnEntity): Promise<ColumnEntity> {
        const project = await this.projectRepository.findOne({where: {id: projectId}})
        return this.columnRepository.save({id: columnId, project, ...column})
    }   

    async deleteColumn(projectId: number, columnId: number) {
        const column = await this.columnRepository.findOne({ where: {id: columnId, project: {id: projectId}}})
        return this.columnRepository.delete(column)
    }

    async moveColumn(projectId: number, columnId: number, order: number): Promise<ColumnEntity> {
        const column = await this.columnRepository.findOne({ where: {id: columnId, project: {id: projectId}}})
        column.order = order
        return this.columnRepository.save(column)
    }
    
}
