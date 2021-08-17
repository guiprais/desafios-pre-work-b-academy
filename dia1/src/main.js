import "./style.css";

const app = document.querySelector('[data-js="app"]');
const button = document.querySelector('[data-js="button"]');

app.style.display = "none";

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;
button.innerHTML = "Clique aqui para exibir as boas-vindas";

button.addEventListener("click", (event) => {
  event.preventDefault;

  if (app.style.display === "none") {
    app.style.display = "block";
    button.innerHTML = "Clique aqui para esconder as boas-vindas";
  } else {
    app.style.display = "none";
    button.innerHTML = "Clique aqui para exibir as boas-vindas";
  }
});
