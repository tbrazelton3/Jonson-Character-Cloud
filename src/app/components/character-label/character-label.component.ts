import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-label',
  template: `
  <clr-signpost>
  <span class="label" clrSignpostTrigger >{{character.name}}</span>
  <clr-signpost-content *clrIfOpen>
      <h4>{{character.name}}</h4>
      <p>{{character.description}}</p>
  </clr-signpost-content>
</clr-signpost>

  `,
  styleUrls: ['./character-label.component.scss']
})
export class CharacterLabelComponent implements OnInit {

  constructor() { }

  @Input() character: any = {};

  ngOnInit() {
  }

}
