/** Device Chart type */
export type Tasks = {
  label: string;
  value: number;
  color: string;
};

export type Costs = {
  label: string;
  value: number;
  color: string;
};

export type WorkLoad = {
  label: string;
  value: number;
  color: string;
};

export type Time = {
  label: string;
  value: number;
};

export class OverlayInputConfig {
  /** title of OverlayInputConfig */
  public title: string;

  constructor(title: string) {
    this.title = title;
  }
}
