import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyXComponent } from './sky-x.component';

describe('SkyXComponent', () => {
  let component: SkyXComponent;
  let fixture: ComponentFixture<SkyXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
