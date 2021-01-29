import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from "./todo/todo.entity"
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        "type": "sqlite",
        "database": "todoapp.db",
        "synchronize": true,
        "entities": [TodoEntity]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'todo'),
      exclude: ['/api*']
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
