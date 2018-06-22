/* globals Product */
'use strict';

const table = document.getElementById('summaryTable');

function renderTableHead() {
  const thead = table.querySelector('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = 'Image';
  tr.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'Product Name';
  tr.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'Number of Votes';
  tr.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'Show Count';
  tr.appendChild(th);
  th = document.createElement('th');
  th.textContent = 'Percentage';
  tr.appendChild(th);
}

function renderTableBody() {
  const tbody = table.querySelector('tbody');
  
  for(let i = 0; i < Product.all.length; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute('src', Product.all[i].filePath);
    img.setAttribute('alt', Product.all[i].name);
    td.appendChild(img);
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = Product.all[i].name;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = Product.all[i].voteCount;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = Product.all[i].showCount;
    tr.appendChild(td);
    td = document.createElement('td');
    (Product.all[i].showCount === 0) ? td.textContent = ('0%') : td.textContent = (Math.round(Product.all[i].voteCount / Product.all[i].showCount * 10000) / 100+ '%');

    tr.appendChild(td);
  }
}

function displaySummaryTable() {
  renderTableHead();
  renderTableBody();
}