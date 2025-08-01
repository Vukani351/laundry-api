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

  async create(createLaundromatDto: CreateLaundromatDto) {
    console.log("createLaundromatDto: ", createLaundromatDto);
    try {
      const laundromat = await this.laundromatModel.findOne({
        where: {
          user_id: createLaundromatDto.user_id,
          title: createLaundromatDto.title,
        }
      });

      if (laundromat) {
        return { status: 401, message: "Laundromat already exists" };
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
