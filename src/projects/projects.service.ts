import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from 'src/projects/projects.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) {}

  createProject(project: ProjectEntity): Promise<ProjectEntity> {
    return this.projectRepository.save(project);
  }

  updateProject(id: number, project: ProjectEntity): Promise<ProjectEntity> {
    return this.projectRepository.save({ id, ...project });
  }

  deleteProject(id: number) {
    return this.projectRepository.delete(id);
  }
}
