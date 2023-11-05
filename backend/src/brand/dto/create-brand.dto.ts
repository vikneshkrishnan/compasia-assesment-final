import { IsNotEmpty, IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";


export class CreateBrandDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
}
