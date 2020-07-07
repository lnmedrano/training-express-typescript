import { NextFunction, Request, Response } from 'express';
import { AxiosResponse } from 'axios';
import HttpStatus from 'http-status-codes';
import { getAllCards as getAllCardsService, getInfo as getInfoService } from '../services/cards';
import { Card, Info } from '../services/cards/types';

export function getAllCards(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return getAllCardsService()
    .then((cards: AxiosResponse<Card[]>) => res.status(HttpStatus.OK).send(cards.data))
    .catch(next);
}

export function getInfo(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return getInfoService()
    .then((info: AxiosResponse<Info>) => res.status(HttpStatus.OK).send(info.data))
    .catch(next);
}
