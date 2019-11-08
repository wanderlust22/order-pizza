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



// front end logic
$(document).ready(function(){
  $("#toSubmit").submit(function(event){
    event.preventDefault();
    var inputSize = $("#size").val();
    var inputVeggies = $("#veggies").val();
    var inputMeat = $("#meat").val();
    var order = new Pizza(inputSize, inputVeggies, inputMeat);
    var total = order.price();
  $("#output").text('The price of your pizza is $' + total);
  $("#addPizza").toggle();
  $("#addPizza").click(function(){
    $("#toSubmit").submit(function(event){
      event.preventDefault();
      var inputSize = $("#size").val();
      var inputVeggies = $("#veggies").val();
      var inputMeat = $("#meat").val();
      var order = new Pizza(inputSize, inputVeggies, inputMeat);
      total += order.price();
      $("#output").text('The price of your order is $' + total);

  });
});
});
});
