import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ListComponent } from './list.component';
import { ListService } from '../service/api/list.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), ListService, provideAnimations()],
      imports: [ListComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should list component', () => {
    expect(component).toBeTruthy();
  });

   it('should render mat tab', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-tab-group')).toBeTruthy();
  });

  it('should display table tab 1 All Country', (() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  }));

  it('should display table after clicking second tab (Semua negara yang Kerjasama) and data still empty', (() => {
    const compiled = fixture.nativeElement;
    component.selectTab(1);
    component.totalData = 0;
    fixture.detectChanges();
    expect(compiled.querySelector('div')).toBeTruthy();
  }));
});
