'use strict';
console.log('app.js is connected.');

var imageElements = document.getElementsByTagName('img')

var img1Clicked = 0;
var img2Clicked = 0;
var img3Clicked = 0;
var totalClicks = 0;

// images to be displayed and number of guesses by the user
var productIndex1 = 0;
var productIndex2 = 1;
var productIndex3 = 2;
var rounds = 25;
var allProducts = [];

function Products(name, imgUrl){
  this.name = name;
  this.imgUrl = imgUrl;
  this.totalClicks = 0;
  this.timesShown = 0;
  allProducts.push(this);
}
//create product objects
var bag = new Products('Bag', 'img/bag.jpg');
var banana = new Products('Banana','img/banana.jpg');
var bathroom = new Products('Bathroom','img/bathroom.jpg');
var boots = new Products('Boots','img/boots.jpg');
var breakfast = new Products('Breakfast','img/breakfast.jpg');
var bugglegum = new Products('Bubblegum','img/bubblegum.jpg');
var chair = new Products('Chair', 'img/chair.jpg');
var cthulth = new Products('Cthulhu', 'img/cthulhu.jpg');
var docDuck = new Products('Dog-Duck', 'img/dog-duck.jpg');
var dragon =new Products('Dragon','img/dragon.jpg');
var pen = new Products('Pen', 'img/pen.jpg');
var pet = new Products('Pet-Sweep', 'img/pet-sweep.jpg');
var scissors = new Products('Scissors','img/scissors.jpg');
var shark = new Products('Shark', 'img/shark.jpg');
var sweep = new Products('Sweep', 'img/sweep.png');
var tauntuan = new Products('Tauntaun','img/tauntaun.jpg');
var unicorn = new Products('Unicorn','img/unicorn.jpg');
var usb = new Products('Usb','img/usb.gif');
var waterCan= new Products('Water-can', 'img/water-can.jpg');
var wine = new Products('Wine-Glasses','img/wine-glass.jpg');

var totalClicks = 0;
function imageWasClicked(event) {
  totalClicks++;
  if(event.srcElement.id === '1'){
  allProducts[productIndex1].totalClicks++;
  img1Clicked++;
}
  else if(event.srcElement.id ==='2'){
    allProducts[productIndex2].totalClicks++;
    img2Clicked++;
  }
  else if(event.srcElement.id ==='3'){
    allProducts[productIndex3].totalClicks++;
    img3Clicked++;
  }  
  console.log('Position One Clicked', img1Clicked);
  console.log('Position Two Clicked', img2Clicked);
  console.log('Position Three Clicked', img3Clicked);
  console.log(totalClicks);
  //add logic so that we dont see the same images from click to click
var nextproductIndex1 = Math.floor(Math.random() * allProducts.length);
while(nextproductIndex1  === productIndex1  || nextproductIndex2 === nextproductIndex1  || nextproductIndex3 === nextproductIndex1){
nextproductIndex1 = Math.floor(Math.random() * allProducts.length);
}
var nextproductIndex2 = Math.floor(Math.random() * allProducts.length);
while(nextproductIndex2 === productIndex2  || nextproductIndex2 === nextproductIndex1 || nextproductIndex2 === nextproductIndex3){
nextproductIndex2 = Math.floor(Math.random() * allProducts.length);
}
var nextproductIndex3 = Math.floor(Math.random() * allProducts.length);
while(nextproductIndex3 === productIndex3 || nextproductIndex3 === nextproductIndex2 || nextproductIndex3 === nextproductIndex1){
nextproductIndex3 = Math.floor(Math.random() * allProducts.length);
}
//set up a passing a variable by reference to productIndex 1 and 2 and 3
productIndex1 = nextproductIndex1;
productIndex2 = nextproductIndex2;
productIndex3 = nextproductIndex3;

//Pick a random pircture to display
imageElements[0].src = allProducts[productIndex1].imgUrl;
allProducts[productIndex1].timesShown++;
imageElements[1].src = allProducts[productIndex2].imgUrl;
allProducts[productIndex2].timesShown++;
imageElements[2].src = allProducts[productIndex3].imgUrl;
allProducts[productIndex3].timesShown++;
//calcuale rounds
if(totalClicks >= rounds){
  var footerElement = document.getElementsByTagName('footer')[0];
  if(footerElement.firstElementChild){
    footerElement.firstElementChild.remove();
  }
  footerElement.textContent = 'You picked products alot of times'
  var asideUL = document.getElementById('voteResults');

  for(var i = 0; i < allProducts.length;i++){
    var voteResultsListItem = document.createElement('li');
  //adding a template literalto utilize the object properties
    voteResultsListItem.textContent = `${allProducts[i].name} was clicked on ${allProducts[i].totalClicks} times and was shown ${allProducts[i].timesShown} times.`;
    asideUL.appendChild(voteResultsListItem);  
  }
}
}
//Create the event listner
for(var i = 0; i < imageElements.length; i++) {
  console.log('')
  imageElements[i].addEventListener('click',imageWasClicked);
}
