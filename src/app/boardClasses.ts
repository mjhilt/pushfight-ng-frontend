export class BoardStateIn {
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
        this.bm1 = [2,6];
        this.bm2 = [1,6];
        this.anchor = null
    }
}


export class BoardRow {
    constructor(public row: number, public values: string[]){
        if (!(row >= 0 && row <= 4)) throw new Error('Bad board row');
        this.row = row;

        // Could do validation here too
        this.values = values;
    }
}

export class BoardState {
    rows: BoardRow[];

    constructor(inRows?: BoardRow[]){
        if (inRows){
            this.rows = inRows;
        } else {
            this.rows = []
            for (let i=0; i<4; i++) {
                this.rows.push(new BoardRow(i, ['','','','','','','','','','']))
            }
        }
    }

    static fromBoardIn(input: BoardStateIn){
        let self = new BoardState()
        self.rows[input.wp1[0]].values[input.wp1[1]] = 'wp1'
        self.rows[input.wp2[0]].values[input.wp2[1]] = 'wp2'
        self.rows[input.wp3[0]].values[input.wp3[1]] = 'wp3'
        self.rows[input.wm1[0]].values[input.wm1[1]] = 'wm1'
        self.rows[input.wm2[0]].values[input.wm2[1]] = 'wm2'
        self.rows[input.bp1[0]].values[input.bp1[1]] = 'bp1'
        self.rows[input.bp2[0]].values[input.bp2[1]] = 'bp2'
        self.rows[input.bp3[0]].values[input.bp3[1]] = 'bp3'
        self.rows[input.bm1[0]].values[input.bm1[1]] = 'bm1'
        self.rows[input.bm2[0]].values[input.bm2[1]] = 'bm2'
        console.log(input.anchor)
        if (input.anchor !== null){
            let anchored = self.rows[input.anchor[0]].values[input.anchor[1]]
            if (anchored === '' || anchored[1] !== 'p') throw Error('Bad board state')
            anchored += 'a'
        }
        return self
    }
}


export class Board {
    id: number;
    player1: string;
    player2: string;
    state: BoardState;
}


export class Game {
    game: string;
    user: string;
    status: string;
    state: BoardState;
    color: string;

    constructor(game: string, user: string, status: string, state: BoardState, color:string){
        this.game = game;
        this.user = user;
        this.status = status;
        this.state = state;
        this.color = color;
    }
}
