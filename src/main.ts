import { Server } from './server';
import { List } from './components/list/list';
import { Navigation } from './Navigation';
import { ErrorHandler } from './ErrorHandler';
import '../src/assets/app.css';
import { AllItemsList } from './AllItemsList/AllItemsList';
import { IListChannelData, IListFilmData } from './interfaces/interfaces';

export class App {
  server: Server;
  configuration: any;
  navigation: Navigation;
  errorHandler: ErrorHandler;
  constructor() {
    this.errorHandler = new ErrorHandler();
    this.navigation = new Navigation(this.errorHandler);
    this.server = new Server(this.errorHandler);
  }

  init = () => {
    document.addEventListener('keydown', this.navigation.controlRemote);
    this.server.get('/api/tv/channels-popular', (d: any, status) => {
      const dataList: IListChannelData = {
        dataItems: d,
        containerId: 'channels',
        title: 'Телеканалы',
        listElId: 'tv-channels-list',
        type: 'channel',
        itemWidth: 276,
      };
      const list: List = new List(dataList);
      list.init();
    });

    this.server.get('/api/mgg/video?category_id=4&sort=year&limit=35', (d: any, status) => {
      const dataList: IListFilmData = {
        dataItems: d.video_list,
        containerId: 'films',
        title: 'Фильмы',
        listElId: 'films-list',
        type: 'film',
        itemWidth: 182,
      };
      const list: List = new List(dataList);
      list.init();
      this.navigation.setActive(list);
    });
  };

  render = () => {
    const container = document.querySelector('body');
    if (container) {
      container.innerHTML = `<div>
      <h1>Hello, World!!!!!!</h1>
    </div>`;
    }
  };

  get config() {
    return this.configuration;
  }
}

export const app = new App();

app.init();
