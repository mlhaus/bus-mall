'use strict';

function Product(name, imgSrc, description, price) {
  this.name = name || 'No Name';
  this.imgSrc = imgSrc || 'image-not-available.jpg';
  this.description = description || '';
  this.price = price || 0.00;
  this.showCount = 0;
  this.voteCount = 0;
  Product.all.push(this);
}
Product.all = [];
Product.totalVoteCount = 0;

function initialize() {
  new Product("R2D2 Suitcase", "bag.jpg");
  new Product("Banana Slicer", "banana.jpg");
  new Product("iPad/Toilet Paper Stand", "bathroom.jpg");
  new Product("Toeless Rain Boots", "boots.jpg");
  new Product("Toaster/Hot Plate/Coffee Maker", "breakfast.jpg");
  new Product("Meatball Bubble Gum", "bubblegum.jpg");
  new Product("Oddly Designed Chair", "chair.jpg");
  new Product("Legends of Cthulhu Action Figure", "cthulhu.jpg");
  new Product("Duck Beak for Dogs", "dog-duck.jpg");
  new Product("Canned Dragon Meat", "dragon.jpg");
  new Product("Plastic Silverware Pen Caps", "pen.jpg");
  new Product("Pet Sweep Dust Boots", "pet-sweep.jpg");
  new Product("Pizza Slicer Scissors", "scissors.jpg");
  new Product("Shark Sleeping Bag", "shark.jpg");
  new Product("Baby Onesie Floor Sweeper", "sweep.png");
  new Product("Star Wars Tauntaun Sleeping Bag", "tauntaun.jpg");
  new Product("Canned Unicorn Meat", "unicorn.jpg");
  new Product("Moving Tentacle USB Drive", "usb.gif");
  new Product("Poorly Designed Water Can", "water-can.jpg");
  new Product("Interestingly Designed Wine Glass", "wine-glass.jpg");

  console.log('Initialized Products: ', Product.all);
}

window.addEventListener('load', function() {
  if (Product.all.length === 0) {
    initialize();
  }
});