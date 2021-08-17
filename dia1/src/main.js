import "./style.css";

const app = document.querySelector('[data-js="app"]');
const button = document.querySelector('[data-js="button"]');

app.style.display = "none";

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

button.addEventListener("click", (event) => {
  event.preventDefault;

  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
});
