import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProjectService } from './projects.service';
import { ProjectEntity } from './projects.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { OwnerGuard } from 'src/auth/owner.guard';


@Controller('projects')
@UseGuards(OwnerGuard)
export class ProjectsController {
    constructor(private projectService: ProjectService) { }

    @ApiOperation({ summary: 'Создание проекта' })
    @ApiResponse({ status: 200, type: ProjectEntity })
    @Post()
    create(@Body() project: ProjectEntity) {
        return this.projectService.createProject(project)
    }

    @ApiOperation({ summary: 'Удаление проекта' })
    @ApiResponse({ status: 200, type: ProjectEntity })
    @Delete(':id')
    deleteProject(@Param('id') id: number): Promise<DeleteResult> {
        return this.projectService.deleteProject(id)
    }

    @ApiOperation({ summary: 'Обновление проекта' })
    @ApiResponse({ status: 200, type: ProjectEntity })
    @Put(':id')
    updateProject(@Param('id') id: number, @Body() project: ProjectEntity): Promise<ProjectEntity> {
        return this.projectService.updateProject(id, project);
    }


}
