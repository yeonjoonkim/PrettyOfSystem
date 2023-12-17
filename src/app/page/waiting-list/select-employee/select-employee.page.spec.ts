import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SelectEmployeePage } from './select-employee.page';

describe('SelectEmployeePage', () => {
  let component: SelectEmployeePage;
  let fixture: ComponentFixture<SelectEmployeePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(SelectEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
