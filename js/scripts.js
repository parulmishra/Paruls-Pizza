
var menu= ["Pizza","Wings","Drinks"];
var pizza=["Cheese Pizza", "MEAT LOVER'S PIZZA","PEPPERONI PIZZA", "SUPREME PIZZA","CREATE YOUR OWN"];
var wings=["LARGE TRADITIONAL WINGS","BREADED BONE-OUT WINGS"];
var drinks=["PEPSI","DIET PEPSI","MOUNTAIN DEW"];

$(document).ready(function()
{
  
  for(var i=0; i < menu.length; i++)
  {
   $("select#menupageoptions").append("<option>" + menu[i]+ "</option>");
  }
  var menuOptionSelected = $("#menupageoptions option:selected").val();

  if(menuOptionSelected.toString() === "Pizza")
  {
    console.log(menuOptionSelected);
    $(".pizzaimage").show();
  }
  else if(menuOptionSelected.toString() === "Wings")
  {
   $(".wingsimage").show();
  }
  else if(menuOptionSelected.toString() === "Drinks")
  {
   $(".drinksimage").show();
  }





  /*for(var i=0; i < pizza.length; i++)
  {
   $("select#menupageoptions").append("<option>" + pizza[i]+ "</option>");
  }
  */
});
