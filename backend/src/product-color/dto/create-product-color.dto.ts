import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateProductColorDto {

    @IsString()
    @ApiProperty()
    color: string;

}
