import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LaundryService } from './laundry.service';
import { LaundryController } from './laundry.controller';
import { User } from '@/user/entities/user.model';
import { Laundry } from './entities/laundry.model';

@Module({
  imports: [SequelizeModule.forFeature([Laundry, User])],
  providers: [LaundryService],
  controllers: [LaundryController],
})
export class LaundryModule { }