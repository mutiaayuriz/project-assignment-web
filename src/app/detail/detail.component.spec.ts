import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DetailComponent } from './detail.component';
import { ListService } from '../service/api/list.service';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let mockData = [
    {
      flags: {
        png: 'https://flagcdn.com/w320/gs.png',
        svg: 'https://flagcdn.com/gs.svg',
        alt: '',
      },
      name: {
        common: 'South Georgia',
        official: 'South Georgia and the South Sandwich Islands',
        nativeName: {
          eng: {
            official: 'South Georgia and the South Sandwich Islands',
            common: 'South Georgia',
          },
        },
      },
      idd: {
        root: '+5',
        suffixes: ['00'],
      },
      capital: ['King Edward Point'],
      region: 'Antarctic',
      languages: {
        eng: 'English',
      },
    },
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ListService,
        provideAnimations(),
      ],
      imports: [DetailComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    component.dataSelected = mockData[0].name.common;
    fixture.detectChanges();
  });

  it('should detail component', () => {
    expect(component).toBeTruthy();
  });

});
