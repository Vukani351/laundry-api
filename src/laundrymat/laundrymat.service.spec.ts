import { Test, TestingModule } from '@nestjs/testing';
import { LaundrymatService } from './laundrymat.service';

describe('LaundrymatService', () => {
  let service: LaundrymatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaundrymatService],
    }).compile();

    service = module.get<LaundrymatService>(LaundrymatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
