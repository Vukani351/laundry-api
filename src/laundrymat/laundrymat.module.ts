import { Module } from '@nestjs/common';
import { LaundrymatService } from './laundrymat.service';
import { LaundrymatController } from './laundrymat.controller';

@Module({
  controllers: [LaundrymatController],
  providers: [LaundrymatService],
})
export class LaundrymatModule {}
