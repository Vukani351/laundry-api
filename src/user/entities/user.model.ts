import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Role } from '@/role/role.model';
import { Laundromat } from '@/laundromat/entities/laundromat.model';
import { Laundry } from '@/laundry/entities/laundry.model';

@Table({
    tableName: 'User',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare id: number;

    @Column(DataType.STRING)
    username: string;

    @ForeignKey(() => Role)
    @Column(DataType.INTEGER)
    role_id: number;

    @BelongsTo(() => Role)
    role: Role;

    @Column(DataType.INTEGER)
    phone: number;

    @Column(DataType.TEXT)
    address: string;

    @HasMany(() => Laundry)
    laundries: Laundry[];

    @HasMany(() => Laundromat)
    laundromats: Laundromat[];
}