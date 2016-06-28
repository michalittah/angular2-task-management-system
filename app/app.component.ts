import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './dashboard.component';
//import {HeroesComponent} from './heroes.component';
import {BoardContentComponent} from './board-content.component';
//import { HeroService } from './hero.service.js';
import {BoardService} from './board.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        DashboardComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        // HeroService
        BoardService
    ]
})
@RouteConfig([
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   component: DashboardComponent,
    //   useAsDefault: true
    // },
    // {
    //     path: '/dashboard/:id',
    //     name: 'Dashboard',
    //     component: DashboardComponent
    // },
    {
        path: '/board/:id',
        name: 'BoardContent',
        component: BoardContentComponent
    }
    // ,
    // {
    //     path: '/heroes',
    //     name: 'Heroes',
    //     component: HeroesComponent
    // }
])
export class AppComponent {
    title = 'Task Management System';
}
