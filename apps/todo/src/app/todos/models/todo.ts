import { ITodoDto } from "@ngnest/api-interfaces";

export class Todo implements ITodoDto {
    id: string;
    name: string;
    isDone: boolean;
    description: string;
}
