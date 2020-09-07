import { Controller, Get, Post, Put, Delete, Param, Body, Request, UseGuards } from '@nestjs/common';
import { ITodoDto } from '@ngnest/api-interfaces';
import { ITodoCreate } from '@ngnest/api-interfaces';
import { TodoService } from './todo.service';


@Controller("todo")
export class TodoController {
    constructor(
        private readonly todoService: TodoService,
    ) {}
    
    @Get()
    async findAll(): Promise<ITodoDto[]> {
        const todos = await this.todoService.getAllTodo();

        return todos;
    }
    @Get(":id")
    async findOne(@Param("id") id: string): Promise<ITodoDto> {
        const todo = await this.todoService.getOneTodo(id);

        return todo;
    }
    @Post()
    async create(@Body() todoCreateDto: ITodoCreate): Promise<ITodoDto> {
        const todo = await this.todoService.createTodo(todoCreateDto);

        return todo;
    }
    @Put(":id")
    async update(@Param("id") id: string, @Body() todoCreateDto: ITodoCreate ): Promise<ITodoDto> {
        const todo = await this.todoService.modifyTodo(id, todoCreateDto);

        return todo;
    }
    @Delete(":id")
    async destory(@Param("id") id: string): Promise<ITodoDto> {
        const todo = await this.todoService.deleteTodo(id);

        return todo;
    }
}
