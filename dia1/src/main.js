import './style.css';

const app = document.querySelector('#app');

app.style.display = 'none';

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

const button = document.querySelector('#button');
function showApp() {
  if (app.style.display === 'none') {
    app.style.display = 'block';
  } else {
    app.style.display = 'none';
  }
}

button.addEventListener('click', showApp);
