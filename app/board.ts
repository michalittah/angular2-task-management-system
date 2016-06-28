export class Task {
    title:string;
    description:string;
}

export class List {
    title:string;
    description:string;
    tasks:Task[];
}

export class Board {
    id:number;
    title:string;
    list:List[];
}
