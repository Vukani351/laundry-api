import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLaundryDto } from './dto/create-laundry.dto';
import { UpdateLaundryDto } from './dto/update-laundry.dto';
import { Laundry } from './entities/laundry.model';
import { UserService } from '@/user/user.service';
import { Laundromat } from '@/laundromat/entities/laundromat.model';

@Injectable()
export class LaundryService {
  constructor(
    @InjectModel(Laundry)
    private laundryModel: typeof Laundry,
    private readonly userService: UserService
  ) { }

  async create(createLaundryDto: CreateLaundryDto): Promise<Laundry | any> {
    /*
    * todo:
    * verify that this laundry is not created using created date as one of the keys
    * add logic to find or create.
    */
    const user = await this.userService.findOne(createLaundryDto.admin_id).then(data => { return data; });
    if (!user) return {
      status: 400,
      message: `user ${createLaundryDto.owner_id} does not exist for laundry.`
    };

    const old_Laundry = await this.laundryModel.findOne({
      where: {
        created_at: createLaundryDto.created_at,
        owner_id: createLaundryDto.owner_id
      }
    }).then(data => data?.toJSON());

    if (old_Laundry) {
      return { data: old_Laundry, status: 409 };
    }

    return { data: await this.laundryModel.create({ ...createLaundryDto }).then(data => data?.toJSON()), status: 200 };
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