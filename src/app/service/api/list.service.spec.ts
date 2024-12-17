import { TestBed } from '@angular/core/testing';
import { ListService } from '../api/list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ListService]
  }));

  it('should be created', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service).toBeTruthy();
   });

   it('should have getAllData function', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service.getAllCountryList).toBeTruthy();
   });

   it('should have getDetailByName function', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service.getCountryByName('Indonesia')).toBeTruthy();
   });
});
