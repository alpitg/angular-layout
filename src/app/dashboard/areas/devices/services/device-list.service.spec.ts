import { TestBed } from '@angular/core/testing';

import { DeviceListService } from './device-list.service';

describe('DeviceListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceListService = TestBed.get(DeviceListService);
    expect(service).toBeTruthy();
  });
});
