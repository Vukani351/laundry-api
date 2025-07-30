import { Test, TestingModule } from '@nestjs/testing';
import { LaundromatController } from './laundromat.controller';
import { LaundromatService } from './laundromat.service';

describe('LaundromatController', () => {
  let controller: LaundromatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaundromatController],
      providers: [LaundromatService],
    }).compile();

    controller = module.get<LaundromatController>(LaundromatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
