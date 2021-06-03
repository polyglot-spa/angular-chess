import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ChessStarterService } from "../../Services/chess-starter.service";
import 'chessboard-element';
import Chess from "chess.js";

@Component({
  selector: 'app-chessboard-wrapper',
  templateUrl: './chessboard-wrapper.component.html',
  styleUrls: ['./chessboard-wrapper.component.css']
})
export class ChessboardWrapperComponent implements OnInit {
  @ViewChild('chessboard') chessboard: ElementRef;
  constructor(private chessStarterService:ChessStarterService) { }
  game = new Chess();
  addEventListeners(game) {
    this.chessboard.nativeElement.addEventListener('drag-start', (e) => {
      // eslint-disable-next-line no-unused-vars
      const {source, piece, position, orientation} = e.detail;

      // do not pick up pieces if the game is over
      if (game.game_over()) {
        e.preventDefault();
        return;
      }

      // only pick up pieces for White
      if (piece.search(/^b/) !== -1) {
        e.preventDefault();
        return;
      }
    });
    this.chessboard.nativeElement.addEventListener('drop', (e) => {
      const {source, target, setAction} = e.detail;
      // see if the move is legal
      const move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) {
        setAction('snapback');
        return;
      }

      // make random legal move for black
      // @ts-ignore
      window.setTimeout(this.makeRandomMove(game), 250);
    });
    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    this.chessboard.nativeElement.addEventListener('snap-end', () => {
      this.chessboard.nativeElement.setPosition(game.fen());
    });
  }
  makeRandomMove(game) {
    let possibleMoves = game.moves();
    // game over
    if (possibleMoves.length === 0) {
      //clearInterval(randomMoveInterval);
      return;
    }

    // @ts-ignore
    const randomIdx = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIdx]);
    this.chessboard.nativeElement.setPosition(game.fen());
  }
  ngOnInit() {
    this.chessStarterService.quickStartGame.subscribe(() => {
      this.chessboard.nativeElement.setAttribute("draggable-pieces", "");
      this.addEventListeners(this.game);
      this.chessboard.nativeElement.start();
    })
  }
}
