import { Injectable } from '@angular/core';
const OUTLINE = require('raw-loader!../../plays/bartholomew-fair/outline.md');
import { PLAY } from '../../plays/bartholomew-fair/index';
import { Node, Link } from '../d3';


export interface Section {
  title: string;
  level: number;
  content: string;
  id: string;
  characters: Character[]
}

export interface Character {
  name: string;
  description: string;
  id: string;
  words: number;
}

@Injectable()
export class PlayService {

  sections: Section[] = [];
  characters: Character[] = [];
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    this.sections = this.parseMarkdown(OUTLINE);
    this.buildGraph();
  }

  parseMarkdown(raw): Section[] {
    const sections: Section[] = [];

    let current: Section = undefined;
    raw.split('\n').forEach(line => {
      line = line.trim();
      if (line.startsWith('#')) {
        let level = 0;
        let title = '';
        let start = '# ';
        for (let i = 1; i < 6; i++) {
          if (line.startsWith(start)) {
            level = i;
            title = line.split(start)[1].trim();
          }
          start = '#' + start;
        }
        current = {
          title: title,
          level: level,
          content: '',
          characters: [],
          id: title.toLowerCase().split(' ').join('').split('.').join('-')
        }
        sections.push(current);
      } else if (line.startsWith('Characters: ')) {
        line = line.split('Characters: ')[1];
        const characters = line.split(', ');
        characters.forEach(character => {
          const id = character.toLowerCase().split(' ').join('').split('-').join('')
          if (PLAY.characters[id]) {
            PLAY.characters[id].id = id;
            current.characters.push(PLAY.characters[id]);
          } else {
            console.log(id)
          }
        });

      } else if (current) {
        current.content += line + '\n';
      }
    });
    return sections;
  }

  buildGraph() {
    const nodeMap: any = {};
    for (const prop in PLAY.characters) {
      if (PLAY.characters[prop]) {
        const character = PLAY.characters[prop];
        this.characters.push(character);
        const node: Node = new Node(character.name);
        this.nodes.push(node);
        node.weight = (character.words / PLAY.wordCount) * 100;
        nodeMap[prop] = node;
      }
    }
    this.sections.forEach(section => {
        const people = section.characters;

        for (let i = 0; i < people.length - 1; i++) {
          for (let j = i + 1; j < people.length; j++) {
            const n1 = nodeMap[people[i].id];
            const n2 = nodeMap[people[j].id];
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

  }

}
