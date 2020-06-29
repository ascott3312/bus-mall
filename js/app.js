'use strict';
console.log('app.js is connected.');

var imageElements = document.getElementsByTagName('img')

// images to be displayed and number of guesses by the user
var productIndex1 = 0;
var productIndex2 = 1;
var productIndex3 = 2;
var rounds = 25;
var allProducts = [];

function Products(name, imgUrl){
  this.name = name;
  this.imgUrl = imgUrl;
  this.timesClicked = 0;
  allProducts.push(this);
}

//create product objects
new Products('Bag', 'img/bag.jpg');
mew Products('Banana','img/banana.jpg');
new Products('Bathroom','img/bathroom.jpg');
new Products('Breakfast','img/breakfast.jpg');
new Products('Bubblegum'),'img/bubblegum.jpg');
new Producgts('Chair', 'img/chair.jpg');
new Products('Cthulhu', 'img/cthulhu.jpg');
new Products('Dog-Duck', 'img/dog-duck.jpg');
new Products('Dragon','img/dragon.jpg');
new Products('Pen', 'img/pen/jpg');
new Products('Pet-Sweep', 'img/pet-sweep.jpg');
new Products('Scissors','img/scissors.jpg');
new Products('Shark', 'img/shark.jpg');
new Products('Sweep', 'img/sweep.png');
new Products('Tauntaun','img/tauntaun.jpg');
new Proudcts('Unicorn''img/unicorn.jpg');
new Products('Usb','img/usb.gif');
new Prodcuts('Water-can', 'img/water-can.jpg');
new Products('Wine-Glasses','img/wine-glass.jpg');

var totalClicks = 0;
function imageWasClicked (event) {
  totalClicks++;
  if(event.srcElement.id === '1');
  allProducts[productIndex1].timesClicked++;
  else if(event.srcElement.id ==='2'){
    allProducts[productIndex2].timesClicked++;}
  else if(event.srcElement.id ==='3'){
    allProducts[productIndex3].timesClicked++;
  }  
}

//add logic so that we dont see the same images from click to click
var nextprouctIndex1 = (Math.floor(Math.random() * allProducts.length);
while(nextproductIndex1  === prouctIndex1) || (nextprouctIndex2 === nextprouctIndex1  || (nextproductIndex3 === nextprouctIndex1));
nextprouctIndex1 = (Math.floor(Math.random() * allProducts.length);

var nextprouctIndex2 = (Math.floor(Math.random() * allProducts.length);
while(nextproductIndex2 === productIndex2);
nextprouctIndex2 = (Math.floor(Math.random)() * allProducts.length);

var nextprouctIndex3 = (Math.floor(Math.random() * allProducts.length);
while(nextproductIndex3 === productIndex3);
nextproductIndex3 = (Math.floor(Math.random) * allProducts.length);

//set up a passing a variable by reference to productIndex 1 and 2 and 3
productIndex1 = nextprouctIndex1
productIndex2 = nextproductIndex2
productIndex3 = nextproductIndex3

//Pick a random pircture to display
imageElements[0].src = allProducts[productIndex1].imgUrl;
imageElements[1].src = allProducts[productIndex2].imgUrl;
imageElements[2].src = allProducts[productIndex3.imgUrl];

//calcuale rounds
if(totalClicks >= rounds){
  var footerElement = document.getElementsByTagName('footer')[0];
  if(footerElement.firstElementChild){
    footerElement.firstElementChild.remove();
  }
  footerElement.textContent = 'You picked products alot of times'
}

for(var = 0; i < imageElements.length, i++ ) {
  console.log()
  imageElements[i].addEventListener('click',imageWasClicked);
}  
