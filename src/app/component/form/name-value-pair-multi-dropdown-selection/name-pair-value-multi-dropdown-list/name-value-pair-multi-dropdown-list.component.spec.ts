import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NameValuePairMultiDropdownlistComponent } from './name-value-pair-multi-dropdown-list.component';

describe('PairTextValueDropwonListComponent', () => {
  let component: NameValuePairMultiDropdownlistComponent;
  let fixture: ComponentFixture<NameValuePairMultiDropdownlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NameValuePairMultiDropdownlistComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NameValuePairMultiDropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
