import { ChannelData, ItemChannelCard } from '../../types/types';
import { IChannelCard } from '../../interfaces/interfaces';
import './ChannelCard.scss';
export declare class ChannelCard implements IChannelCard {
    private _itemId;
    private _idx;
    private _itemContainerId;
    private _channelData;
    cardElement: HTMLElement;
    constructor(item: ItemChannelCard);
    generateItem(): void;
    renderItem(): void;
    addSelected(): void;
    removeSelected(): void;
    get channelData(): ChannelData;
    get itemId(): number;
    get idx(): number;
    get itemContainerId(): string;
}
