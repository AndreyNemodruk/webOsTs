import { ICard } from '../../interfaces/interfaces';
import { FilmData, ItemFilmCard } from '../../types/types';
import './FilmCard.scss';

export class FilmCard implements ICard {
  _itemId: number;
  _idx: number;
  _itemContainerId: string;
  _filmtData: FilmData;
  cardElement: HTMLElement;
  constructor(item: ItemFilmCard) {
    this._itemId = item.filmData.id;
    this._idx = item.idx;
    this._itemContainerId = item.itemContainerId;
    this._filmtData = item.filmData;
    this.cardElement = document.createElement('div');
  }
  generateItem = () => {
    this.cardElement.classList.add('film-card');
    this.cardElement.setAttribute('id', this._itemId.toString());
    const inner = `<img src="${this.filmData.image.small}"/>`;
    this.cardElement.style.backgroundImage = `url(${this.filmData.image.small})`;
  };
  renderItem = () => {
    this.generateItem();
    const container = document.getElementById(this._itemContainerId);
    container?.append(this.cardElement);
  };
  addSelected = () => {
    this.cardElement.classList.add('film-card_active');
  };

  removeSelected = () => {
    this.cardElement.classList.remove('film-card_active');
  };

  get filmData() {
    return this._filmtData;
  }

  get itemId() {
    return this._itemId;
  }
  get idx() {
    return this._idx;
  }

  get itemContainerId() {
    return this._itemContainerId;
  }
}
