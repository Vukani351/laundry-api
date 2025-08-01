import { IsEmail, IsNotEmpty, IsNumber, isNumber, IsString } from "@nestjs/class-validator";

export class CreateUserDto {
    // these will become our username
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
    address: string;
}