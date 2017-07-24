# _SPECIFICATION_

#### _Constraints:_
* _Always a pizza name should be selected, if not it thows an exception and shows an alert._
* _Default size of pizza is small._
* _Default crust of pizza is crust1._
* _Default sauce of pizza is sauce1._


* _Example Input :_ 
_Select your choice of pizza : --Please select a pizza--_
_Example Output : alert: Please select a pizza_

* _Example Input :_
_Select your choice of pizza : Cheese Pizza_
_Enter your choice of size : small_
_Enter your choice of crust: crust1_
_Enter your choice of sauce: sauce1_
_Enter your choice of toppings: nothing selected_
_Click on the "Place Your Order" button_
_Example Output :_ 
_RECEIPT_
_Items:	Rates:_
_small	4.99_
_crust1	1_
_sauce1	1_
_Toppings:	0_
_Total Cost	6.99_

* _Example Input :_
_Select your choice of pizza : Supreme Pizza_
_Enter your choice of size : medium_
_Enter your choice of crust: crust3_
_Enter your choice of sauce: sauce2_
_Enter your choice of toppings: All the toppings selected_
_Click on the "Place Your Order" button_
_Example Output :_ 
_RECEIPT_
_Items:	Rates:_
_medium	11.99_
_crust3	3_
_sauce2	2_
_Toppings: Pepperoni, Sausage, Ham, Pineapple, Bacon	15_
_Total Cost	31.99_


