// back end logic
var vegetables = ['tomatoes','garlic','mushrooms','pineapple','olives','arugula','onions','green peppers'];
var meats = ['sausage','pepperoni','bacon','ham','anchovies'];
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
  } if(vegetables.includes(this.veggies)){
    price += 3;
  } if(meats.includes(this.meats)){
    price += 5;
  }
  return price;
}

Pizza.prototype.addSpecs = function() {
  var history = 'You ordered a ' + this.size + ' pizza ';

   if(vegetables.includes(this.veggies)){
    history = history.concat('with ' + this.veggies);
  } if(meats.includes(this.meats)){
    history = history.concat(' and ' + this.meats);
  }
  return history.concat(' for $' + this.price());
}


var total = 0;
// front end logic
$(document).ready(function(){
  $("#toSubmit").submit(function(event){
    event.preventDefault();
    var inputSize = $("#size").val();
    var inputVeggies = $("#veggies").val();
    var inputMeat = $("#meat").val();
    var order = new Pizza(inputSize, inputVeggies, inputMeat);
    total += order.price();
  $("#output").text('The price of your pizza is $' + total);
  $("#outputOrders").append('<li>' + order.addSpecs() + '</li>');

  $("#addAnother").text('Add another pizza to your order!');
});
});
