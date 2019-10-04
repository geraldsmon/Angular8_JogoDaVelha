import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';


@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida.
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo Jogo.
   * @return void
   */
   iniciarJogo(): void {
     return this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar um local no tabuleiro.
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(postX: number, posty: number): void {
    return this.jogoDaVelhaService.jogar(postX, posty);
 }

  /**
   * Retorna se a peça X deve ser exibida para a coordenada informada.
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirX(postX: number, posty: number): boolean {
    return this.jogoDaVelhaService.exibirX(postX, posty);
 }

  /**
   * Retorna se a peça Y deve ser exibida para a coordenada informada.
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibir0(postX: number, posty: number): boolean {
    return this.jogoDaVelhaService.exibir0(postX, posty);
 }
/**
   * Retorna se a marcação de vitória deve ser exibida para coordenada informada.
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirVitoria(postX: number, posty: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(postX, posty);
 }

  /**
   * Retorna o númerodo jogador a jogar.
   * @return number
   */
  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
 }

  /**
   * inicia um novo jogo.
   * @return void
   */
  novoJogo(): void {
    return this.jogoDaVelhaService.novoJogo();
 }
}
