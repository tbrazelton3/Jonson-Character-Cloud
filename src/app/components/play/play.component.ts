import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PLAY } from '../../../plays/bartholomew-fair';
import { Node, Link } from '../../d3';


@Component({
  selector: 'app-play',
  templateUrl: 'play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  @HostBinding('class.content-container') contentArea = true;
  nodes: Node[] = [];
  links: Link[] = [];
  play = PLAY;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
    this.buildGraph();



  }
  buildGraph() {
    const nodeMap: any = {};
    for (let prop in this.play.characters) {
      if (this.play.characters[prop]) {
        const node: Node = new Node(prop);
        this.nodes.push(node);
        nodeMap[prop] = node;
      }
    }
    this.play.acts.forEach(act => {
      act.scenes.forEach(scene => {
        const people = scene.characters;

        for (var i = 0; i < people.length - 1; i++) {
          for (var j = i + 1; j < people.length; j++) {
            const n1 = nodeMap[people[i]];
            const n2 = nodeMap[people[j]];
            const id = n1.id + '_' + n2.id;
            const idReverse = n2.id + '_' + n1.id;
            n1.linkCount = n2.linkCount + 1;
            n2.linkCount = n2.linkCount + 1;
            const existing = this.links.find(link => (link.title === id) || (link.title === idReverse));
            if (existing) {
              existing.count++;
            } else {
              this.links.push(new Link(n1.id, n2.id, id));
            }
          }
        }

      });

    });

  }

  ngOnInit() {
  }

}
