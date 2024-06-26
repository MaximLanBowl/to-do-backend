import { ApiProperty } from "@nestjs/swagger";

export class RemoveTaskFieldDto {
    @ApiProperty({ example: 'project_id', description: 'Название поля' })
    name: string

    @ApiProperty({ example: 'number', description: 'Тип поля' })
    type: string;

    @ApiProperty({ example: 1, description: 'ID задачи' })
    taskId: number;
}
