import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsNotEmpty, IsNumber } from '@nestjs/class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto)
{
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsNumber()
    @IsNotEmpty()
    phone: number;

    @IsNumber()
    @IsNotEmpty()
    role_id: number;

    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    address: string;
}