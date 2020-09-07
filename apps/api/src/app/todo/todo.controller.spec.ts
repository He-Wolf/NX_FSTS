import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TodoController', () => {
  let controller: TodoController;
  // declaring the repository variable for easy access later
  let repository: Repository<TodoEntity>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        TodoService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(TodoEntity),
          // as a class value, Repository needs no generics
          useClass: Repository,
        },      
      ]
    }).compile();

    controller = module.get<TodoController>(TodoController);
    // Save the instance of the repository and set the correct generics
    repository = module.get<Repository<TodoEntity>>(getRepositoryToken(TodoEntity));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
