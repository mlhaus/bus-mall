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

function displaySummaryTable() {
  renderTableHead();
}

displaySummaryTable();