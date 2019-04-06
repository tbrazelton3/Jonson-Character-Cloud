import { PlayService } from 'app/services/play.service';
import { Character } from './../../services/play.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-label',
  template: `
  <clr-signpost>
  <span class="label" clrSignpostTrigger >{{character.name}}</span>
  <clr-signpost-content *clrIfOpen>
      <h3 class="m-0">{{character.name}}</h3>
      <div class="container">
      <div class="clr-row">
        <p class="clr-col-5">{{character.description}}</p>
        <ngx-charts-pie-grid
          class="clr-col-6"
          [view]="[200,200]"
          [designatedTotal]="playService.wordCount"
          [results]="[{name: character.name, value: character.words}]">
        </ngx-charts-pie-grid>
      </div>
    </div>

  </clr-signpost-content>
</clr-signpost>

  `,
  styleUrls: ['./character-label.component.scss']
})
export class CharacterLabelComponent implements OnInit {

  constructor(public playService: PlayService) { }

  @Input() character: Character = {};

  ngOnInit() {
  }

}
