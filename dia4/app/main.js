import "./style.css";

const carsForm = document.querySelector('[data-js="submit-car-form"]');
const tableBody = document.querySelector('[data-js="table"]');
const url = "http://localhost:3333/cars";

async function request(url) {
  const result = await fetch(url);
  return await result.json();
}

function showCars() {
  tableBody.innerHTML = "";
  request(url).then((response) => {
    const tr = document.createElement("tr");

    if (response.length === 0) {
      const td = document.createElement("td");
      td.textContent = "Nenhum carro encontrado";
      tr.appendChild(td);

      tableBody.appendChild(tr);
    } else {
      response.forEach((car) => {
        const tr = document.createElement("tr");
        const values = Object.values(car);
        values.forEach((value) => {
          const td = document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
        });

        const deleteBtn = document.createElement("td");
        deleteBtn.addEventListener("click", () => deleteCar(car.plate));

        deleteBtn.innerHTML = `<button class="del-btn ${car.plate}">Deletar</button>`;
        tr.appendChild(deleteBtn);
        tableBody.appendChild(tr);
      });
    }
  });
}

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName];
};

carsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const getElement = getFormElement(event);
  const image = getElement("image").value;
  const brandModel = getElement("model").value;
  const year = getElement("year").value;
  const plate = getElement("plate").value;
  const color = getElement("color").value;

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image,
      brandModel,
      year,
      plate,
      color,
    }),
  })
    .then((result) => (result.ok ? showCars() : result.json()))
    .then((result) => {
      const error = document.querySelector('[data-js="error"]');
      error.innerHTML = "";

      if (!result) {
        return;
      }

      error.innerText = result.message;
      error.style.color = "red";

      carsForm.appendChild(error);
    });
});
function deleteCar(carPlate) {
  fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      plate: carPlate,
    }),
  }).then(() => showCars());
}

window.onload = showCars;
