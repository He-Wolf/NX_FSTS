import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { TodoCreateDto } from './models/todo-create.dto';
import { TodoDto } from './models/todo.dto';

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(TodoEntity)
        private todoRepository: Repository<TodoEntity>
    ) { }
    
    async getAllTodo(): Promise<TodoDto[]>{
        const todos : TodoEntity[] = await this.todoRepository.find();

        return todos;
    }

    async getOneTodo(id: string): Promise<TodoDto> {
        const todo : TodoEntity = await this.todoRepository.findOne( {where: { id }} );

        if (!todo) {
            throw new HttpException(`Todo item doesn't exist`, HttpStatus.BAD_REQUEST);
        }

        return todo;
    }
    
    async createTodo(todoDto: TodoCreateDto): Promise<TodoDto> {
        let todo = new TodoEntity();

        todo.name = todoDto.name;
        todo.isDone = todoDto.isDone;
        todo.description = todoDto.description;
        
        todo = await this.todoRepository.save(todo);

        return todo;
    }

    async modifyTodo(id: string, todoDto: TodoCreateDto): Promise<TodoDto>{
        let todo = await this.todoRepository.findOne( {where: { id }} );

        if (!todo) {
            throw new HttpException(`Todo item doesn't exist`, HttpStatus.BAD_REQUEST);
        }

        todo.name = todoDto.name;
        todo.isDone = todoDto.isDone;
        todo.description = todoDto.description;

        todo = await this.todoRepository.save(todo);

        return todo;
    }

    async deleteTodo(id: string): Promise<TodoDto>{
        let todo = await this.todoRepository.findOne( {where: { id }} );

        if (!todo) {
            throw new HttpException(`Todo item doesn't exist`, HttpStatus.BAD_REQUEST);
        }

        todo = await this.todoRepository.remove(todo);

        return todo;
    }
}
