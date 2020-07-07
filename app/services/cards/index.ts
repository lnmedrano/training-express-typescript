import axios from 'axios';
import config from '../../../config';
import { HEADERS } from '../../constants';
import { Info, Card } from './types';

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
