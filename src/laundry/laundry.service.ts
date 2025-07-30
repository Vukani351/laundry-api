import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLaundryDto } from './dto/create-laundry.dto';
import { UpdateLaundryDto } from './dto/update-laundry.dto';
import { Laundry } from './entities/laundry.model';

@Injectable()
export class LaundryService {
  constructor(
    @InjectModel(Laundry)
    private laundryModel: typeof Laundry,
  ) { }

  async create(createLaundryDto: CreateLaundryDto): Promise<Laundry> {
    return this.laundryModel.create({ ...createLaundryDto });
  }

  async findAll(): Promise<Laundry[]> {
    return this.laundryModel.findAll();
  }

  async findOne(id: number): Promise<Laundry> {
    const laundry = await this.laundryModel.findByPk(id);
    if (!laundry) {
      throw new NotFoundException(`Laundry with id ${id} not found`);
    }
    return laundry;
  }

  async update(id: number, updateLaundryDto: UpdateLaundryDto): Promise<Laundry> {
    const laundry = await this.laundryModel.findByPk(id);
    if (!laundry) {
      throw new NotFoundException(`Laundry with id ${id} not found`);
    }
    return laundry.update(updateLaundryDto);
  }

  async remove(id: number): Promise<void> {
    const laundry = await this.laundryModel.findByPk(id);
    if (!laundry) {
      throw new NotFoundException(`Laundry with id ${id} not found`);
    }
    await laundry.destroy();
  }
}