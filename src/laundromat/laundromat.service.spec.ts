import { Test, TestingModule } from '@nestjs/testing';
import { LaundromatService } from './laundromat.service';

describe('LaundromatService', () => {
  let service: LaundromatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaundromatService],
    }).compile();

    service = module.get<LaundromatService>(LaundromatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
