import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  @Input() code: any;
  @Input() rules: any;

  constructor() { }

}
