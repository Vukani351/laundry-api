import { Test, TestingModule } from '@nestjs/testing';
import { LaundrymatController } from './laundrymat.controller';
import { LaundrymatService } from './laundrymat.service';

describe('LaundrymatController', () => {
  let controller: LaundrymatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaundrymatController],
      providers: [LaundrymatService],
    }).compile();

    controller = module.get<LaundrymatController>(LaundrymatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
