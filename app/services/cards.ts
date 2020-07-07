import axios from 'axios';
import config from '../../config';
import { HEADERS } from '../constants';

const baseUrl = config.common.hearthstone.apiUrl as string;
const rapidApiKey = config.common.rapidApi.key as string;
const rapidApiHost = config.common.rapidApi.host as string;

const client = axios.create({
  baseURL: baseUrl,
  responseType: 'json',
  headers: {
    [HEADERS.CONTENT_TYPE]: 'application/octet-stream',
    [HEADERS.RAPID_API_KEY]: rapidApiKey,
    [HEADERS.RAPID_API_HOST]: rapidApiHost,
    useQueryString: true
  }
});

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

export function getInfo(): Promise<Info> {
  return client.get('info');
}

export function getAllCards(): Promise<Card[]> {
  return client.get('cards');
}

export default {
  getAllCards,
  getInfo
};
