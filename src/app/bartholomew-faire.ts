import { Node, Link } from './d3';

//Characters
const littleWit = new Node('Littlewit');
const winTheFight = new Node('Win-the-Fight');
const winWife = new Node('Winwife');
const quarlous = new Node('Quarlous');
const wasp = new Node('Wasp');
const cokes = new Node('Cokes');
const grace = new Node('Grace');
const dameOverdo = new Node('Dame Overdo');
const solomon = new Node('Solomon');
const damePurecraft = new Node('Dame Purecraft');
const zealOfTheLand = new Node('Zeal-of-the-Land');
const busy = new Node('Busy');
const justiceOverdo = new Node('Justice Overdo');
const leatherhead = new Node('Leatherhead');
const trash = new Node('Trash');
const ursula = new Node('Ursula');
const mooncalf = new Node('Mooncalf');
const costermonger = new Node('Costermonger');
const knockem = new Node('Knockem');
const edgeworth = new Node('Edgeworth');
const nigtingale = new Node('Nightingale');
const corncutter = new Node('Corncutter');
const tinderboxMan = new Node('Tinderbox Man');
const passengers = new Node('Passengers');
const captWhit = new Node('Capt Whit');
const haggis = new Node('Haggis');
const bristle = new Node('Bristle');


export const characters: Node[] = [
  littleWit,
  winTheFight,
  winWife,
  quarlous,
  wasp,
  cokes,
  grace,
  dameOverdo,
  solomon,
  damePurecraft,
  zealOfTheLand,
  busy,
  justiceOverdo,
  leatherhead,
  trash,
  ursula,
  mooncalf,
  costermonger,
  knockem,
  edgeworth,
  nigtingale,
  corncutter,
  tinderboxMan,
  passengers,
  captWhit,
  haggis,
  bristle
];

const scenes = {
  '1_1': [littleWit, winTheFight],
  '1_2': [winTheFight, littleWit, winTheFight],
  '1_3': [quarlous, winWife, littleWit, winTheFight],
  '1_4': [wasp, winTheFight, littleWit, quarlous],
  '1_5': [wasp, cokes, grace, dameOverdo, littleWit, winTheFight, quarlous, winWife],
  '1_6': [solomon, littleWit, winTheFight, damePurecraft, zealOfTheLand, busy],
  '2_1': [justiceOverdo],
  '2_2': [leatherhead, trash, ursula, justiceOverdo, mooncalf, costermonger],
  '2_3': [knockem, ursula, justiceOverdo, mooncalf],
  '2_4': [edgeworth, nigtingale, corncutter, tinderboxMan, passengers,
    leatherhead, trash, justiceOverdo, mooncalf, ursula, knockem],
  '2_5': [winWife, quarlous, ursula, knockem],
  '2_6': [cokes, wasp, dameOverdo, grace, edgeworth, nigtingale],
  '3_1': [leatherhead, trash, captWhit, haggis, bristle],
  '3_2': [quarlous, winWife, busy, captWhit, knockem, littleWit, damePurecraft, ursula, mooncalf],
  '3_3': [justiceOverdo, winWife, quarlous],
  '3_4': [cokes, quarlous, wasp, leatherhead, trash],
  '3_5': [dameOverdo, justiceOverdo, cokes, edgeworth, nigtingale, wasp, quarlous, winWife, grace],
  '3_6': [littleWit, winTheFight, trash, knockem, busy, damePurecraft, leatherhead]
}
export const links: Link[] = [];


for (const scene in scenes) {
  if (scenes[scene]) {
    const people = scenes[scene];

    for (let i = 0; i < people.length - 1; i++) {
      for (let j = i + 1; j < people.length; j++) {
        const id = people[i].id + '_' + people[j].id;
        people[i].linkCount = people[i].linkCount + 1;
        people[j].linkCount = people[j].linkCount + 1;
        const existing = links.find(link => (link.title === id) || (link.title === people[j].id + '_' + people[i].id));
        if (existing) {
          existing.count++;
        } else {
          links.push(new Link(people[i], people[j], id));
        }
      }
    }
  }
}
