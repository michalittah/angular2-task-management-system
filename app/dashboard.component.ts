// import { Component, OnInit } from 'angular2/core';
// import { Router } from 'angular2/router';
//
// import { Hero } from './hero';
// import { HeroService } from './hero.service.js';
//
// @Component({
//   selector: 'my-dashboard',
//   templateUrl: 'app/dashboard.component.html',
//   styleUrls: ['app/dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//
//   heroes: Hero[] = [];
//
//   constructor(
//     private _router: Router,
//     private _heroService: HeroService) {
//   }
//
//   ngOnInit() {
//     this._heroService.getHeroes()
//       .then(heroes => this.heroes = heroes.slice(1,5));
//   }
//
//   gotoDetail(hero: Hero) {
//     let link = ['HeroDetail', { id: hero.id }];
//     this._router.navigate(link);
//   }
// }

import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Board} from './board';
import {BoardService} from './board.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
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