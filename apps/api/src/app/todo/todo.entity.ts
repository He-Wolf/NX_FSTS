import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { ITodo, ITodoDto } from "@ngnest/api-interfaces";

@Entity('todo')
export class TodoEntity extends BaseEntity implements ITodo, ITodoDto {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'text',
        nullable: false
    })
    name: string;

    @Column({
        type: 'boolean',
        nullable: false
    })
    isDone: boolean;
    
    @Column({
        type: 'text',
        nullable: true
    })
    description?: string;
}
