import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MassageDifficultChangePositionComponent } from './massage-difficult-change-position.component';

describe('MassageDiffcultChangePositionComponent', () => {
  let component: MassageDifficultChangePositionComponent;
  let fixture: ComponentFixture<MassageDifficultChangePositionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MassageDifficultChangePositionComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MassageDifficultChangePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
