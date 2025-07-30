import { Injectable } from '@nestjs/common';
import { CreateLaundromatDto } from './dto/create-laundromat.dto';
import { UpdateLaundromatDto } from './dto/update-laundromat.dto';

@Injectable()
export class LaundromatService {
  create(createLaundromatDto: CreateLaundromatDto) {
    return 'This action adds a new laundromat';
  }

  findAll() {
    return `This action returns all laundromat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laundromat`;
  }

  update(id: number, updateLaundromatDto: UpdateLaundromatDto) {
    return `This action updates a #${id} laundromat`;
  }

  remove(id: number) {
    return `This action removes a #${id} laundromat`;
  }
}
