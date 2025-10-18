import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LaundryService } from './laundry.service';
import { CreateLaundryDto } from './dto/create-laundry.dto';
import { UpdateLaundryDto } from './dto/update-laundry.dto';

@Controller('laundry')
export class LaundryController {
  constructor(
    private readonly laundryService: LaundryService,
  ) { }

  @Post('new')
  async create(@Body() createLaundryDto: CreateLaundryDto) {
    try {
      return this.laundryService.create({ ...createLaundryDto });
    } catch (error) {
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

  @Get('laundromat/:laundromatId')
  findByLaundromatId(@Param('laundromatId') id: string) {
    return this.laundryService.findByLaundromatId(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateLaundryDto: UpdateLaundryDto) {
    return this.laundryService.update(+id, updateLaundryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laundryService.remove(+id);
  }
}
