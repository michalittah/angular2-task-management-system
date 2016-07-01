export class Task {
    title:string;
    description:string;
    done:boolean;
}

export class List {
    title:string;
    description:string;
    tasks:Task[];
}

export class Board {
    title:string;
    list:List[];
}
