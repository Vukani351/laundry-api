import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LaundryService } from './laundry.service';
import { LaundryController } from './laundry.controller';
import { User } from '@/user/entities/user.model';
import { Laundry } from './entities/laundry.model';
import { UserService } from '@/user/user.service';

@Module({
  imports: [SequelizeModule.forFeature([Laundry, User])],
  providers: [LaundryService, UserService],
  controllers: [LaundryController],
})
export class LaundryModule { }