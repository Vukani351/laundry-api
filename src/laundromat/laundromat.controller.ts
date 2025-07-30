import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaundromatService } from './laundromat.service';
import { CreateLaundromatDto } from './dto/create-laundromat.dto';
import { UpdateLaundromatDto } from './dto/update-laundromat.dto';

@Controller('laundromat')
export class LaundromatController {
  constructor(private readonly laundromatService: LaundromatService) {}

  @Post()
  create(@Body() createLaundromatDto: CreateLaundromatDto) {
    return this.laundromatService.create(createLaundromatDto);
  }

  @Get()
  findAll() {
    return this.laundromatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laundromatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLaundromatDto: UpdateLaundromatDto) {
    return this.laundromatService.update(+id, updateLaundromatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laundromatService.remove(+id);
  }
}
