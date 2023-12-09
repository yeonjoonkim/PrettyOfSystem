import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MassageBodyBackSelectorComponent } from './massage-body-back-selector.component';

describe('MassageBodyBackSelectorComponent', () => {
  let component: MassageBodyBackSelectorComponent;
  let fixture: ComponentFixture<MassageBodyBackSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageBodyBackSelectorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MassageBodyBackSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
