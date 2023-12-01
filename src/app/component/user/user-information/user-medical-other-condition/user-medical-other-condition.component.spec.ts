import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserMedicalOtherConditionComponent } from './user-medical-other-condition.component';

describe('UserMedicalOtherConditionComponent', () => {
  let component: UserMedicalOtherConditionComponent;
  let fixture: ComponentFixture<UserMedicalOtherConditionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMedicalOtherConditionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserMedicalOtherConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
