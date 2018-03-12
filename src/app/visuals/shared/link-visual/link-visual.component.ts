import { Component, Input } from '@angular/core';
import { Link } from '../../../d3';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        class="link"
        [attr.x1]="link.source.x"
        [attr.y1]="link.source.y"
        [attr.x2]="link.target.x"
        [attr.y2]="link.target.y"
        [attr.stroke-width]="link.count * 1.5"
        [attr.stroke]="color"
    ></svg:line>
  `,
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent {
  @Input('linkVisual') link: any;
  get color() {
    if ((<any>(this.link.source)).selected || (<any>(this.link.target)).selected) {
      return '#0065AB';
    }
    return 'rgb(222,237,250)';

  }
}
