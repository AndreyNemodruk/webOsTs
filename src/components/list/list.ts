import { ChannelData, FilmData } from '../../types/types';
import { ChannelCard } from '../../items/ChannelCard/ChannelCard';
import { IChannelCard, IFilmCard, IList, IListChannelData, IListFilmData } from '../../interfaces/interfaces';
import './list.scss';
import { channel } from 'diagnostics_channel';
import { FilmCard } from '../../items/FilmCard/FilmCard';

export class List implements IList {
  cards: IChannelCard[] | IFilmCard[];
  listElId: string;
  containerId: string;
  activeCard: number;
  listEl: HTMLElement;
  left: number;
  title?: string;
  itemWidth: number;
  sliderIndexRight: number;
  sliderIndexLeft: number;
  constructor(config: IListFilmData);
  constructor(config: IListChannelData);
  constructor(config: IListChannelData | IListFilmData) {
    this.sliderIndexRight = 1;
    this.sliderIndexLeft = 0;
    this.listElId = config.listElId;
    this.containerId = config.containerId;
    this.activeCard = 0;
    this.listEl = document.createElement('div');
    this.left = 0;
    this.title = config.title;
    this.itemWidth = config.itemWidth;
    if (config.type === 'channel') {
      this.cards = config.dataItems.map(
        (i, idx) =>
          new ChannelCard({
            id: i.id,
            idx: idx,
            itemContainerId: this.listElId,
            channelData: i,
          })
      );
    }
    if (config.type === 'film') {
      this.cards = config.dataItems.map(
        (i, idx) =>
          new FilmCard({
            id: i.id,
            idx: idx,
            itemContainerId: this.listElId,
            filmData: i,
          })
      );
    }
  }
  init = () => {
    this.listEl.setAttribute('id', this.listElId);
    const container = document.getElementById(this.containerId);
    if (this.title) {
      const listTitle = document.createElement('p');
      listTitle.classList.add('list-title');
      listTitle.innerHTML = this.title;
      container?.appendChild(listTitle);
    }
    container?.appendChild(this.listEl);
    this.renderItems();
    this.cards[this.activeCard].addSelected();
  };
  private renderItems() {
    this.cards.forEach((i) => i.renderItem());
  }
  goRight = () => {
    let nextActiveCard = this.activeCard + 1;
    if (nextActiveCard > this.cards.length - 1) {
      nextActiveCard = 0;
    }
    this.listEl.style.transform = `translate(${this.left - this.itemWidth}px, 0)`;
    this.left = this.left - this.itemWidth;
    if (this.cards[this.activeCard - 1]) {
      this.cards[this.activeCard - 1].cardElement.style.transform = `translate(${
        this.cards.length * this.itemWidth * this.sliderIndexRight
      }px, 0)`;
    }

    this.cards[this.activeCard].removeSelected();
    this.cards[nextActiveCard].addSelected();
    this.activeCard = nextActiveCard;
    if (nextActiveCard === 0) {
      this.cards[this.cards.length - 1].cardElement.style.transform = `translate(${
        this.cards.length * this.itemWidth * this.sliderIndexRight
      }px, 0)`;
      this.sliderIndexRight += 1;
      this.sliderIndexLeft = this.sliderIndexRight - 1;
    }
  };
  goLeft = () => {
    let nextActiveCard = this.activeCard - 1;
    if (nextActiveCard < 0) {
      return;
      //nextActiveCard = this.cards.length - 1;
    }
    this.listEl.style.transform = `translate(${this.left + this.itemWidth}px, 0)`;
    this.left = this.left + this.itemWidth;

    this.cards[this.activeCard].removeSelected();
    this.cards[nextActiveCard].addSelected();
    if (this.activeCard === 0) {
      this.sliderIndexLeft = this.sliderIndexLeft - 1;
      this.sliderIndexRight = this.sliderIndexLeft + 1;
    }
    if (this.cards[nextActiveCard - 1]) {
      this.cards[nextActiveCard - 1].cardElement.style.transform = `translate(${
        this.cards.length * this.itemWidth * this.sliderIndexLeft
      }px, 0)`;
    }
    this.activeCard = nextActiveCard;
  };
}
