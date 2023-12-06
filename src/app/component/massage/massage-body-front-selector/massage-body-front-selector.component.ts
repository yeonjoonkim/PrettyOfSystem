import { Component, OnInit } from '@angular/core';
import { MassageBodyService } from 'src/app/service/massage/massage-body/massage-body.service';

@Component({
  selector: 'massage-body-front-selector',
  templateUrl: './massage-body-front-selector.component.html',
  styleUrls: ['./massage-body-front-selector.component.scss'],
})
export class MassageBodyFrontSelectorComponent implements OnInit {
  constructor(public body: MassageBodyService) {}

  ngOnInit() {}
}
