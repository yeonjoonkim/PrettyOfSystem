import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SelectSpecialistTimePage } from './select-specialist-time.page';

describe('SelectSpecialistTimePage', () => {
  let component: SelectSpecialistTimePage;
  let fixture: ComponentFixture<SelectSpecialistTimePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(SelectSpecialistTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
