'use strict';

Product.all = [];

function Product(name, imgSrc, description, price){
  this.name = name || 'No Name';
  this.imgSrc = imgSrc || 'image-not-available.jpg';
  this.description = description || '';
  this.price = price || 0.00;
  Product.all.push(this);
}