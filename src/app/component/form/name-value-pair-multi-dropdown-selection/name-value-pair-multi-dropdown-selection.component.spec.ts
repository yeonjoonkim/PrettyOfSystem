import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NameValuePairDropdownMultiSelectionComponent } from './name-value-pair-multi-dropdown-selection.component';

describe('KeyPairValueDropdownSingleSelectionComponent', () => {
  let component: NameValuePairDropdownMultiSelectionComponent;
  let fixture: ComponentFixture<NameValuePairDropdownMultiSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NameValuePairDropdownMultiSelectionComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NameValuePairDropdownMultiSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
