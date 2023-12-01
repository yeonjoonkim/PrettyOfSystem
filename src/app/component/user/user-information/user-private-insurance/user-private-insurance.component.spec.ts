import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPrivateInsuranceComponent } from './user-private-insurance.component';

describe('UserPrivateInsuranceComponent', () => {
  let component: UserPrivateInsuranceComponent;
  let fixture: ComponentFixture<UserPrivateInsuranceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPrivateInsuranceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPrivateInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
