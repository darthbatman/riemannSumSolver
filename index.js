var prompt = require('prompt');
var math = require('mathjs');
 
prompt.start();

prompt.get(['function', 'lowerBound', 'upperBound', 'riemannSumType', 'step'], function (err, result) {
  console.log('Function: ' + result.function);
  var sum = 0;
  if (result.riemannSumType == 'left'){
    for (var i = parseFloat(result.lowerBound); i < parseFloat(result.upperBound); i+=parseFloat(result.step)){
      var pluggedInFunction = result.function.replace(/x/g, i.toString());
      // console.log(pluggedInFunction);
      // console.log(math.eval(pluggedInFunction));
      sum += (math.eval(pluggedInFunction) * parseFloat(result.step));
    }
  }
  else if (result.riemannSumType == 'right'){
    for (var i = parseFloat(result.lowerBound) + parseFloat(result.step); i <= parseFloat(result.upperBound); i+=parseFloat(result.step)){
      var pluggedInFunction = result.function.replace(/x/g, i.toString());
      // console.log(pluggedInFunction);
      // console.log(math.eval(pluggedInFunction));
      sum += (math.eval(pluggedInFunction) * parseFloat(result.step));
    }
  }
  else {
    for (var i = parseFloat(result.lowerBound) + (parseFloat(result.step)/2); i <= parseFloat(result.upperBound); i+=parseFloat(result.step)){
      var pluggedInFunction = result.function.replace(/x/g, i.toString());
      // console.log(pluggedInFunction);
      // console.log(math.eval(pluggedInFunction));
      sum += (math.eval(pluggedInFunction) * parseFloat(result.step));
    }
  }
  console.log('Sum: ' + sum);
});