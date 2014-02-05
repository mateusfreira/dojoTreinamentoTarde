var JOGO = function(){
	var sets;
	var jogador=function(){
		this.pontos=0;
	};

	this.getPontuacao = function(player){	
		return player.pontos;
	};

	this.marcaPonto=function(player){
		if(player.pontos === 0){
			player.pontos = 15;
		}
		else if(player.pontos === 15){
			player.pontos = 30;
		}
		else if(player.pontos === 30){
			player.pontos = 40;
		}
		else {
			if(!this.verificaEmpate(this.jogador1,this.jogador2)){
				this.MatchPoint();
			}else{this.MatchPoint();}
		}
	};
	this.verificaEmpate=function(player1, player2){
			if (this.getPontuacao(player1)===this.getPontuacao(player2)){
				return true;
			}
			return false;
	};
	this.MatchPoint = function(){
		if(this.getPontuacao(this.jogador1)>this.getPontuacao(this.jogador2)){
			return this.jogador1;
		}
		else if(this.getPontuacao(this.jogador2)>this.getPontuacao(this.jogador1)){
			return this.jogador2;
		}

	};
	this.jogador1 = new jogador();
	this.jogador2 = new jogador();
};
var jogo = new JOGO();