var expect = chai.expect;


describe("Pruebas BDD", function() {
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



});
