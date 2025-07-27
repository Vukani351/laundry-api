import { Injectable } from '@nestjs/common';
import { CreateLaundrymatDto } from './dto/create-laundrymat.dto';
import { UpdateLaundrymatDto } from './dto/update-laundrymat.dto';

@Injectable()
export class LaundrymatService {
  create(createLaundrymatDto: CreateLaundrymatDto) {
    return 'This action adds a new laundrymat';
  }

  findAll() {
    return `This action returns all laundrymat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laundrymat`;
  }

  update(id: number, updateLaundrymatDto: UpdateLaundrymatDto) {
    return `This action updates a #${id} laundrymat`;
  }

  remove(id: number) {
    return `This action removes a #${id} laundrymat`;
  }
}
