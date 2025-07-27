import { PartialType } from '@nestjs/mapped-types';
import { CreateLaundrymatDto } from './create-laundrymat.dto';

export class UpdateLaundrymatDto extends PartialType(CreateLaundrymatDto) {}
