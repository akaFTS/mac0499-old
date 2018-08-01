export class Professor {
  public posX: string;
  public posY: string;
  public level: number;
  public enabled: boolean;

  constructor(
    public code: string,
    public name: string,
    public defX: number = 0,
    public defY: number = 0
  ) {}
}
