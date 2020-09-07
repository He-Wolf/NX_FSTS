import { IsNotEmpty, IsOptional, MaxLength, IsBoolean, IsString, IsUUID } from 'class-validator';
import { ITodo } from "@ngnest/api-interfaces";

export class TodoDto implements ITodo {
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsBoolean()
    isDone: boolean;
    
    @IsOptional()    
    @MaxLength(50)
    @IsString()
    description?: string;
}
