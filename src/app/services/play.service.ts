import { Injectable } from '@angular/core';
const OUTLINE = require('raw-loader!../../plays/bartholomew-fair/outline.md');
import { PLAY } from '../../plays/bartholomew-fair/index';

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
}

@Injectable()
export class PlayService {

  raw: string = OUTLINE;
  title: string;
  sections: Section[] = [];

  constructor() {
    let current: Section = undefined;
    this.raw.split('\n').forEach(line => {
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
        this.sections.push(current);
      } else if (line.startsWith('Characters: ')) {
        line = line.split('Characters: ')[1];
        const characters = line.split(', ');
        characters.forEach(character => {
          const id = character.toLowerCase().split(' ').join('').split('-').join('')
          if (PLAY.characters[id]) {
            current.characters.push(PLAY.characters[id]);
          } else {
            console.log(id)
          }
        });

      } else if (current) {
        current.content += line + '\n';
      }
    });

  }

}
