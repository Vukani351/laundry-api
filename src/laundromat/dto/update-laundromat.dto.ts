import { PartialType } from '@nestjs/mapped-types';
import { CreateLaundromatDto } from './create-laundromat.dto';

export class UpdateLaundromatDto extends PartialType(CreateLaundromatDto) {}
