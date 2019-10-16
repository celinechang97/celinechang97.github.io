/* FOR IMAGE GALLERY ON DETAIL.HTML*/

var slideIndex = 1;

/*only call this function on the specific html !!!!!!!!! */
//showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log("thisshowsup");
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









/* FOR QUANTITY SELECTION INDICATION ON DETAILS.HTML*/
var q1 = document.getElementById("quant-1");
var q3= document.getElementById("quant-3");
var q6 = document.getElementById("quant-6");
var q12 = document.getElementById("quant-12");
var thisIsQuantity = 0;


function forQuantity(ele){
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








/* FOR GLAZE SELECTION INDICATION ON DETAILS.HTML*/
var g1 = document.getElementById("glaze-none");
var g2= document.getElementById("glaze-sm");
var g3 = document.getElementById("glaze-vm");
var g4 = document.getElementById("glaze-dc");
var thisIsGlaze = "";

function forGlaze(ele){
  if (ele===0){
    g1.setAttribute("id", "selected");
    g2.setAttribute("id", "unselected");
    g3.setAttribute("id", "unselected");
    g4.setAttribute("id", "unselected");
    thisIsGlaze = "none";
    console.log(thisIsGlaze);
  }

  else if (ele===1){
    g1.setAttribute("id", "unselected");
    g2.setAttribute("id", "selected");
    g3.setAttribute("id", "unselected");
    g4.setAttribute("id", "unselected");
    thisIsGlaze = "sm";
    console.log(thisIsGlaze);
  }

  else if (ele===2){
    g1.setAttribute("id", "unselected");
    g2.setAttribute("id", "unselected");
    g3.setAttribute("id", "selected");
    g4.setAttribute("id", "unselected");
    thisIsGlaze = "vm";
    console.log(thisIsGlaze);
  }

  else if (ele===3){
    g1.setAttribute("id", "unselected");
    g2.setAttribute("id", "unselected");
    g3.setAttribute("id", "unselected");
    g4.setAttribute("id", "selected");
    thisIsGlaze = "dc";
    console.log(thisIsGlaze);
  }
}






/*UPDATE CART COUNT*/
function cartCount(){
  var count_text = document.getElementById("cart-count").innerHTML;
  var count_int = parseInt(count_text,10)
  count_int += 1;
  document.getElementById("cart-count").innerHTML = count_int;
}






/*ADDING TO CART*/

/* BEFORE I WENT TO PRERNA'S OH ON FRIDAY
var childDiv = document.getElementById("cart-product")

var updateImage = childDiv.childNodes[1].innerHTML;
var updateDesc = childDiv.childNodes[3].innerHTML;
var updatePrice = childDiv.childNodes[5].innerHTML;
var updateQuantity = childDiv.childNodes[7].innerHTML;
var updateTotalPrice = childDiv.childNodes[9].innerHTML;
*/

var errorMsg = document.getElementById("errorMessage");
var addButton = document.getElementById("add-button")

var parentDiv = document.getElementById("cart");
var childDiv = "<div id=\"cart-product\" class=\"cart-row\"><div id=\"cart-item-image\" class=\"cart-product-column\"> <img class=\"imagee\" src=\"blackberrybun.jpg\" alt=\"blackberry bun\"> </div><div id=\"cart-item-desc\" class=\"cart-product-column\"> Blackberry + None </div><div id=\"cart-item-price\" class=\"cart-product-column\">$3.50 </div><div id=\"cart-item-quantity\" class=\"cart-product-column\">1</div><div id=\"cart-item-total-price\" class=\"cart-product-column\"> $3.50</div><div id=\"cart-item-remove\" class=\"cart-product-column\">remove</div></div>"
console.log(childDiv);


var thisIsQuantityString = thisIsQuantity.toString();

//later...onload...
childDiv = "<div id=\"cart-product\" class=\"cart-row\"><div id=\"cart-item-image\" class=\"cart-product-column\"> <img class=\"imagee\" src=\"blackberrybun.jpg\" alt=\"blackberry bun\"> </div><div id=\"cart-item-desc\" class=\"cart-product-column\">" + "None" + "</div><div id=\"cart-item-price\" class=\"cart-product-column\">$3.50 </div><div id=\"cart-item-quantity\" class=\"cart-product-column\">1</div><div id=\"cart-item-total-price\" class=\"cart-product-column\"> $3.50</div><div id=\"cart-item-remove\" class=\"cart-product-column\">remove</div></div>"


function Item (name, price, quantity, totalPrice) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}

function addingtoCart(){
  /*
  console.log(thisIsQuantity);
  console.log(thisIsGlaze);
  console.log(typeof(thisIsQuantity));
  console.log(typeof(thisIsGlaze));
  thisIsGlaze = already a string
  thisIsQuantity = a number
  */

  if (thisIsQuantity === 0 || thisIsGlaze === ""){
    errorMsg.setAttribute("id", "showErrorMessage");
  }

  else {
    errorMsg.setAttribute("id", "errorMessage")
    cartCount();
    addButton.innerHTML = "Added!";
    console.log(thisIsQuantity);
    console.log(thisIsQuantityString);

    //parentDiv += childDiv;
    //document.getElementById("cart").innerHTML += childDiv;

    var item = new Item()


  }

}





console.log(parentDiv);















/*me messing around to figure out adding to cart*/
/*
function testingGlaze(){
  if (thisIsGlaze === "none"){

  }

  else if (thisIsGlaze === "sm"){
    
  }

  else if (thisIsGlaze === "vm"){
    
  }

  else if (thisIsGlaze === "dc"){
    
  }
}


function testingGlaze(){
  if (thisIsGlaze === "none"){

  }

  else if (thisIsGlaze === "sm"){
    
  }

  else if (thisIsGlaze === "vm"){
    
  }

  else if (thisIsGlaze === "dc"){
    
  }
}



*/
var cart = [];

function Item (name, price, quantity, totalPrice) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}

function addItem (type, glaze, price, quantity){
  var item = new Item (type, glaze, price, quantity);
  cart.push(item);
}



function addItemToCart(name, price, quantity, totalPrice){
  var item = new Item(name, price, quantity, totalPrice);
  cart.push(item);
}















