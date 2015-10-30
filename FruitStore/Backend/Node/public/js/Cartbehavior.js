var cart;
$(document).ready(function(){

  cart = JSON.parse(getCookie("cart"));
  console.log(cart);
  var currentUsername =  getCookie("username");
  var signedinasText = "Signed in as "+ currentUsername;
  $("#usernameLabel").text(signedinasText);

  updateUI();
  //getFruits();
});

//Update the UI with cart information

var updateUI = function()
{
  //get the body of the table
  var tableBody = $('#cart > tbody');
  //remove all the childs
  tableBody.empty();
  var total = 0;
  for (var i = 0; i< cart.products.length; i++)
  {
    var fruit = cart.products[i].fruit;
    var fruitQuantity = cart.products[i].quantity;
    total = total + (fruit.cost * fruitQuantity);
    addProductToTable(fruitQuantity, fruit, tableBody);

  }
  updateTotals(total);

}

var addProductToTable = function (quantity, fruit, tableBody)
{
  tableBody.append(
    '<tr><td data-th="Product">'
      + '<div class="row">'
        + '<div class="col-sm-2 hidden-xs"><img src="'+fruit.imageURL + '"  class="img-responsive"/></div>'
      + '<div class="col-sm-10">'
        + '<h4 class="nomargin">' + fruit.name + '</h4>'
        + '<p>' + fruit.description + '</p>'
      + '</div>'
    + '</div> </td>'
    + '<td data-th="Price">$' + fruit.cost +'</td>'
    + '<td data-th="Quantity"> <p class="form-control">' + quantity + '</p></td>'
    + '<td data-th="Subtotal" class="text-center">$' + (fruit.cost * quantity) + '</td>'
   + '</tr>'
  );

}
//call ws post and delete cookie and all about the order
var placeOrderEvent = function()
{
  if (validateCreditCard())
  {

  }
}

var validateCreditCard = function()
{
  var cardNumberLabel = $("#card-number");
  var cardNumber = cardNumberLabel.val();
  var returnValue = true;
  if (!cardNumber)
  {
     returnValue= false;
      sweetAlert("Oops...", "Ingresa la tarjeta de crédito", "error");
  }else
  //check if is number
  if (!(/^\d+$/.test(cardNumber)))
  {
    returnValue = false;
      sweetAlert("Oops...", "No es una tarjeta válida", "error");
  }
  return returnValue;
}

var updateTotals = function(total)
{
  //total td for mobile
  var totalMobile = $('#total-mobile');

  //total td for wide-screen
  var totalWidescreeen = $('#total-wide');

  var totalString = "<strong>Total: $" + total + '</strong>';
  totalMobile.html(totalString);
  totalWidescreeen.html(totalString);
}
