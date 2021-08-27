const carsForm = document.querySelector('[data-js="submit-car-form"]');
const tableBody = document.querySelector('[data-js="table"]');

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName];
};

carsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const getElement = getFormElement(event);
  const image = getElement("image");
  const model = getElement("model");
  const year = getElement("year");
  const plate = getElement("plate");
  const color = getElement("color");

  const elements = [image, model, year, plate, color];

  const tr = document.createElement("tr");
  elements.forEach((element) => {
    const td = document.createElement("td");

    td.textContent = element.value;
    tr.appendChild(td);
  });

  tableBody.appendChild(tr);

  event.target.reset();
  image.focus();
});
