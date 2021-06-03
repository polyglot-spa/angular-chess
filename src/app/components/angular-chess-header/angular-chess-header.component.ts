import { Component } from '@angular/core';
import { ChessStarterService } from "../../Services/chess-starter.service";
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-angular-chess-header',
  templateUrl: './angular-chess-header.component.html',
  styleUrls: ['./angular-chess-header.component.css']
})
export class AngularChessHeaderComponent {
  constructor(private chessStarterService:ChessStarterService) {
  }
  angularLogoUrl = assetUrl('angular-logo.svg');
  chessLogoUrl = assetUrl('Centaur.png');

  emitQuickStartGame() {
    this.chessStarterService.quickStartGame.emit();
  }
}
