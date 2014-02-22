'use sctrict';

var foobarStore = {
    fooBars: function() {
        $.ajax({
            url: 'http://localhost:59018/api/foobars'
            , dataType: 'json'
            , success: function(data) { return console.log(data); }
        });
    }
    , add: function() {
        $.ajax({
            url: 'http://localhost:59018/api/foobars/add'
            , dataType: 'json'
            , success: function(data) { return console.log(data); }
        });
    }
}

describe('Api', function(require) { 
    describe('/Enum/StatusVenda', function() { 
        beforeEach(function() {
            sinon.spy($, 'ajax')
        });
        afterEach(function(){
            $.ajax.restore();
        });
        
        it('fooBars() should execute ajax', function(done) { 
            foobarStore.fooBars();
            $.ajax.calledOnce.should.equal(true)
            done();
        });
    });
});

describe('Test', function() {
    it('Este é um teste pendente!');
    it("Teste de ONLY (Deve aplicar o only)", function(){ 
        true.should.equal.true; 
    });
});

