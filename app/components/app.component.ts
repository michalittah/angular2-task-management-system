import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './dashboard.component';
import {BoardContentComponent} from './board-content.component';
import {ListContentComponent} from './list-content.component';
import {BoardService} from '../services/board.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: ['app/css/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        DashboardComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        BoardService
    ]
})
@RouteConfig([
    {
        path: '/board/:title',
        name: 'BoardContent',
        component: BoardContentComponent
    },
    {
        path: '/board/:boardTitle/list/:listTitle',
        name: 'ListContent',
        component: ListContentComponent
    }
])
export class AppComponent {
    title = 'Task Management System';
}
