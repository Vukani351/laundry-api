import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { User } from '../user/entities/user.model';

@Table({
    tableName: 'Role',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Role extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    name: string;

    @Column(DataType.STRING)
    status: string;

    @HasMany(() => User)
    users: User[];
}