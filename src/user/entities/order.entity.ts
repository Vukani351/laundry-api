import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string; // 'pending', 'washing', 'ready', 'delivered'

    @Column()
    pickupDate: Date;

    @Column()
    deliveryDate: Date;

    @Column('simple-array')
    items: string[]; // ['shirt', 'pants', ...]

    @Column()
    totalPrice: number;

    @ManyToOne(() => User, user => user.orders)
    customer: User;
}