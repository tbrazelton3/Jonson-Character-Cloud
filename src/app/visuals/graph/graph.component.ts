import {
  Component, Input, Output, ChangeDetectorRef,
  EventEmitter, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit
} from '@angular/core';
import { D3Service, ForceDirectedGraph } from '../../d3';
import { Link, Node } from '../../d3/models';

@Component({
  selector: 'graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg #svg [attr.width]="'100%'" [attr.height]="400" (click)="reset()">
      <g [zoomableOf]="svg">
        <g [linkVisual]="link" *ngFor="let link of links"></g>
        <g [nodeVisual]="node" (select)="onSelect($event)" *ngFor="let node of nodes"
            [draggableNode]="node" [draggableInGraph]="graph"></g>
      </g>
    </svg>
  `,
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes: Node[];
  @Input('links') links: Link[];

  public selected: Node;
  @Output() selectedChange = new EventEmitter<Node>();
  public related: any = {};
  @Output() relatedChange = new EventEmitter<any>();


  graph: ForceDirectedGraph;
  _options: { width, height } = { width: '100%', height: '400' };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }
  select(name) {
    const found = this.nodes.find(value => value.id === name);
    if (found) {
      this.onSelect(found);
    }
  }
  reset() {
    this.nodes.forEach(n => {
      n.selected = false;
      n.related = false;
    });
    this.selected = undefined;
    this.related = {};
  }
  onSelect(node) {
    this.reset();

    const relatedMap = {};
    this.links.forEach(link => {
      if (link.source === node) {
        link.target.related = true;
        relatedMap[link.target.id] = true;
      }
      if (link.target === node) {
        link.source.related = true;
        relatedMap[link.source.id] = true;
      }
    });
    const tmp = this.links.sort((a, b) => {
      const aSelected = a.source.selected || a.target.selected;
      const bSelected = b.source.selected || b.target.selected;

      const aRelated = a.source.related || a.target.related;
      const bRelated = b.source.related || b.target.related;
      if (aSelected) {
        return 1;
      }
      if (bSelected) {
        return -1;
      }

      if (aRelated && !bRelated) {
        return 1;
      }
      if (!aRelated && !bRelated) {
        return -1;
      }
      return 0;

    });
    this.links = [];
    this.links = tmp;
    console.log(tmp);

    node.selected = true;
    this.selectedChange.emit(node);
    this.relatedChange.emit(relatedMap);
    this.related = relatedMap;

    this.selected = node;

  }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
