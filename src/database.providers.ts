import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { User } from './user/entities/user.model';
import { Laundromat } from './laundromat/entities/laundromat.model';
import { Laundry } from './laundry/entities/laundry.model';
import { Role } from './role/role.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                logging: false,
                models: [User, Laundromat, Laundry, Role],
            });
            await sequelize.sync();
            return sequelize;
        },
    },
];
