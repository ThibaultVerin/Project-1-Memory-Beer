let ranking = [
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

for (let i = 0; i < ranking.length; i++) {
  const myTable = document.querySelector('tbody');
  myTable.innerHTML += `<tr>
        <td>${i + 1}</td>
        <td>${ranking[i].name}</td>
        <td>${ranking[i].score}</td>
    </tr>`;
}
console.log(ranking);
