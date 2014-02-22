var Calculadora;

Calculadora = (function() {

	Calculadora.prototype.enter = function(num) {
		this.humerosHistorico.push(num);
		return this;
	};

	Calculadora.prototype.soma = function(num) {
		var numInit = 0;
  		this.humerosHistorico.forEach(function(it){ 
  			numInit += it;
  		});
  		this.humerosHistorico = [numInit];
  		this.resultado = numInit;
  		return this;
	};

	Calculadora.prototype.multiplica = function(num) {
		var numInit = 1;
  		this.humerosHistorico.forEach(function(it){ 
  			numInit *= it;
  		});
  		this.humerosHistorico = [numInit];
  		this.resultado = numInit;
  		return this;
	};

	Calculadora.prototype.divide = function(num) {
		var numInit = undefined;
  		this.humerosHistorico.forEach(function(it){ 
  			if (numInit == undefined)
  				numInit = it;
  			else
  				numInit = numInit / it;
  		});
  		this.humerosHistorico = [numInit];
  		this.resultado = numInit;
  		return this;
	};

	Calculadora.prototype.subtrai = function(num) {
		var numInit = undefined;
  		this.humerosHistorico.forEach(function(it){ 
  			if (numInit == undefined)
  				numInit = it;
  			else
  				numInit = numInit - it;
  		});
  		this.humerosHistorico = [numInit];
  		this.resultado = numInit;
  		return this;
	};

	function Calculadora(){

		this.humerosHistorico = [];
		this.resultado = undefined;
	}

	return Calculadora;

})();