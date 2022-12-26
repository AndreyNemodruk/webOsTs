import { ChannelData, FilmData } from '../types/types';

export interface IList {
  cards: IChannelCard[] | IFilmCard[];
  listElId: string;
  containerId: string;
  activeCard: number;
  listEl: HTMLElement;
  left: number;
  title?: string;
  itemWidth: number;
  goRight: () => void;
  goLeft: () => void;
}

export interface IListChannelData {
  containerId: string;
  title?: string | undefined;
  listElId: string;
  dataItems: ChannelData[];
  type: 'channel';
  itemWidth: number;
}

export interface IListFilmData {
  containerId: string;
  title?: string | undefined;
  listElId: string;
  dataItems: FilmData[];
  type: 'film';
  itemWidth: number;
}

export interface ICard {
  readonly itemId: number;
  readonly idx: number;
  readonly itemContainerId: string;
  cardElement: HTMLElement;

  generateItem: () => void;
  renderItem: () => void;
  addSelected: () => void;
  removeSelected: () => void;
}

export interface IChannelCard extends ICard {
  channelData: ChannelData;
}

export interface IFilmCard extends ICard {
  filmData: FilmData;
}
