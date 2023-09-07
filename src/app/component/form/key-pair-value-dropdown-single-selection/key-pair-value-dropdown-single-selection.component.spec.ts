import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyPairValueDropdownSingleSelectionComponent } from './key-pair-value-dropdown-single-selection.component';

describe('KeyPairValueDropdownSingleSelectionComponent', () => {
  let component: KeyPairValueDropdownSingleSelectionComponent;
  let fixture: ComponentFixture<KeyPairValueDropdownSingleSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyPairValueDropdownSingleSelectionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyPairValueDropdownSingleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
