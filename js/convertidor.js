self.onmessage = function(temperatura) {
  console.log('Recibido la temperatura ' + temperatura.data[0] + temperatura.data[1]);

  console.log("Calculando la conversión");
  var salida = "";
  if(temperatura.data[1] === 'C' || temperatura.data[1] ==='c'){
    console.log("De Celsius a Farenheit");
    var aux = temperatura.data[0] * (9/5) + 32;
    salida = aux.toFixed(1) + 'F';
  }else{
    console.log("De Farenheit a Celsius");
    var aux = (temperatura.data[0] - 32) * (5/9);
    salida = aux.toFixed(1) + 'C';
  }

  self.postMessage(salida);
}
