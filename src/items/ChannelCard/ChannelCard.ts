import { ChannelData, ItemChannelCard } from '../../types/types';
import { IChannelCard } from '../../interfaces/interfaces';
import './ChannelCard.scss';

export class ChannelCard implements IChannelCard {
  private _itemId: number;
  private _idx: number;
  private _itemContainerId: string;
  private _channelData: ChannelData;
  cardElement: HTMLElement;
  constructor(item: ItemChannelCard) {
    this._itemId = item.id;
    this._idx = item.idx;
    this._itemContainerId = item.itemContainerId;
    this._channelData = item.channelData;
    this.cardElement = document.createElement('div');
  }
  generateItem() {
    this.cardElement.classList.add('channel-card');
    this.cardElement.setAttribute('id', this._itemId.toString());
    const inner = `<div class="channel-card_image"><img src="${this._channelData.logo}"/></div>${
      !this._channelData.briz_billing_product_info.is_available ? `<span class="channel-card_lock"></span>` : ''
    }<span class="channel-card_name">${this._channelData.name}</span>`;
    this.cardElement.innerHTML = inner;
  }
  renderItem() {
    this.generateItem();
    const container = document.getElementById(this._itemContainerId);
    container?.append(this.cardElement);
  }

  addSelected() {
    this.cardElement.classList.add('channel-card_active');
  }

  removeSelected() {
    this.cardElement.classList.remove('channel-card_active');
  }

  get channelData() {
    return this._channelData;
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
