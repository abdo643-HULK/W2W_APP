import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyPlusComponent } from './disney-plus.component';

describe('DisneyPlusComponent', () => {
  let component: DisneyPlusComponent;
  let fixture: ComponentFixture<DisneyPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisneyPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
