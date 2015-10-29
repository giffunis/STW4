var expect = chai.expect;


describe("Pruebas BDD", function() {
  var sandbox;

   beforeEach(function() {
     // create a sandbox
     sandbox = sinon.sandbox.create();

     // stub some console methods
     sandbox.stub(window.console, "log");
     sandbox.stub(window.console, "error");
   });

   afterEach(function() {
     // restore the environment as it was before
     sandbox.restore();
   });

  var aux = document.getElementById("entrada");
 var aux = document.getElementById("salida");

   describe("Temperatura()", function() {
     it("Temperatura(1 Parametro)", function() {
         temp = new Temperatura("32F");
         var out = temp.convert();
         expect(out).to.equal("0.0C");
     });

     it("Temperatura(2 Parametros)", function() {
       temp = new Temperatura("0.0e0","c");
       var out = temp.convert();
       expect(out).to.equal("32.0F");
     });
   });

  describe("convertir()", function() {
    it("convertir(32F)", function() {
      window.onload = function() {
        entrada.value = "32F";
        convertir();
        expect(salida.innerHTML).to.equal("0.0C");
      }
    });

    it("convertir2(0C)", function() {

      window.onload = function() {
        entrada.value = "0C";
        convertir();
        expect(salida.innerHTML).to.equal("32.0F");
      }
    });
  });

  describe("convert()", function() {
    it("temp.convert(32F)", function() {
        temp = new Temperatura("32F");
        var out = temp.convert();
        expect(out).to.equal("0.0C");
    });

    it("temp.convert(0.0e0c)", function() {
      temp = new Temperatura("0.0e0c");
      var out = temp.convert();
      expect(out).to.equal("32.0F");
    });
  });

  describe("Sinon 1.17.2", function() {
    it("Un argumento", function() {
      temp = new Temperatura("0.0e0c");
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Un argumento")
    });

    it("Dos argumentos", function() {
      temp = new Temperatura("0.0e0","c");
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Dos argumentos")
    });

    it("Tres argumentos", function() {
      temp = new Temperatura("0.0e0","c","f");
      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "Error en el paso de argumentos")
    });

    it("window.Worker", function() {
      entrada.value = "0C";
      convertir();
      sinon.assert.notCalled(console.error);

      sinon.assert.calledWithExactly(console.log, "El navegador acepta webWorker")
    });

  });


});
