export type CharacterModel = {
  name: string;
  type: CharacterType;
  level: number;
  force: number;
};

export type CharacterType = 'Heroe' | 'Boss' | 'Enemy' | 'Ally';
