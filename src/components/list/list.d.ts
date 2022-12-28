import { IChannelCard, IFilmCard, IList, IListChannelData, IListFilmData } from '../../interfaces/interfaces';
import './list.scss';
export declare class List implements IList {
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
    init: () => void;
    private renderItems;
    goRight: () => void;
    goLeft: () => void;
}
