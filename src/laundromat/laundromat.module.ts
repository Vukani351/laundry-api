import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LaundromatService } from './laundromat.service';
import { LaundromatController } from './laundromat.controller';
import { User } from '@/user/entities/user.model';
import { Laundromat } from './entities/laundromat.model';

@Module({
  imports: [SequelizeModule.forFeature([Laundromat, User])],
  providers: [LaundromatService],
  controllers: [LaundromatController],
})
export class LaundromatModule { }