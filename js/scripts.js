
var pizza=["Cheese Pizza", "MEAT LOVER'S PIZZA","PEPPERONI PIZZA", "SUPREME PIZZA","CREATE YOUR OWN"];
var pizzaSizeCost = 0;
var pizzaCrustCost = 0;
var pizzatoppingCost = 0;
var pizzaSauceCost = 0;

function Pizza(size, crust, sauce, topping) 
{
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.topping = topping;
  this.cost = 0;
}
Pizza.prototype.Calculate=function()
{
	if(this.size === "small")
  {
    this.cost = this.cost + 4.99;
	pizzaSizeCost = this.cost;
  }
  else if(this.size === "medium")
  {
    this.cost = this.cost + 11.99;
	pizzaSizeCost = this.cost;
  }
  else if(this.size === "large")
  {
    this.cost = this.cost + 13.99;
	pizzaSizeCost = this.cost;
  }
  
  for(var i=0; i<this.topping.length; i++)
  {
	  console.log(this.topping[i]);
	  if(this.topping[i] === "Pepperoni" )
	  {
		  this.cost = this.cost + 1;
		  pizzatoppingCost = pizzatoppingCost + 1;
	  }
	  else if(this.topping[i] === "Sausage")
	  {
		  this.cost = this.cost +2;
		  pizzatoppingCost = pizzatoppingCost + 2;
	  }
	  else if(this.topping[i] === "Ham")
	  {
		  this.cost = this.cost + 3;
		  pizzatoppingCost = pizzatoppingCost + 3;
	  }
	  else if(this.topping[i] === "Pineapple")
	  {
		  this.cost = this.cost + 4;
		  pizzatoppingCost = pizzatoppingCost + 4;
	  }
	  else if(this.topping[i] === "Bacon")
	  {
		  this.cost = this.cost + 5;
		  pizzatoppingCost = pizzatoppingCost + 5;
	  }		  
  }
  if(this.crust === "crust1")
  {
	  this.cost= this.cost + 1;
	  pizzaCrustCost = 1;
  }
  else if(this.crust === "crust2")
  {
	  this.cost = this.cost + 2;
	  pizzaCrustCost = 2;
  }
  else if(this.crust === "crust3")
  {
	  this.cost = this.cost+ 3;
	  pizzaCrustCost = 3;
  }
  if(this.sauce === "sauce1")
  {
	  this.cost= this.cost + 1;
	  pizzaSauceCost = 1;
  }
  if(this.sauce === "sauce2")
  {
	  this.cost= this.cost + 2;
	  pizzaSauceCost = 2;
  }
  if(this.sauce === "sauce3")
  {
	  this.cost= this.cost + 3;
	  pizzaSauceCost = 3;
  }
  
  return this.cost;
}
$(document).ready(function(event)
{
  for(var i=0; i < pizza.length; i++)
  {
   $("select#pizza").append("<option>" + pizza[i]+ "</option>");
  }
	
  $("select#pizza").change(function()
 {
	var pizzaSelected = $("#pizza option:selected").val();
	switch(pizzaSelected)
	{
	case "Cheese Pizza":
	$("#selectedImage").html("<img src='img/cheesepizza.png' class='smallpizzaimage'/>");
	break;
	case "MEAT LOVER'S PIZZA":
	$("#selectedImage").html("<img src='img/classicmeatlover.png' class='smallpizzaimage'/>");
	break;
	case "PEPPERONI PIZZA":
	$("#selectedImage").html("<img src='img/pepperoni.png' class='smallpizzaimage'/>");
	break;
	case "SUPREME PIZZA":
	$("#selectedImage").html("<img src='img/classicsupreme.png' class='smallpizzaimage'/>");
	break;
	case "CREATE YOUR OWN":
	$("#selectedImage").html("<img src='img/createyourownpizza.png' class='smallpizzaimage'/>");
	break;
	default:
	$("#selectedImage").html("");
	break;
	}	
 });

  $("form#porder").submit(function(event)
  {
	event.preventDefault();
	var pizzaSelected = $("#pizza option:selected").val();
	if(pizzaSelected === "--Please select a pizza--")
	{
		alert("Please select a pizza");
		throw "Invalid selection";
	}
    var pizzaTopping = [];
	$("input:checkbox[name=topping]:checked").each(function(){
      pizzaTopping.push($(this).val());
	  });
	var pizzaSize = $("input:radio[name=size]:checked").val();
    var pizzaCrust = $("input:radio[name=crust]:checked").val();
    var pizzaSauce = $("input:radio[name=sauce]:checked").val();
 
	 var newPizza = new Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaTopping);
    var pizzaCost = newPizza.Calculate();
	
	$("#pizzasize").html(pizzaSize);
	$("#pizzacost").html(pizzaSizeCost);
	$("#crustname").html(pizzaCrust);
	$("#crustcost").html(pizzaCrustCost);
	$("#saucename").html(pizzaSauce);
	$("#saucecost").html(pizzaSauceCost);
	$("#toppingnames").html("Toppings: ");
	for(var i=0; i<pizzaTopping.length-1;i++)
	{
		$("#toppingnames").append(pizzaTopping[i] + ", ");
	}
	
	$("#toppingnames").append(pizzaTopping[pizzaTopping.length-1]);
	$("#toppingcost").html(pizzatoppingCost);
	
	$("#totalcost").html(pizzaCost.toFixed(2));
	$("#porder").hide();
	$("#billing").show();
   });
});
