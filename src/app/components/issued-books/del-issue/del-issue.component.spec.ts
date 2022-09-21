import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelIssueComponent } from './del-issue.component';

describe('DelIssueComponent', () => {
  let component: DelIssueComponent;
  let fixture: ComponentFixture<DelIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
