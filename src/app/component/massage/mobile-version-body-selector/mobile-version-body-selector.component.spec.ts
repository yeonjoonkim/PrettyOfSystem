import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileVersionBodySelectorComponent } from './mobile-version-body-selector.component';

describe('MobileVersionBodySelectorComponent', () => {
  let component: MobileVersionBodySelectorComponent;
  let fixture: ComponentFixture<MobileVersionBodySelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVersionBodySelectorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileVersionBodySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
