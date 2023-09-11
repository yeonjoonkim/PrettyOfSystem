import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PairTextValueDropwonListComponent } from './name-pair-value-dropdown-list.component';

describe('PairTextValueDropwonListComponent', () => {
  let component: PairTextValueDropwonListComponent;
  let fixture: ComponentFixture<PairTextValueDropwonListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PairTextValueDropwonListComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PairTextValueDropwonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
