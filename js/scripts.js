
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
  for(var i=0; i < pizza.length; i++)
  {
   $("select#p").append("<option>" + pizza[i]+ "</option>");
  }


  $("select").change(function(){

    var menuOptionSelected = $("#menupageoptions option:selected").val();
    if(menuOptionSelected.toString() === "Pizza")
    {
      console.log(menuOptionSelected);
      $(".pizzaimage").show();
      $(".wingsimage").hide();
      $(".drinksimage").hide();
    }
    else if(menuOptionSelected.toString() === "Wings")
    {
      $(".pizzaimage").hide();
      $(".wingsimage").show();
      $(".drinksimage").hide();
    }
    else if(menuOptionSelected.toString() === "Drinks")
    {
      $(".pizzaimage").hide();
      $(".wingsimage").hide();
      $(".drinksimage").show();
    }
  });

  $("form#porder").submit(function(event)
  {
    event.preventDefault();
    var pizzaselected="";
    var currentBill =0;
    var toppings =[];
    var size="";
    var bill=0;
    var toppingrate=0;
    var pizzarate=0;
    $("input:checkbox[name=topping]:checked").each(function(){
         toppings.push($(this).val());

      pizzaselected=$("#p option:selected").val();

      $("input:checkbox[name=size]:checked")
      {
        size=$("input:checkbox[name=size]:checked").val();
      }
          if(size === small)
          {
            pizzarate= pizzarate+4.99;
          }
          else if(size === medium)
          {
            pizzarate=pizzarate +11.99;
          }
          else
          {
            pizzarate=pizzarate+13.99;
          }

        if(toppings.length >0)
        {
          for(var i=0; i<toppings.length; i++)
          toppingrate = toppingrate+1;
        }
      bill=bill+pizzarate+toppingrate;
      $("#billing").append("Pizza charges " + pizzaselected + " " + pizzarate);
      $("#billing").append("Toppings charges" + " " + toppingrate);
      $("#billing").append("Total bill" + " " + bill);
      console.log(pizzaselected);
      console.log(pizzarate);
      console.log(toppingrate);
      console.log(bill);
     });
   });
});
