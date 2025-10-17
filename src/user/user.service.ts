import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.model';
import { JwtService } from '@nestjs/jwt';
import { Op } from 'sequelize';
import { RoleId } from '@/role/role.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private jwtService: JwtService
  ) { }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async create(createUserDto: CreateUserDto): Promise<string> {
    /*
    * todo:
    * Verify the number username
    * */
    const user = await this.userModel.findOne({
      where: {
        username: createUserDto.firstName/* + ' ' + createUserDto.lastName */,
        phone: createUserDto.phone,
      }
    }).then(user => user?.toJSON());

    if (user) {
      throw new UnauthorizedException('User already exists.');
    } else if (!createUserDto.firstName || !createUserDto.phone) {
      throw new UnauthorizedException('User email or number is missing.');
    }
    const newUserDetails = {
      username: createUserDto.firstName/* + ' ' + createUserDto.lastName */,
      phone: createUserDto.phone,
      role_id: createUserDto!.role_id,
      address: createUserDto?.address
    };

    const newUser = (await this.userModel.create({ ...newUserDetails })).toJSON();
    return await this.jwtService.signAsync({ sub: newUser.id, username: newUser.username });
  }

  async login(firstname: string, secondname: string, phone: number): Promise<any> {
    const user = await this.userModel.findOne({
      where: {
        username: {
          [Op.like]: `%${firstname}%`
        },
        phone: phone
      }
    }).then(user => user?.toJSON());
    if (!user) {
      throw new Error('User not found');
    }

    return {
      access_token: await this.jwtService.sign({
        id: user.id, firstName: user.username, role_id: user.role_id, address: user.address, phone: user.phone
      })
    };
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id, {
      include: [{ all: true }],
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user.toJSON();
  }

  async findOneByPhone(phone: number): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        phone: phone
      }
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user.toJSON();
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