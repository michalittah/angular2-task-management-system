import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Board} from './board';
import {BoardService} from './board.service';

@Component({
    selector: 'my-board-content',
    templateUrl: 'app/board-content.component.html',
    styleUrls: ['app/board-content.component.css']
})
export class BoardContentComponent implements OnInit {
    @Input() board:Board;

    public isForm:boolean = false;
    public isTaskForm = new Array();


    public taskTitle = new Array();
    public taskDescription = new Array();

    public listTitle:string = "";
    public listDescription:string = "";

    constructor(private _boardService:BoardService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        var title = this._routeParams.get('title');
        this._boardService.getBoard(title)
            .then(board => this.board = board);
    }

    addList(title:string, description:string, boardTitle:string) {
        this._boardService.addList({'title': title, 'description': description, 'tasks': []}, boardTitle);
        this.toggleForm();
        this.listTitle = "";
        this.listDescription = "";
    }

    addTask(title:string, description:string, boardTitle:string, listTitle:string, index:number) {
        this._boardService.addTask({'title': title, 'description': description}, boardTitle, listTitle);
        this.taskTitle[index] = "";
        this.taskDescription[index] = "";
        this.toggleTaskForm(index);
    }

    goBack() {
        window.history.back();
    }

    toggleForm() {
        this.isForm = !this.isForm;
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
}
