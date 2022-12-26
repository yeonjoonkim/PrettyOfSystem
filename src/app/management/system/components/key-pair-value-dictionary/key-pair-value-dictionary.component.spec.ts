import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyPairValueDictionaryComponent } from './key-pair-value-dictionary.component';

describe('KeyPairValueDictionaryComponent', () => {
  let component: KeyPairValueDictionaryComponent;
  let fixture: ComponentFixture<KeyPairValueDictionaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyPairValueDictionaryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyPairValueDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
