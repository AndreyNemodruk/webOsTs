import { ICard } from '../../interfaces/interfaces';
import { FilmData, ItemFilmCard } from '../../types/types';
import './FilmCard.scss';
export declare class FilmCard implements ICard {
    _itemId: number;
    _idx: number;
    _itemContainerId: string;
    _filmtData: FilmData;
    cardElement: HTMLElement;
    constructor(item: ItemFilmCard);
    generateItem: () => void;
    renderItem: () => void;
    addSelected: () => void;
    removeSelected: () => void;
    get filmData(): FilmData;
    get itemId(): number;
    get idx(): number;
    get itemContainerId(): string;
}
