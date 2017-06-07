var prompt = require('prompt');
var math = require('mathjs');
 
prompt.start();

prompt.get(['function', 'lowerBound', 'upperBound', 'riemannSumType', 'step'], function (err, result) {
  console.log('Function: ' + result.function);
  var sum = 0;
  if (result.riemannSumType == 'left'){
    for (var i = parseInt(result.lowerBound); i < parseInt(result.upperBound); i+=parseInt(result.step)){
      var pluggedInFunction = result.function.replace(/x/g, i.toString());
      console.log(pluggedInFunction);
      console.log(math.eval(pluggedInFunction));
      sum += math.eval(pluggedInFunction);
    }
  }
  else if (result.riemannSumType == 'right'){
    for (var i = parseInt(result.lowerBound) + parseInt(result.step); i <= parseInt(result.upperBound); i+=parseInt(result.step)){
      var pluggedInFunction = result.function.replace(/x/g, i.toString());
      console.log(pluggedInFunction);
      console.log(math.eval(pluggedInFunction));
      sum += math.eval(pluggedInFunction);
    }
  }
  else {
    for (var i = parseInt(result.lowerBound) + (parseInt(result.step)/2); i <= parseInt(result.upperBound); i+=parseInt(result.step)){
      var pluggedInFunction = result.function.replace(/x/g, i.toString());
      console.log(pluggedInFunction);
      console.log(math.eval(pluggedInFunction));
      sum += math.eval(pluggedInFunction);
    }
  }
  console.log('Sum: ' + sum);
});