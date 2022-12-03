export interface Pockemon {
  id: number;
  name: {
    english: string;
  }
  type: string[];
  base: {
    HP: number,
    Attack: number,
    Defense: number,
    'Sp. Attack': number,
    'Sp. Defense': number,
    Speed: number
  }
}