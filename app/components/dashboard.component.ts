
import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Board} from '../board';
import {BoardService} from '../services/board.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    boards:Board[] = [];
    public isForm:boolean = false;
    public title:string = "";

    constructor(private _router:Router,
                private _boardService:BoardService) {
    }

    ngOnInit() {
        this._boardService.getBoards()
            .then(boards => this.boards = boards);
    }

    gotoDetail(title:string) {
        let link = ['BoardContent', {'title': title}];
        this._router.navigate(link);
    }


    addBoard(title:string) {
        this._boardService.addBoard({'title': title, 'list': []});
        this.isForm = !this.isForm;
        this.title = "";
        this.gotoDetail(title);

    }
    removeBoard(index:number){
        this._boardService.removeBoard(index);
    }

    toggleForm() {
        this.isForm = !this.isForm;
    }
}