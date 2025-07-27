import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaundrymatService } from './laundrymat.service';
import { CreateLaundrymatDto } from './dto/create-laundrymat.dto';
import { UpdateLaundrymatDto } from './dto/update-laundrymat.dto';

@Controller('laundrymat')
export class LaundrymatController {
  constructor(private readonly laundrymatService: LaundrymatService) {}

  @Post()
  create(@Body() createLaundrymatDto: CreateLaundrymatDto) {
    return this.laundrymatService.create(createLaundrymatDto);
  }

  @Get()
  findAll() {
    return this.laundrymatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laundrymatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLaundrymatDto: UpdateLaundrymatDto) {
    return this.laundrymatService.update(+id, updateLaundrymatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laundrymatService.remove(+id);
  }
}
