import { User } from '@/user/entities/user.model';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({
    tableName: 'Laundromat',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Laundromat extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare id: number;

    @Column(DataType.STRING)
    title: string;

    @Column(DataType.TEXT)
    address: string;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    user_id: number;

    @BelongsTo(() => User)
    user: User;

    @Column(DataType.STRING)
    status: string;
}