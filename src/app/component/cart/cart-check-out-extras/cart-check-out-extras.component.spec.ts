import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartCheckOutExtrasComponent } from './cart-check-out-extras.component';

describe('CartCheckOutExtrasComponent', () => {
  let component: CartCheckOutExtrasComponent;
  let fixture: ComponentFixture<CartCheckOutExtrasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCheckOutExtrasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartCheckOutExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
