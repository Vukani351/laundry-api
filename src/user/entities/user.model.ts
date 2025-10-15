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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    role_id: number;

    @BelongsTo(() => Role)
    role: Role;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    phone: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    address: string;

    @HasMany(() => Laundry)
    laundries: Laundry[];

    @HasMany(() => Laundromat)
    laundromats: Laundromat[];
}