require.config({
	baseUrl: '../'
	, paths: {
		'jquery' : 'components/jquery/dist/jquery',
		'mocha' : 'components/mocha/mocha',
		'chai' : 'components/chai/chai',
		'sinon': 'components/sinonjs/sinon',
		'Calculadora' : 'src/Calculadora'
		
  	}
  	, shim: {
		'jquery': {
	  		exports: '$'
		}
  	}
});
 
require(['require', 'chai', 'sinon', 'mocha', 'jquery', 'Calculadora'], 
	function(require, chai, jquery){
		var should = chai.should();
		mocha.setup('bdd'); // globals mocha

		require([
			'test/test.foobar', 'test/test.calculadora'
		], function(require) { mocha.run(); });
});