import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Dialect } from 'sequelize';
import { Laundromat } from './laundromat/entities/laundromat.model';
import { Laundry } from './laundry/entities/laundry.model';
import { Role } from './role/role.model';
import { User } from './user/entities/user.model';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                dialect: configService.get<Dialect>('DB_DIALECT'),
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                username: configService.get<string>('DB_USERNAME'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_DATABASE'),
                models: [User, Role, Laundry, Laundromat],
                autoLoadModels: true,
                synchronize: true, // Disable in production
                logging: console.log,
            }),
            inject: [ConfigService],
        }),
        SequelizeModule.forFeature([User, Role, Laundry, Laundromat]),
    ],
    exports: [SequelizeModule],
})
export class DatabaseModule { }