import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaYearComponent } from './area-year.component';

describe('AreaYearComponent', () => {
  let component: AreaYearComponent;
  let fixture: ComponentFixture<AreaYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
