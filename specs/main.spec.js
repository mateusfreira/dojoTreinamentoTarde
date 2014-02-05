describe("O jogo de tennis deve ",function(){
	it("Existe jogo",function(){
		expect(jogo).not.toBe(undefined);
	});
	it("Existem 2 jogadores",function(){
		expect(jogo.jogador1).not.toBe(undefined);
		expect(jogo.jogador2).not.toBe(undefined);
	});
	it("Deve verificar a quantidade de pontos ",function(){
		expect(jogo.getPontuacao).not.toBe(undefined);
	});
	it("Pontuacao de ambos os jogadores deve ser 0",function(){
       expect(jogo.getPontuacao(jogo.jogador1)).toBe(0);
       expect(jogo.getPontuacao(jogo.jogador2)).toBe(0);
	});
	it("Deve existir marcação de pontos ",function(){
		expect(jogo.marcaPonto).not.toBe(undefined);
	});
	it("Deve marcar 15 pontos",function(){
		expect(jogo.marcaPonto(jogo.jogador1));
		expect(jogo.getPontuacao(jogo.jogador1)).toBe(15);
	});
	it("Deve marcar 30 pontos",function(){
		expect(jogo.marcaPonto(jogo.jogador1));
		expect(jogo.getPontuacao(jogo.jogador1)).toBe(30);
	});
	it("Deve marcar 40 pontos",function(){
		expect(jogo.marcaPonto(jogo.jogador1));
		expect(jogo.getPontuacao(jogo.jogador1)).toBe(40);
	});
	it("Deve existir a verificacao de empate",function(){
       expect(jogo.verificaEmpate).not.toBe(undefined);
	});
	it("Verifica se não está empatando",function(){
		expect(jogo.verificaEmpate(jogo.jogador1,jogo.jogador2)).toBe(false);
	});
	it("Deve existir uma funcao de MatchPoint",function(){
		expect(jogo.MatchPoint).not.toBe(undefined);
	});
	it("Verifica primeira condicao de MatchPoint para jogador1",function(){
		expect(jogo.marcaPonto(jogo.jogador1));
	});
	
	it("Verifica primeira condicao de MatchPoint para jogador2",function(){
	    jogo = new JOGO();
	    expect(jogo.marcaPonto(jogo.jogador2));
	    expect(jogo.marcaPonto(jogo.jogador2));
	    expect(jogo.marcaPonto(jogo.jogador2));
	    expect(jogo.marcaPonto(jogo.jogador2));
	});
	it("Verifica segunda condicao de MatchPoint para empate jogador1",function(){
	 	expect(jogo.marcaPonto(jogo.jogador1));
	    expect(jogo.marcaPonto(jogo.jogador1));
	    expect(jogo.marcaPonto(jogo.jogador1));
	    expect(jogo.marcaPonto(jogo.jogador1));
	});
});
