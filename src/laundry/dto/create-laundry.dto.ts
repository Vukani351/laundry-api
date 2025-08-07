import { IsNumber, IsPositive, IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateLaundryDto {
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    phone: number;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    admin_id: number;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    weight: number;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    price: number;

    @IsString()
    status: string;
}