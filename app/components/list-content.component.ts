import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Board} from '../board';
import {List} from '../board';
import {BoardService} from '../services/board.service';

import {HammerGesturesDirective} from "../directives/HammerGesturesDirective";

@Component({
    selector: 'my-list-content',
    templateUrl: 'app/templates/list-content.component.html',
    styleUrls: ['app/css/list-content.component.css'],
    directives: [HammerGesturesDirective]
})
export class ListContentComponent implements OnInit {
    @Input() board:Board;

    @Input() list:List;

    public isTaskForm = new Array();
    public taskTitle = new Array();
    public taskDescription = new Array();

    public listTitle:string = "";
    public listDescription:string = "";

    constructor(private _boardService:BoardService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        var boardTitle = this._routeParams.get('boardTitle');
        var listTitle = this._routeParams.get('listTitle');
        this._boardService.getBoard(boardTitle)
            .then(board => this.board = board);
        this._boardService.getBoardList(listTitle, boardTitle)
            .then(list => this.list = list);

    }

    addTask(title:string, description:string, boardTitle:string, listTitle:string, index:number) {
        this._boardService.addTask({'title': title, 'description': description, 'done': false}, boardTitle, listTitle);
        this.taskTitle[index] = "";
        this.taskDescription[index] = "";
        this.toggleTaskForm(index);
    }

    toggleTaskForm(index:number) {
        this.isTaskForm[index] = !this.isTaskForm[index];
    }

    removeList(index:number, boardTitle:string) {
        this._boardService.removeList(index, boardTitle);
    }

    removeTask(index:number, boardTitle:string, listTitle:string) {
        this._boardService.removeTask(index, boardTitle, listTitle);
    }

    doSwipe(direction:string, index:number, boardTitle:string, listTitle:string) {
        console.log(direction);
        if ((direction == "swipeleft") || (direction == "swiperight")) {
            this.removeTask(index, boardTitle, listTitle);
        }
    }
}
