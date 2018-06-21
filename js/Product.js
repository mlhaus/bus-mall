'use strict';

function Product(name, filePath, description, price) {
  this.name = name || 'No Name';
  this.filePath = filePath || 'image-not-available.jpg';
  this.description = description || '';
  this.price = price || 0.00;
  this.showCount = 0;
  this.voteCount = 0;
  Product.all.push(this);
}
Product.all = [];
Product.totalVoteCount = 0;

function initialize() {
  new Product('R2D2 Suitcase', 'img/bag.jpg');
  new Product('Banana Slicer', 'img/banana.jpg');
  new Product('iPad/Toilet Paper Stand', 'img/bathroom.jpg');
  new Product('Toeless Rain Boots', 'img/boots.jpg');
  new Product('Toaster/Hot Plate/Coffee Maker', 'img/breakfast.jpg');
  new Product('Meatball Bubble Gum', 'img/bubblegum.jpg');
  new Product('Oddly Designed Chair', 'img/chair.jpg');
  new Product('Legends of Cthulhu Action Figure', 'img/cthulhu.jpg');
  new Product('Duck Beak for Dogs', 'img/dog-duck.jpg');
  new Product('Canned Dragon Meat', 'img/dragon.jpg');
  new Product('Plastic Silverware Pen Caps', 'img/pen.jpg');
  new Product('Pet Sweep Dust Boots', 'img/pet-sweep.jpg');
  new Product('Pizza Slicer Scissors', 'img/scissors.jpg');
  new Product('Shark Sleeping Bag', 'img/shark.jpg');
  new Product('Baby Onesie Floor Sweeper', 'img/sweep.png');
  new Product('Star Wars Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
  new Product('Canned Unicorn Meat', 'img/unicorn.jpg');
  new Product('Moving Tentacle USB Drive', 'img/usb.gif');
  new Product('Poorly Designed Water Can', 'img/water-can.jpg');
  new Product('Interestingly Designed Wine Glass', 'img/wine-glass.jpg');

  // console.log('Initialized Products: ', Product.all);
}

let numProductsToDisplay = 3;
let productsPreviouslyDisplayed = [];
let productsToDisplay = [];

function generateRandomImages(){
  while(productsToDisplay.length < numProductsToDisplay){
    let randomNumber = Math.floor(Math.random() * Product.all.length);
    if(productsToDisplay.includes(randomNumber) || productsPreviouslyDisplayed.includes(randomNumber)){
      continue;
    }
    productsToDisplay.push(randomNumber);
  }
}

function generateHTMLToDisplayImages(){
  let imageRow = document.getElementById('productImages');
  imageRow.innerHTML = '';
  for(let i = 0; i < numProductsToDisplay; i++){
    let div = document.createElement('div');
    div.classList.add('column');
    div.style.width = ((100 / numProductsToDisplay) - ((numProductsToDisplay - 1) / numProductsToDisplay)) + '%';
    imageRow.appendChild(div);
    let h4 = document.createElement('h4');
    h4.textContent = Product.all[productsToDisplay[i]].name;
    div.appendChild(h4);
    let img = document.createElement('img');
    img.setAttribute('src', Product.all[productsToDisplay[i]].filePath);
    img.setAttribute('alt', Product.all[productsToDisplay[i]].description);
    img.setAttribute('title', Product.all[productsToDisplay[i]].description);
    div.appendChild(img);
  }
}

function displayProducts() {
  productsPreviouslyDisplayed = productsToDisplay;
  productsToDisplay = [];
  if(Product.all.length > numProductsToDisplay * 2) {
    generateRandomImages();
    generateHTMLToDisplayImages();
  }
  else {
    console.log('You need to add at least ' + (numProductsToDisplay * 2 + 1 - Product.all.length) + ' more product(s).');
  }
}

window.addEventListener('load', function() {
  if (Product.all.length === 0) {
    initialize();
  }
  displayProducts();
});