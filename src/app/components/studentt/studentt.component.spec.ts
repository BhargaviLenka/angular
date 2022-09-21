import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttComponent } from './studentt.component';

describe('StudenttComponent', () => {
  let component: StudenttComponent;
  let fixture: ComponentFixture<StudenttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
