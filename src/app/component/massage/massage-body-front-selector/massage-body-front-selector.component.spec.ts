import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MassageBodyFrontSelectorComponent } from './massage-body-front-selector.component';

describe('MassageBodyFrontSelectorComponent', () => {
  let component: MassageBodyFrontSelectorComponent;
  let fixture: ComponentFixture<MassageBodyFrontSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageBodyFrontSelectorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MassageBodyFrontSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
