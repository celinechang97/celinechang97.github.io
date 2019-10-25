
/* FOR IMAGE GALLERY ON DETAIL.HTML*/

/*only call this function on the specific html !!!!!!!!! */
//showSlides(slideIndex);
// the above got fixed because I justed called the function onload for details.html

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}






/* GETTING THE TYPE OF BUN*/
var typeOfBun = "";

function getTypeOfBun(ele){
  if (ele === 0){
    typeOfBun = "Original";
    localStorage.setItem("storedTypeOfBun", typeOfBun);
  }

  else if (ele === 1){
    typeOfBun = "Blackberry";
    localStorage.setItem("storedTypeOfBun", typeOfBun);
  }

  else if (ele === 2){
    typeOfBun = "Walnut";
    localStorage.setItem("storedTypeOfBun", typeOfBun);
  }

  else if (ele === 3){
    typeOfBun = "Original - GF";
    localStorage.setItem("storedTypeOfBun", typeOfBun);
  }

  else if (ele === 4){
    typeOfBun = "Pumpkin Spice";
    localStorage.setItem("storedTypeOfBun", typeOfBun);
  } 

  else if (ele === 5){
    typeOfBun = "Caramel Pecan";
    localStorage.setItem("storedTypeOfBun", typeOfBun);
  }  
}

function displayTypeOfBun(){
  typeOfBun = localStorage.getItem("storedTypeOfBun");
}

/* FOR QUANTITY SELECTION INDICATION ON DETAILS.HTML*/
/* AND */
/* FOR GLAZE SELECTION INDICATION ON DETAILS.HTML*/

var addButton = document.getElementById("add-button")

var q1 = document.getElementById("quant-1");
var q3= document.getElementById("quant-3");
var q6 = document.getElementById("quant-6");
var q12 = document.getElementById("quant-12");
var thisIsQuantity = 0;

var g1 = document.getElementById("glaze-none");
var g2= document.getElementById("glaze-sm");
var g3 = document.getElementById("glaze-vm");
var g4 = document.getElementById("glaze-dc");
var thisIsGlaze = "";

function forQuantity(ele){
  if (thisIsQuantity !== 0 || thisIsGlaze!==""){
    addButton.innerHTML = "Add to Cart";
  }

  if (ele === 1){
    q1.setAttribute("id", "selected");
    q3.setAttribute("id", "unselected");
    q6.setAttribute("id", "unselected");
    q12.setAttribute("id", "unselected");
    thisIsQuantity = 1;
    console.log(thisIsQuantity);
  }

  else if (ele === 3){
    q1.setAttribute("id", "unselected");
    q3.setAttribute("id", "selected");
    q6.setAttribute("id", "unselected");
    q12.setAttribute("id", "unselected");
    thisIsQuantity = 3;
    console.log(thisIsQuantity);
  }

  else if (ele === 6){
    q1.setAttribute("id", "unselected");
    q3.setAttribute("id", "unselected");
    q6.setAttribute("id", "selected");
    q12.setAttribute("id", "unselected");
    thisIsQuantity = 6;
    console.log(thisIsQuantity);
  }

  else if (ele === 12){
    q1.setAttribute("id", "unselected");
    q3.setAttribute("id", "unselected");
    q6.setAttribute("id", "unselected");
    q12.setAttribute("id", "selected");
    thisIsQuantity = 12;
    console.log(thisIsQuantity);
  }
}

function forGlaze(ele){
   if (thisIsQuantity !== 0 || thisIsGlaze!==""){
    addButton.innerHTML = "Add to Cart";
    }

  if (ele===0){
    g1.setAttribute("id", "selected");
    g2.setAttribute("id", "unselected");
    g3.setAttribute("id", "unselected");
    g4.setAttribute("id", "unselected");
    thisIsGlaze = "None";
    console.log(thisIsGlaze);
  }

  else if (ele===1){
    g1.setAttribute("id", "unselected");
    g2.setAttribute("id", "selected");
    g3.setAttribute("id", "unselected");
    g4.setAttribute("id", "unselected");
    thisIsGlaze = "Sugar-Milk";
    console.log(thisIsGlaze);
  }

  else if (ele===2){
    g1.setAttribute("id", "unselected");
    g2.setAttribute("id", "unselected");
    g3.setAttribute("id", "selected");
    g4.setAttribute("id", "unselected");
    thisIsGlaze = "Vanilla-Milk";
    console.log(thisIsGlaze);
  }

  else if (ele===3){
    g1.setAttribute("id", "unselected");
    g2.setAttribute("id", "unselected");
    g3.setAttribute("id", "unselected");
    g4.setAttribute("id", "selected");
    thisIsGlaze = "Double Chocolate";
    console.log(thisIsGlaze);
  }
}






/*UPDATE CART COUNT*/
//var count_text = document.getElementById("cart-count").innerHTML;
//var count_int = parseInt(count_text,10)
var count_int = 0;

/*
function cartCount(){
  if (typeof(Storage) === "undefined"){
    document.getElementById("cart-count").innerHTML = "0";
  }
  else if (localStorage.clickcount){
    localStorage.clickcount = Number(localStorage.clickcount)+1;
    count_int+=1;
  }
  else {
    localStorage.clickcount = 1;
  }
  document.getElementById("cart-count").innerHTML = localStorage.clickcount;
}
*/

function cartCount(){
  count_int +=1;
  count_int_serialized = JSON.stringify(count_int);
  localStorage.setItem("storedCount", count_int_serialized);
  displayCartCount();
}


function displayCartCount(){
  count_int_deserialized = JSON.parse(localStorage.getItem("storedCount"));
  document.getElementById("cart-count").innerHTML = count_int_deserialized;
}





/*ADDING TO CART*/

function Item (name, price, quantity, totalPrice) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}



var errorMsg = document.getElementById("errorMessage");
var cart = [];
var cart_serialized = [];
var cart_deserialized = [];
var priceOfBun = 0;


function addItem(item){
  cart.push(item);
}



function addingtoCart(){
  if (thisIsQuantity === 0 || thisIsGlaze === ""){
    errorMsg.setAttribute("id", "showErrorMessage");
    var element = document.getElementById("add-button");
    element.classList.add("changing");
  }

  else {
    errorMsg.setAttribute("id", "errorMessage")
    cartCount();
    addButton.innerHTML = "Added!";
    
    var item_name = typeOfBun + " + " + thisIsGlaze;

    if (typeOfBun === "Original"){
      priceOfBun = 3;
    }
    else if (typeOfBun === "Blackberry" || typeOfBun === "Walnut" || typeOfBun === "Original - GF"){
      priceOfBun = 3.5;
    }
    else if (typeOfBun === "Pumpkin Spice" || typeOfBun === "Caramel Pecan"){
      priceOfBun = 4;
    }

    var total_price = priceOfBun*thisIsQuantity;
    var item = new Item(item_name, priceOfBun, thisIsQuantity, total_price);
    addItem(item);
    cart_serialized = JSON.stringify(cart);
    localStorage.setItem("storedCart", cart_serialized);
  }

}

/*
function displayCart(){
  cart = JSON.parse(localStorage.getItem("storedCart"));
}
*/



/* WHEN ONLOAD...GO THROUGH THE ARRAY AND ADD...*/

var parentDiv = document.getElementById("cart");
var childDiv = "";
var subtotal = 0;
var tax = 0;
var shipping = 3;
var total = 0;
var picture = "";

function createCart(){
  cart_deserialized = JSON.parse(localStorage.getItem("storedCart"));
  typeOfBun = localStorage.getItem("storedTypeOfBun");

  for (i=0; i<cart_deserialized.length; i++){
   var current_item = cart_deserialized[i];
   subtotal += current_item.totalPrice;

   if (typeOfBun === "Original"){
    picture = "original.jpg";
   }
   else if (typeOfBun === "Blackberry"){
    picture = "blackberrybun.jpg";
   }
   else if (typeOfBun === "Walnut"){
    picture = "walnutbun.jpg";
   }
   else if (typeOfBun === "Original - GF"){
    picture = "originalgf.jpg";
   }
   else if (typeOfBun === "Pumpkin Spice"){
    picture = "pumpkinbun.jpg";
   }
   else if (typeOfBun === "Caramel Pecan"){
    picture = "pecanbun.jpg";
   }
   
   //these are the keys
   /*
   current_item.name;
   current_item.price.toString();
   current_item.quantity.toString();
   current_item.totalPrice.toString();
   */
 
   childDiv += "<div id=\"" + "id" + i + "\" class=\"cart-row cart-product\"><div id=\"cart-item-image\" class=\"cart-product-column\"> <img class=\"imagee\" src=\"" + picture + "\" " + "alt=\"cinbun\"> </div><div id=\"cart-item-desc\" class=\"cart-product-column\">" + current_item.name + "</div><div id=\"cart-item-price\" class=\"cart-product-column\">" + "$" + current_item.price.toFixed(2).toString() + "</div><div id=\"cart-item-quantity\" class=\"cart-product-column\">" + current_item.quantity.toString() + "</div><div id=\"cart-item-total-price\" class=\"cart-product-column\">" + "$" + current_item.totalPrice.toFixed(2).toString() + "</div><div onclick=\"removeItem(" + i + ")\" id=\"cart-item-remove\" class=\"cart-product-column\">remove</div></div>";
  }

  parentDiv.innerHTML += childDiv;
  
  tax = subtotal*0.1;
  total = subtotal + shipping + tax;
  document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2).toString();
  document.getElementById("shipping").innerHTML = "$" + shipping.toFixed(2).toString();
  document.getElementById("tax").innerHTML = "$" + tax.toFixed(2).toString();
  document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();
}


/*
function confirmRemove(ele){
  console.log(ele);
  var txt;
  if (confirm("Are you sure you want to remove this item?")) {
    removeItem(ele);
  } 
}
*/


function removeItem(ele){
  for (i=0; i<cart_deserialized.length;i++){
    if (i === ele){
      //REMOVING IT FROM SCREEN
      var stringi = i.toString();
      var theid = "id"+stringi;
      var theElement = document.getElementById(theid);
      theElement.parentNode.removeChild(theElement);


      //CHANGING ORDER SUMMARY (COST)
      var removingCost = cart_deserialized[i].totalPrice;
      subtotal -= removingCost;
      document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2).toString();
      tax = subtotal*0.1;
      document.getElementById("tax").innerHTML = "$" + tax.toFixed(2).toString();
      total = subtotal + shipping + tax;
      document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();


      //UPDATING LOCAL STORAGE
      cart_deserialized.splice(i, 1);
      count_int_deserialized-=1
      count_int = count_int_deserialized
      count_int_serialized = JSON.stringify(count_int);
      localStorage.setItem("storedCount", count_int_serialized)
      displayCartCount();
      cart = cart_deserialized;
      cart_serialized = JSON.stringify(cart);
      localStorage.setItem("storedCart", cart_serialized);
    }
  }
}






// NEXT TO DO = ONLOAD FOR BUN, DESERIALIZE THE UPDATED CART (because i pushed the edited cart to local storage as cart)






/*ADDING TO CART*/

/* BEFORE I WENT TO PRERNA'S OH ON FRIDAY
var childDiv = document.getElementById("cart-product")
var updateImage = childDiv.childNodes[1].innerHTML;
var updateDesc = childDiv.childNodes[3].innerHTML;
var updatePrice = childDiv.childNodes[5].innerHTML;
var updateQuantity = childDiv.childNodes[7].innerHTML;
var updateTotalPrice = childDiv.childNodes[9].innerHTML;
*/

/*
  console.log(typeof(thisIsQuantity));
  console.log(typeof(thisIsGlaze));
  thisIsGlaze = already a string
  thisIsQuantity = a number
*/






//TESTING WITH MADE UP ITEMS FIRST
/*
var firstItem = new Item("Original + None", 3.5, 1, 3.5);
var secondItem = new Item("Original + Sugar-Milk", 3.5, 2, 7.0);
var test_cart=[firstItem, secondItem]
firstItem_serialized = JSON.stringify(firstItem);
console.log(firstItem_serialized);
localStorage.setItem("items", "firstItem_serialized");
console.log(localStorage);
*/

