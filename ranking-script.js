let rankingTable = [
  {
    name: 'M. Esclave',
    score: 230,
  },
  {
    name: 'Dark Vador',
    score: 180,
  },
  {
    name: 'Homer',
    score: 10,
  },
  {
    name: 'Rick',
    score: 110,
  },
  {
    name: 'Morty',
    score: 100,
  },
  {
    name: 'Blake',
    score: 210,
  },
  {
    name: 'Mortimer',
    score: 200,
  },
  {
    name: 'Aspegix',
    score: 30,
  },
  {
    name: 'Grodebilix',
    score: 20,
  },
  {
    name: 'M. Garrison',
    score: 200,
  },
];

if (localStorage.isOver === 'true') {
  rankingTable.push({
    name: localStorage.name1,
    score: parseInt(localStorage.score1),
  });

  if (localStorage.hasOwnProperty('name2')) {
    rankingTable.push({
      name: localStorage.name2,
      score: parseInt(localStorage.score2),
    });
  }
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
