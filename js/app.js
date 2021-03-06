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
  // Second Step
  if (totalClicks){
    this.totalClicks = totalClicks;
   } else {this.totalClicks = 0;
   }
  this.timesShown = 0;
  allProducts.push(this);
}

//new function for the chart table
function getProductsArray(chartProducts) {
  var answer = [];
  for(i = 0; i < allProducts.length;i++){
    answer[i] = allProducts[i][chartProducts];
  }
  console.log(answer);
  return answer;
}
//Prototype for local storage
Products.prototype.toString = function() {
  
  return `${this.name} products is from this.name for the specified arrayIndex, clicked ${this.totalClicks}times`;
};

var savedProductsString = localStorage.getItem('savedProducts');

if (savedProductsString) {

  var arrayOfNotProductObject = JSON.parse(savedProductsString);

  for(var i = 0; i < arrayOfNotProductObject.length;i++) {
    
    new Products(arrayOfNotProductObject[i].name,
    arrayOfNotProductObject[i].imgUrl,
    arrayOfNotProductObject[i].totalClicks);
  }
} else {

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
}
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

  //Step one
  localStorage.setItem('savedProducts', JSON.stringify(allProducts));

  // footerElement.textContent = 'You picked products alot of times'
  var asideUL = document.getElementById('voteResults');
 for(var i = 0; i < allProducts.length;i++){
    var voteResultsListItem = document.createElement('li');
  //adding a template literalto utilize the object properties
    voteResultsListItem.textContent = `${allProducts[i].name} was clicked on ${allProducts[i].totalClicks} times and was shown ${allProducts[i].timesShown} times.`;
    asideUL.appendChild(voteResultsListItem);  
  }
  //Add in a remove the add event listener
  for(var i = 0; i < imageElements.length; i++){
    //   debugger;
    imageElements[i].removeEventListener('click', imageWasClicked);
  }
  runMyChart();
}
}//closing 
function runMyChart() {

  var ctx = document.getElementById('resultsChart').getContext('2d');
  
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: getProductsArray('name'),
          datasets: [{
              label: '# of Votes',
              data: getProductsArray('totalClicks'),
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 99, 112, 0.2)',
                  'rgba(54, 162, 215, 0.2)',
                  'rgba(255, 206, 76, 0.2)',
                  'rgba(75, 192, 182, 0.2)',
                  'rgba(153, 102, 245, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 99, 112, 1)',
                  'rgba(54, 162, 215, 1)',
                  'rgba(255, 206, 76, 1)',
                  'rgba(75, 192, 182, 1)',
                  'rgba(153, 102, 245, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
},);
}
//Create the event listner
for(var i = 0; i < imageElements.length; i++) {
  console.log('')
  imageElements[i].addEventListener('click',imageWasClicked);
}