import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// This will probably get removed later
import { BoardState, BoardStateIn, Game } from './boardClasses';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  // login(username: string) {
  //   this.http.post('1/login')
  // }

  get_games() {
    // Expected return value: {games: [{game: `<uuid>`, opponent: `<uuid>`, name: "death match"}, ...]}
    // let resp = this.http.get('/1/games')
    let resp = {games: [{game: '1234', opponent: 'michael', name: "death match"}]}
    return resp.games;
  }

  start_game(game?: string, user?: string) {
    // Expected return value: {game: `<uuid>`, user: `<uuid>`, status: "waiting"|"started", state: `<boardState>`, color: "white"|"black"}
    // let url = '/1/game/start
    // let extras = [];if (user || game) url += ?
    // if (user) extras.push(`user=${user}`)
    // if (game) extras.push(`join=${game}`)
    // if (extras.length) url += `?${extras.join('?')}`
    // let resp = this.http.get(url)

    let apiState = new BoardStateIn()
    let feState = BoardState.fromBoardIn(apiState)
    let resp = new Game('1234', 'greg', 'started', feState, 'white')
    return resp
  }
}
