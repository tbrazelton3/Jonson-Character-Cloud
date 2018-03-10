import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../services/play.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() section: Section = undefined;

  constructor() { }

  ngOnInit() {
  }

}
