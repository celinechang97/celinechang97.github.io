function Dog (name, age) {
  this.name = name;
  this.age = age;
  this.type = "Dog";
}

function Otter (name, age) {
  this.name = name;
  this.age = age;
  this.type = "Otter";
}

function Cat (name, age) {
  this.name = name;
  this.age = age;
  this.type = "Cat";
}

/*
var ritz = new Dog("Ritz", 6);
var carlson = new Cat("Carlson", 1);
var iz = new Otter("Iz", 6);
*/

var animal = [new Dog(), new Otter(), new Cat()];
var names = ["Ritz", "Carlson", "Iz"];

/*
function generateRandomIndex(maxIndex) {
	maxIndex = Math.floor(Math.random() * 10);
	console.log(maxIndex);
};

generateRandomIndex();
*/

function generateRandomIndex(maxIndex) {
	return (Math.floor(Math.random() * maxIndex));
};

function generateRandomAge(maxIndex){
  return (Math.floor(Math.random() * maxIndex));
}

function generateRandomName(){
  var randomName = (Math.floor(Math.random() * names.length));
  return names[randomName];
}


function generateRandomAnimal(){
  var randomIndex = generateRandomIndex(animal.length);
  var randomAnimal = animal[randomIndex];

  if (randomAnimal.type == "Dog")
  {
    return new Dog(generateRandomName(), generateRandomAge(13))
  }

  if (randomAnimal.type == "Otter")
  {
    return new Otter(generateRandomName(), generateRandomAge(13))
  }

  if (randomAnimal.type == "Cat")
  {
    return new Cat(generateRandomName(), generateRandomAge(13))
  }
} 

/*
var thisAnimal = generateRandomAnimal();
console.log(thisAnimal.name + " is " + thisAnimal.age + " years old.");
*/


$(document).ready(function(){
    var animal = generateRandomAnimal();
    $("#animal-properties").text(animal.name + " is " + animal.age + " years old.");
  });


