import { Component, OnInit } from '@angular/core';
import { Board, BoardState } from '../boardClasses';

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
  constructor() { }

  ngOnInit() {
  }

}
