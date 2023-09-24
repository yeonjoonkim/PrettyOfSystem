import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NameValuePairSingleDropdownSelectionComponent } from './name-value-pair-single-dropdown-selection.component';

describe('KeyPairValueDropdownSingleSelectionComponent', () => {
  let component: NameValuePairSingleDropdownSelectionComponent;
  let fixture: ComponentFixture<NameValuePairSingleDropdownSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NameValuePairSingleDropdownSelectionComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NameValuePairSingleDropdownSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
