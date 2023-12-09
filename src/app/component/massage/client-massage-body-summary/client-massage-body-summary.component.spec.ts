import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientMassageBodySummaryComponent } from './client-massage-body-summary.component';

describe('ClientMassageBodySummaryComponent', () => {
  let component: ClientMassageBodySummaryComponent;
  let fixture: ComponentFixture<ClientMassageBodySummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMassageBodySummaryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientMassageBodySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
