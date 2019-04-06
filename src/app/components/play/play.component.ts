import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PLAY } from '../../../plays/bartholomew-fair';
import { Node, Link } from '../../d3';
import { PlayService, Section } from 'app/services/play.service';
import { formatNumber } from '@angular/common';

const OUTLINE = require('raw-loader!../../../plays/bartholomew-fair/outline.md');


interface Nav {
  section: Section;
  children: Section[];
}
@Component({
  selector: 'app-play',
  templateUrl: 'play.component.html',
  styleUrls: ['./play.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PlayComponent implements OnInit {
  @HostBinding('class.content-container') contentArea = true;
  nodes: Node[] = [];
  links: Link[] = [];
  play = PLAY;
  outline = OUTLINE;
  sections: Section[] = [];
  nav: Nav[] = [];
  wordCounts = [];
  wordPercents = []

  colorScheme = {
    domain: ['#AAAAAA']
  };

  formatAxis(value) {
    return value + '%';
  }

  formatValue() {
    return '';
  }


  constructor(private router: Router, public playService: PlayService) {
    this.sections = playService.sections;

    this.wordPercents = this.playService.characters.map(character => {
      return Object.assign({}, character, {value: character.wordPercent});
    });

    this.wordCounts = this.playService.characters.map(character => {
      return {name: character.name, value: character.words};
    }).sort((a, b) => {
      return b.value - a.value;
    });

    let currentNav = undefined;
    this.sections.forEach(section => {
      if (section.level === 2) {
        currentNav = { section: section, children: [] }
        this.nav.push(currentNav);
      } else if (section.level === 3 && currentNav) {
        currentNav.children.push(section);
      }
    });

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
    this.buildGraph();



  }
  buildGraph() {
    const nodeMap: any = {};
    for (const prop in this.play.characters) {
      if (this.play.characters[prop]) {
        const node: Node = new Node(prop);
        this.nodes.push(node);
        nodeMap[prop] = node;
      }
    }
    // this.play.acts.forEach(act => {
    //   act.scenes.forEach(scene => {
    //     const people = scene.characters;

    //     for (let i = 0; i < people.length - 1; i++) {
    //       for (let j = i + 1; j < people.length; j++) {
    //         const n1 = nodeMap[people[i]];
    //         const n2 = nodeMap[people[j]];
    //         const id = n1.id + '_' + n2.id;
    //         const idReverse = n2.id + '_' + n1.id;
    //         n1.linkCount = n2.linkCount + 1;
    //         n2.linkCount = n2.linkCount + 1;
    //         const existing = this.links.find(link => (link.title === id) || (link.title === idReverse));
    //         if (existing) {
    //           existing.count++;
    //         } else {
    //           this.links.push(new Link(n1.id, n2.id, id));
    //         }
    //       }
    //     }

    //   });

    // });

  }

  ngOnInit() {
  }

}
