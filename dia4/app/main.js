import "./style.css";

const carsForm = document.querySelector('[data-js="submit-car-form"]');
const tableBody = document.querySelector('[data-js="table"]');

async function request(url) {
  const result = await fetch(url);
  return await result.json();
}

request("http://localhost:3333/cars").then((response) => {
  if (response.length === 0) {
    console.log(response);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = "Nenhum carro encontrado";
    tr.appendChild(td);

    tableBody.appendChild(tr);
  }
});
