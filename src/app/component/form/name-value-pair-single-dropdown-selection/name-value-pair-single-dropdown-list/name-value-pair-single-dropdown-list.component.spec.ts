import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NameValuePairSingleDropdownlistComponent } from './name-value-pair-single-dropdown-list.component';

describe('PairTextValueDropwonListComponent', () => {
  let component: NameValuePairSingleDropdownlistComponent;
  let fixture: ComponentFixture<NameValuePairSingleDropdownlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NameValuePairSingleDropdownlistComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NameValuePairSingleDropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
