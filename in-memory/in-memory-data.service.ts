import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Stat } from './stat'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const stats = [ 
        {id: 11, date: "2019-02-27", minutes: 60},
        {id: 12, date: "2019-02-28", minutes: 60},
        {id: 13, date: "2019-02-28", minutes: 30}
      ]
      ;
      return {stats};
    }

    genId(stats: Stat[]): number {
      return stats.length > 0 ? Math.max(...stats.map(stat => stat.id)) + 1 : 11;
    }
}
