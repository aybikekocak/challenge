import { TestBed } from '@angular/core/testing';

import { MissionManageService } from './mission-manage.service';

describe('MissionManageService', () => {
  let service: MissionManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
