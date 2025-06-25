// Example data for the league table
const leagueData = [
  { username: 'TankMaster', kd: 2.1, official: 'Yes', matches: 10, wins: 7, losses: 3 },
  { username: 'BlitzPro', kd: 1.7, official: 'Yes', matches: 9, wins: 5, losses: 4 },
  { username: 'RookieJoe', kd: 0.95, official: 'No', matches: 3, wins: 1, losses: 2 },
];

// Example data for recent matches
const matches = [
  { teams: 'TankMaster vs BlitzPro', score: '5-3', date: '2025-06-20' },
  { teams: 'BlitzPro vs RookieJoe', score: '4-5', date: '2025-06-18' },
  { teams: 'TankMaster vs RookieJoe', score: '6-2', date: '2025-06-15' },
];

function populateLeagueTable() {
  const tbody = document.querySelector('#leagueTable tbody');
  tbody.innerHTML = '';
  leagueData.forEach(player => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${player.username}</td>
      <td>${player.kd}</td>
      <td>${player.official}</td>
      <td>${player.matches}</td>
      <td>${player.wins}</td>
      <td>${player.losses}</td>
    `;
    tbody.appendChild(tr);
  });
}

function populateMatches() {
  const matchList = document.getElementById('matchList');
  matchList.innerHTML = '';
  matches.forEach(match => {
    const li = document.createElement('li');
    li.textContent = `${match.date}: ${match.teams} (${match.score})`;
    matchList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateLeagueTable();
  populateMatches();

  document.getElementById('scrollToTable').addEventListener('click', () => {
    document.getElementById('league').scrollIntoView({ behavior: 'smooth' });
  });
});
