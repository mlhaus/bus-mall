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

let sortedProducts = [];

function sortDataLargestToSmallest() {
  for (let product in Product.all) {
    sortedProducts.push(
      {
        name: Product.all[product].name,
        filePath: Product.all[product].filePath,
        description: Product.all[product].description,
        price: Product.all[product].price,
        showCount: Product.all[product].showCount,
        voteCount: Product.all[product].voteCount,
      }
    );
  }

  sortedProducts.sort(function(a, b) {
    return b.voteCount - a.voteCount;
  });
}

function renderTableBody() {
  const tbody = table.querySelector('tbody');
  for(let i = 0; i < Product.all.length; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute('src', sortedProducts[i].filePath);
    img.setAttribute('alt', sortedProducts[i].name);
    td.appendChild(img);
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = sortedProducts[i].name;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = sortedProducts[i].voteCount;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = sortedProducts[i].showCount;
    tr.appendChild(td);
    td = document.createElement('td');
    (sortedProducts[i].showCount === 0) ? td.textContent = ('0%') : td.textContent = (Math.round(sortedProducts[i].voteCount / sortedProducts[i].showCount * 10000) / 100+ '%');

    tr.appendChild(td);
  }
}

function displaySummaryTable() {
  renderTableHead();
  sortDataLargestToSmallest();
  renderTableBody();
}