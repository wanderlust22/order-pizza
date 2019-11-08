// back end logic
var Pizza = function(size, veggies, meats){
  this.size = size,
  this.veggies = veggies,
  this.meats = meats
}

Pizza.prototype.price = function(){
  var price = 0;
  var small;
  var medium;
  var large;
  if(this.size == 'small'){
    price += 10;
  } else if(this.size == 'medium'){
    price += 15;
  } else if(this.size == 'large'){
    price += 20;
  } else if(this.veggies == vegetable){
    price += 3;
  } else if(this.meats == meat){
    price += 5;
  }
  return price;
}



// front end logic
$(document).ready(function(){
  $("#toSubmit").submit(function(event){
    event.preventDefault();
    var inputSize = $("#size").val();
    var inputVeggies = $("#veggies").val();
    var inputMeat = $("#meat").val();

  var order = new Pizza(inputSize, inputVeggies, inputMeat);
  console.log(order);
  $("#output").text(order.price());

  });
});
