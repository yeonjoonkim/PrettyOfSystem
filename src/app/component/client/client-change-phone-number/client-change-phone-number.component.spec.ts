import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientChangePhoneNumberComponent } from './client-change-phone-number.component';

describe('ClientChangePhoneNumberComponent', () => {
  let component: ClientChangePhoneNumberComponent;
  let fixture: ComponentFixture<ClientChangePhoneNumberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientChangePhoneNumberComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientChangePhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
