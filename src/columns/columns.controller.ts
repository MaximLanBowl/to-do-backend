import { Body, Controller, Delete, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnEntity } from './columns.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { OwnerGuard } from 'src/auth/owner.guard';


@Controller('projects/:projectId/columns')
@UseGuards(OwnerGuard)
export class ColumnsController {
    constructor(private columnService: ColumnsService) { }

    @ApiOperation({ summary: 'Добавление столбца' })
    @ApiResponse({ status: 200, type: ColumnEntity })
    @Post()
    createColumn(@Param('projectId') projectId: number, @Body() column: ColumnEntity): Promise<ColumnEntity> {
        return this.columnService.createColumn(projectId, column)
    }

    @ApiOperation({ summary: 'Обновление столбца' })
    @ApiResponse({ status: 200, type: ColumnEntity })
    @Put(':columnId')
    updateColumn(@Param('projectId') projectId: number, @Param('columnId') columnId:
        number, @Body() column: ColumnEntity): Promise<ColumnEntity> {
        return this.columnService.updateColumn(projectId, columnId, column)
    }

    @ApiOperation({ summary: 'Удаление столбца' })
    @ApiResponse({ status: 200, type: ColumnEntity })
    @Delete(':columnId')
    deleteColumn(@Param('projectId') projectId: number, @Param('columnId') columnId: number): Promise<DeleteResult> {
        return this.columnService.deleteColumn(projectId, columnId)
    }  

    @ApiOperation({ summary: 'Перемещение столбца' })
    @ApiResponse({ status: 200, type: ColumnEntity })
    @Patch(':columnId/move')
    moveColumn(@Param('projectId') projectId: number, @Param('columnId') columnId:
        number, @Body() order: number): Promise<ColumnEntity> {
        return this.columnService.moveColumn(projectId, columnId, order)
    }
}
