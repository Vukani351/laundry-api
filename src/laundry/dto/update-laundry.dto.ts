import { PartialType } from '@nestjs/mapped-types';
import { CreateLaundryDto } from './create-laundry.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from '@nestjs/class-validator';

export class UpdateLaundryDto extends PartialType(CreateLaundryDto) {

    @IsNotEmpty()
    @IsNumber()
    id;

    @IsNotEmpty()
    @IsNumber()
    owner_id;

    @IsNotEmpty()
    @IsNumber()
    admin_id;

    @IsNotEmpty()
    @IsNumber()
    weight?;

    @IsNotEmpty()
    @IsNumber()
    price?;

    @IsOptional()
    @IsString()
    status?;
}
