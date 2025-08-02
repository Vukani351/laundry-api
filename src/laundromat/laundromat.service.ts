import { Injectable } from '@nestjs/common';
import { CreateLaundromatDto } from './dto/create-laundromat.dto';
import { UpdateLaundromatDto } from './dto/update-laundromat.dto';
import { Laundromat } from './entities/laundromat.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class LaundromatService {
  constructor(
    @InjectModel(Laundromat)
    private laundromatModel: typeof Laundromat,
  ) { }

  findAll() {
    return `This action returns all laundromat`;
  }

  async create(createLaundromatDto: CreateLaundromatDto) {
    try {
      const laundromat = await this.laundromatModel.findOne({
        where: {
          user_id: createLaundromatDto.user_id,
          title: createLaundromatDto.title,
        }
      });

      if (laundromat) {
        return { status: 401, message: "Laundromat already exists", laundromat: laundromat?.toJSON() };
      }
    } catch (error) {
      return 'This action for a new laundromat failed';
    }

    const laundromat = await this.laundromatModel.create({ ...createLaundromatDto }).then(i => i.toJSON());
    return {
      stastus: 200,
      laundromat: laundromat
    };
  }

  async findOne(id: number) {
    try {
      const laundromat = await this.laundromatModel.findByPk(id);
      return { status: 200, laundromat: laundromat?.toJSON() };
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateLaundromatDto: UpdateLaundromatDto) {
    try {
      const laundromat = await this.laundromatModel.findByPk(id);
      if (!laundromat) {
        return { status: 401, message: "Laundromat does not exists." };
      }

      await laundromat.update(updateLaundromatDto);
      return { status: 200, laundromat: laundromat?.toJSON() };
    } catch (error) {
      return error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} laundromat`;
  }
}
