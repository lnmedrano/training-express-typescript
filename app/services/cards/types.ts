export interface Info {
  patch: string;
  classes: string[];
  sets: string[];
  types: string[];
  factions: string[];
  qualities: string[];
  races: string[];
  locales: string[];
}

export interface Card {
  cardId: string;
  name: string;
  cardSet: string;
  type: string;
  faction: string;
  rarity: string;
  cost: number;
  attack: number;
  health: number;
  text: string;
  flavor: string;
  artist: string;
  collectible: boolean;
  elite: boolean;
  race: string;
  img: string;
  imgGold: string;
  locale: string;
}
