import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-ui-title',
  template: `
    <h2>
      {{ title }}
    </h2>
  `,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
