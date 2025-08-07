import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaundryService } from './laundry.service';
import { CreateLaundryDto } from './dto/create-laundry.dto';
import { UpdateLaundryDto } from './dto/update-laundry.dto';
import { UserService } from '@/user/user.service';

@Controller('laundry')
export class LaundryController {
  constructor(
    private readonly laundryService: LaundryService,
    private readonly userService: UserService
  ) { }

  @Post('new')
  async create(@Body() createLaundryDto: CreateLaundryDto) {
    try {
      /*
      * todo:
      * check if there is a admin_id for the one we have,
      * add logic to find or create.
      * fix the dto to take owner id not admin id
      * remove admin id from database
      */
      const user = await this.userService.findOne(createLaundryDto.admin_id).then(data => { return data; });
      if (!user) return;
      return this.laundryService.create({ ...createLaundryDto });
    } catch (error) {
      //  show this error correct 
      console.log("Issue with creating laundry item: \n", error);
      return { status: 500, error: error };
    }
  }

  @Get()
  findAll() {
    return this.laundryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laundryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLaundryDto: UpdateLaundryDto) {
    return this.laundryService.update(+id, updateLaundryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laundryService.remove(+id);
  }
}
