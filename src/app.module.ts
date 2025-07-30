import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './DatabaseModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { LaundromatController } from './laundromat/laundromat.controller';
import { LaundryController } from './laundry/laundry.controller';
import { LaundromatModule } from './laundromat/laundromat.module';
import { LaundryModule } from './laundry/laundry.module';
import { LaundromatService } from './laundromat/laundromat.service';
import { LaundryService } from './laundry/laundry.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.development.env', '.development.env.local', '.env'],
    }),
    DatabaseModule,
    LaundryModule,
    LaundromatModule,
    UserModule,
  ],
  controllers: [AppController, LaundromatController, UserController, LaundryController],
  providers: [AppService, LaundromatService, LaundryService],
})
export class AppModule { }
