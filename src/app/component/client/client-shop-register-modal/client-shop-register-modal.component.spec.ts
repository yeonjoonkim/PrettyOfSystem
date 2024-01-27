import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientShopRegisterModalComponent } from './client-shop-register-modal.component';

describe('ClientShopRegisterModalComponent', () => {
  let component: ClientShopRegisterModalComponent;
  let fixture: ComponentFixture<ClientShopRegisterModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientShopRegisterModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientShopRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
