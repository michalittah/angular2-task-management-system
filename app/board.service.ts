import { Injectable } from 'angular2/core';

import { Board } from './board';
import { BOARDS } from './mock-boards';

@Injectable()
export class BoardService {
  getBoards() {
    return Promise.resolve(BOARDS);
  }

  getBoardsSlowly() {
    return new Promise<Board[]>(resolve =>
      setTimeout(()=>resolve(BOARDS), 2000) // 2 seconds
    );
  }

  getBoard(id: number) {
    return Promise.resolve(BOARDS).then(
      boards => boards.filter(board => board.id === id)[0]
    );
  }

}
