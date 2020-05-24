import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha', //tag
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se o tabuleiro deve ser exibido
   *
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de inicio deve ser exibido
   *
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibido
   *
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo
   *
   * @return void
   */
  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar num local do tabuleiro
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
    
  }

}
