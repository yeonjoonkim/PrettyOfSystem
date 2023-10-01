import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingLanguageDropDownListComponent } from './booking-language-dropdown-list.component';

describe('PairTextValueDropwonListComponent', () => {
  let component: BookingLanguageDropDownListComponent;
  let fixture: ComponentFixture<BookingLanguageDropDownListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BookingLanguageDropDownListComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingLanguageDropDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
