import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'your_postgres_user',
            password: 'your_password',
            database: 'laundry_db',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true, // Disable in production!
            logging: true
        })
    ]
})

export class DatabaseModule { }