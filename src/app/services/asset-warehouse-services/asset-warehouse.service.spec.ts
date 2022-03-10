import { TestBed } from '@angular/core/testing';

import { AssetWarehouseService } from './asset-warehouse.service';

describe('AssetWarehouseService', () => {
  let service: AssetWarehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetWarehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
