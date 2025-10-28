import { Laundromat } from '@/laundromat/entities/laundromat.model';
import { User } from '@/user/entities/user.model';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

enum LaundryStatus {
    NOT_STARTED = 'not started',
    WASHING = 'washing',
    DRYING = 'drying',
    READY = 'ready'
}

@Table({
    tableName: 'Laundry',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Laundry extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare id: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    owner_id: number;

    @BelongsTo(() => User, 'owner_id')
    owner: User;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    admin_id: number;

    @BelongsTo(() => User, 'admin_id')
    admin: User;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    laundromat_id: number;

    @BelongsTo(() => Laundromat, 'laundromat_id')
    laundromat: Laundromat;

    @Column(DataType.DECIMAL(10, 2))
    weight: number;

    @Column(DataType.DECIMAL(10, 2))
    price: number;

    @Column(DataType.BOOLEAN)
    isPaid: boolean;

    @Column({
        type: DataType.ENUM(...Object.values(LaundryStatus)),
        defaultValue: LaundryStatus.NOT_STARTED,
    })
    status: LaundryStatus;
}