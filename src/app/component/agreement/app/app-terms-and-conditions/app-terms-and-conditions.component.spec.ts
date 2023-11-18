import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppTermsAndConditionsComponent } from './app-terms-and-conditions.component';

describe('AppTermsAndConditionsComponent', () => {
  let component: AppTermsAndConditionsComponent;
  let fixture: ComponentFixture<AppTermsAndConditionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppTermsAndConditionsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
