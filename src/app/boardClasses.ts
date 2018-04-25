export class BoardState {
    wp1: number[];
    wp2: number[];
    wp3: number[];
    wm1: number[];
    wm2: number[];
    bp1: number[];
    bp2: number[];
    bp3: number[];
    bm1: number[];
    bm2: number[];
    anchor: number[];

    constructor(){
        this.wp1 = [0,4];
        this.wp2 = [1,4];
        this.wp3 = [3,4];
        this.wm1 = [2,4];
        this.wm2 = [2,3];
        this.bp1 = [0,5];
        this.bp2 = [2,5];
        this.bp3 = [3,5];
        this.bm1 = [2,5];
        this.bm2 = [1,6];
        this.anchor = [0,0];
    }

}

export class Board {
    id: number;
    player1: string;
    player2: string;
    state: BoardState;
}