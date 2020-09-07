import { IsNotEmpty, IsOptional, MaxLength, IsBoolean, IsString } from 'class-validator';
import { ITodoCreate } from "@ngnest/api-interfaces";

export class TodoCreateDto implements ITodoCreate {
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
