import { IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

export class CreateLaundromatDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    address: string;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsString()
    status: string;
}
