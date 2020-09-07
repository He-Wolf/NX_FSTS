import { TodoEntity } from './todo.entity';

describe('Todo', () => {
  it('should be defined', () => {
    expect(new TodoEntity()).toBeDefined();
  });
});
