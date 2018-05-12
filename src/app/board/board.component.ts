import { Component, OnInit } from '@angular/core';
import { Board, BoardState, Game } from '../boardClasses';
import { GameList } from '../miscClasses';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board = {
      id: 1,
      player1: "Greg",
      player2: "Michael",
      state: new BoardState()
  }

  games: GameList[]
  game: Game

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  get_games(){
    let games = this.api.get_games()
    this.games = games;
  }

  start_game(){
    let game = this.api.start_game()
    this.game = game
  }

}
