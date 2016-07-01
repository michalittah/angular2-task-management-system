import {Injectable} from 'angular2/core';

import {Board} from './board';
import {Task} from './board';
import {List} from './board';
import {BOARDS} from './mock-boards';

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

    getBoard(title:string) {
        return Promise.resolve(BOARDS).then(
            boards => boards.filter(board => board.title === title)[0]
        );
    }

    getBoardList(listTitle:string, boardTitle:string) {
        return this.getBoard(boardTitle).then(
            board => board.list.filter(list => list.title === listTitle)[0]
        );
    }

    addBoard(board:Board) {
        BOARDS.push(board);
    }

    removeBoard(index:number) {
        BOARDS.splice(index, 1);
    }

    addList(list:List, boardTitle:string) {
        this.getBoard(boardTitle).then(board=>board.list.push(list));
    }

    removeList(index:number, boardTitle:string) {
        this.getBoard(boardTitle).then(board=>board.list.splice(index, 1));
    }

    addTask(task:Task, boardTitle:string, listTitle:string) {
        this.getBoardList(listTitle, boardTitle).then(list=>list.tasks.push(task));
    }

    removeTask(index:number, boardTitle:string, listTitle:string) {
        this.getBoardList(listTitle, boardTitle).then(list=>list.tasks.splice(index, 1));
    }
}
