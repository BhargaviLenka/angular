import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuloginComponent } from './stulogin.component';

describe('StuloginComponent', () => {
  let component: StuloginComponent;
  let fixture: ComponentFixture<StuloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
