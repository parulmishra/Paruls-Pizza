# _SPECIFICATION_

#### _Constraints:_
* Always a pizza name should be selected, if not it thows an exception and shows an alert.
* Default size of pizza is small.
* Default crust of pizza is crust1.
* Default sauce of pizza is sauce1.


* _Example Input :_ 
  Select your choice of pizza : --Please select a pizza--
 * _Example Output : _
	 alert: Please select a pizza

* _Example Input :_
  Select your choice of pizza : Cheese Pizza
  Enter your choice of size : small
  Enter your choice of crust: crust1
  Enter your choice of sauce: sauce1
  Enter your choice of toppings: nothing selected
  Click on the "Place Your Order" button
 * _Example Output :_
  RECEIPT
  Items:	Rates:
  small	4.99
  crust1	1
  sauce1	1
  Toppings:	0
  Total Cost	6.99

* _Example Input :_
  Select your choice of pizza : Supreme Pizza
  Enter your choice of size : medium
  Enter your choice of crust: crust3
  Enter your choice of sauce: sauce2
  Enter your choice of toppings: All the toppings selected
  Click on the "Place Your Order" button
  * _Example Output :_
  RECEIPT
  Items:	Rates:
  medium	11.99
  crust3	3
  sauce2	2
  Toppings: Pepperoni, Sausage, Ham, Pineapple, Bacon	15
  Total Cost	31.99


