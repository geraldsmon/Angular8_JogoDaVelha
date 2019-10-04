import { TestBed } from '@angular/core/testing';
import { JogoDaVelhaService } from './jogo-da-velha.service';
import { JogoDaVelhaComponent } from '../jogo-da-velha.component';

describe('JogoDaVelhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ JogoDaVelhaComponent ],
      providers: [JogoDaVelhaService]
  }));

  it('should be created', () => {
    const service: JogoDaVelhaService = TestBed.get(JogoDaVelhaService);
    expect(service).toBeTruthy();
  });
});
