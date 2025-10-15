import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('create')
  create(@Body() createUserDto: CreateUserDto): Promise<string> {
    console.log("data: ", createUserDto);
    return this.userService.create(createUserDto);
  }

  @Get('all')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('login')
  login(
    @Body('phone') phone: number,
    @Body('firstname') firstname: string,
    @Body('lastname') lastname: string
  ): Promise<string | null> {
    return this.userService.login(firstname, lastname, phone);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(Number(id));
  }

  @Get('/phone/:phone')
  findOneByPhone(@Param('phone') phone: string): Promise<User | null> {
    return this.userService.findOneByPhone(Number(phone));
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(Number(id));
  }
}