import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Edward Newgate' },
      { id: 12, name: 'Boa Hancock' },
      { id: 13, name: 'Portgas D. Ace' },
      { id: 14, name: 'Monkey D. Luffy' },
      { id: 15, name: 'Eustass \'Captain\' Kid' },
      { id: 16, name: 'Don Krieg' },
      { id: 17, name: 'Rob Lucci' },
      { id: 18, name: 'Monkey D. Garp' },
      { id: 19, name: 'Roronoa Zoro' },
      { id: 20, name: 'Mihawk \'Takanome\'' }
    ];
    return {heroes};
  }
}
