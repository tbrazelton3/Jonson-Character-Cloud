import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  linkCount = 0;
  weight = 0;
  selected: boolean = false;
  related: boolean = false;

  constructor(id) {
    this.id = id;
  }

  normal = () => {
    return Math.sqrt(this.weight / APP_CONFIG.N);
  }

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize(): string {
    return (4 * this.normal() + 10) + 'px';
  }

  get color(): string {
    const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    return APP_CONFIG.SPECTRUM[index];
  }
}
