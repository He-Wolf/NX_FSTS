import { ITodoCreate } from "@ngnest/api-interfaces";

export class TodoCreate implements ITodoCreate {
    name: string;
    isDone: boolean;
    description: string;
}
