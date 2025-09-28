import { IsNumber, IsPositive, IsNotEmpty, IsString, IsDateString } from "@nestjs/class-validator";
import { DataType, DateDataType } from "sequelize";
import { IsDate } from "sequelize-typescript";

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
    owner_id: number;

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

    @IsString()
    clientName: string;

    @IsString()
    isPaid: boolean;

    @IsDateString()
    created_at: DateDataType;
}