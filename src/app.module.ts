import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaundrymatController } from './controllers/laundrymat/laundrymat.controller';
import { UserController } from './controllers/user/user.controller';
import { LaundryController } from './controllers/laundry/laundry.controller';
import { LaundryModule } from './laundry/laundry.module';
import { LaundrymatModule } from './laundrymat/laundrymat.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [LaundryModule, LaundrymatModule, UserModule],
  controllers: [AppController, LaundrymatController, UserController, LaundryController],
  providers: [AppService],
})
export class AppModule {}
