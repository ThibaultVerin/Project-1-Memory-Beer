let rankingTable = [
  {
    name: 'Jean',
    score: 2000,
  },
  {
    name: 'Antoine',
    score: 1800,
  },
  {
    name: 'Test',
    score: 1500,
  },
  {
    name: 'Test 2',
    score: 1300,
  },
  {
    name: 'Test 3',
    score: 1000,
  },
  {
    name: 'Test 4',
    score: 1300,
  },
  {
    name: 'Test 5',
    score: 1000,
  },
  {
    name: 'Test 6',
    score: 1300,
  },
  {
    name: 'Test 7',
    score: 1000,
  },
  {
    name: 'Test 8',
    score: 1000,
  },
];

if (localStorage.isOver === 'true') {
  rankingTable.push({
    name: localStorage.name,
    score: parseInt(localStorage.score),
  });
}
function compare(a, b) {
  if (a.score > b.score) {
    return -1;
  } else if (b.score < a.score) {
    return 1;
  } else return 0;
}

let sortedRankingTable = rankingTable.sort(compare);
console.log(sortedRankingTable);

for (let i = 0; i < sortedRankingTable.length; i++) {
  const myTable = document.querySelector('tbody');
  myTable.innerHTML += `<tr>
  <td>${i + 1}</td><td>${sortedRankingTable[i].name}</td><td>${
    sortedRankingTable[i].score
  }</td>
  </tr>`;
}
console.log(sortedRankingTable);
