'use sctrict';

// assert = require("assert")

var expect = chai.expect;

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


describe('Api', function() { 
    describe('/Enum/StatusVenda', function() { 
        
        beforeEach(function() {
            sinon.spy($, 'ajax')
        });
        afterEach(function(){
            $.ajax.restore();
        });
        
        
        it('fooBars() should execute ajax', function(done) { 
            foobarStore.fooBars();
            expect($.ajax.calledOnce, "Requisição ajax deve ser realizada!").to.be.true;
            done();
        });
    });
});

describe('Test', function() {
    it('Error', function() {
        
    });
});