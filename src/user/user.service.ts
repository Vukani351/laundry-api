import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    /*
    * todo:
    * Verify the number username
    * */
    const user = await this.userModel.findOne({
      where: {
        lastName: createUserDto.lastName,
        phone: createUserDto.phone,
      }
    });

    if (user) {
      throw new UnauthorizedException('User already exists.');
    } else if (createUserDto.lastName || createUserDto.phone) {
      throw new UnauthorizedException('User email or number is missing.');
    }

    return this.userModel.create({ ...createUserDto });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async login(firstname: string, secondname: string, phone: number): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        username: firstname + ' ' + secondname,
        phone: phone
      }
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id, {
      include: [{ all: true }],
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    updateUserDto.username = updateUserDto.firstName + ' ' + updateUserDto.lastName;
    return user.update(updateUserDto);
  }

  async remove(id: number): Promise<void> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
  }
}