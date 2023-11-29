import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WaitingListPage } from './waiting-list.page';

describe('WaitingListPage', () => {
  let component: WaitingListPage;
  let fixture: ComponentFixture<WaitingListPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(WaitingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
