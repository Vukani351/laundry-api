import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { LaundromatController } from './laundromat/laundromat.controller';
import { LaundryController } from './laundry/laundry.controller';
import { LaundromatModule } from './laundromat/laundromat.module';
import { LaundryModule } from './laundry/laundry.module';
@Module({
  imports: [LaundryModule, LaundromatModule, UserModule],
  controllers: [AppController, LaundromatController, UserController, LaundryController],
  providers: [AppService],
})
export class AppModule { }
