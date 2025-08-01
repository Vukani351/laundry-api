import { PartialType } from '@nestjs/mapped-types';
import { CreateLaundromatDto } from './create-laundromat.dto';
import { IsString, IsNotEmpty, IsNumber } from '@nestjs/class-validator';

export class UpdateLaundromatDto extends PartialType(CreateLaundromatDto) {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    body: string;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsString()
    status: string;
}
