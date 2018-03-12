import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Node } from '../../../d3';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g (click)="onClick($event)" [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          class="node"
          [attr.fill]="color"
          cx="0"
          cy="0"
          [attr.r]="node.r*2">
      </svg:circle>
      <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.id}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
  @Output('select') select = new EventEmitter<Node>();

  onClick(event) {
    event.stopPropagation();
    this.select.emit(this.node);
  }
  get color() {
    if ( this.node.selected ) {
      return '#FF5500';
    } else if ( this.node.related ) {
      return '#0065AB';
    } else {
      return '#A6D8E7';
    }
    // return this.node.selected ? '#00ff00' : this.node.color;
  }
}
