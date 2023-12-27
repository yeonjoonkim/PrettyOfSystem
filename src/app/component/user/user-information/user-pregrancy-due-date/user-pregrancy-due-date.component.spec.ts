import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPregrancyDueDateComponent } from './user-pregrancy-due-date.component';

describe('UserPregrancyDueDateComponent', () => {
  let component: UserPregrancyDueDateComponent;
  let fixture: ComponentFixture<UserPregrancyDueDateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPregrancyDueDateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPregrancyDueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
