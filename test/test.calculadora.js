'use sctrict';

describe.only('Calculadora', function(requi1re) { 
	describe('Soma', function() {
		it('1 + 1 should be 2', function(){
			new Calculadora().enter(1).enter(1).soma()
				.resultado.should.equal(2);
		});

		it('2 + 2 should be 4', function(){
			new Calculadora().enter(2).enter(2).soma()
				.resultado.should.equal(4);
		});		


		it('2 + 2 * 4 should be 10', function(){
			new Calculadora().enter(2).enter(2).soma()
				.enter(4).multiplica().resultado.should.equal(16);
		});
	});

	describe('Subtração', function(){
		it('16 - 2 should be 14', function(){
			new Calculadora().enter(16).enter(2).subtrai()
				.resultado.should.equal(14);
		});

		it('14 - 7 should be 7', function(){
			new Calculadora().enter(14).enter(7).subtrai()
				.resultado.should.equal(7);
		});
	});

	describe('Multiplicação', function(){
		it('2 * 2 should be 4', function(){
			new Calculadora().enter(2).enter(2).multiplica()
				.resultado.should.equal(4);
		});

		it('8 * 8 should be 64', function(){
			new Calculadora().enter(8).enter(8).multiplica()
				.resultado.should.equal(64);
		});
	});

	describe('Divisão', function(){
		it('4 / 2 should be 2', function(){
			new Calculadora().enter(4).enter(2).divide()
				.resultado.should.equal(2);
		});

		it('16 / 2 should be 8', function(){
			new Calculadora().enter(16).enter(2).divide()
				.resultado.should.equal(8);
		});
	});
});