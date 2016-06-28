import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Board } from './board';
import { BoardService } from './board.service';

@Component({
  selector: 'my-board-content',
  templateUrl: 'app/board-content.component.html',
  styleUrls: ['app/board-content.component.css']
})
export class BoardContentComponent implements OnInit {
  @Input() board: Board;

  constructor(
    private _boardService: BoardService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._boardService.getBoard(id)
      .then(board => this.board = board);
  }

  goBack() {
    window.history.back();
  }
}
