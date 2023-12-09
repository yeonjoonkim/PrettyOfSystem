import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MassagePressureLevelSelectorComponent } from './massage-pressure-level-selector.component';

describe('MassagePressureLevelSelectorComponent', () => {
  let component: MassagePressureLevelSelectorComponent;
  let fixture: ComponentFixture<MassagePressureLevelSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MassagePressureLevelSelectorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MassagePressureLevelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
