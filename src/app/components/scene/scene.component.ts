import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scene',
  template: `
  <h3 >{{scene.title}}</h3>
  <app-character-label *ngFor="let character of scene.characters" [character]="play.characters[character]"></app-character-label>
  <p>{{scene.description}}</p>

  <p class="p6">Questions:</p>

  <ul *ngIf="scene.questions.length > 0">
      <li *ngFor="let question of scene.questions">{{question}}</li>
  </ul>            

  `,
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @Input() scene:any = {};
  @Input() play:any = {};

  constructor() { }

  ngOnInit() {
  }

}
