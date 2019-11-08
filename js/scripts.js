// back end logic
var Pizza = function(size, toppings){
  this.size = size'
  this.toppings = toppings
}

Pizza.prototype.price = function(){
  var price = 0;
  if(this.size == small){
    price += 10;
  } else if(this.size == medium){
    price += 15;
  } else if(this.size == large){
    price += 20;
  } else if(this.toppings == vegetable){
    price += 3;
  } else if(this.toppings == meat){
    price += 5;
  }
  return price;
}





// front end logic
