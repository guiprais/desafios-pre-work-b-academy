// Desafio 1
const formatName = (string) =>
  string
    .toLowerCase()
    .replace(/(?:^|\s)(?!da|de|do)\S/g, (l) => l.toUpperCase());

const nameInput = document.querySelector('[data-js="name"]');

const formatInput = () => {
  nameInput.addEventListener("input", ({ target }) => {
    const inputFormated = formatName(target.value);
    nameInput.value = inputFormated;
  });
};

formatInput();

// Desafio 2
const cores = ["red", "blue", "pink", "purple", "lightgreen"];

const createColorsOption = () => {
  const form = document.querySelector('[data-js="form"]');
  const select = document.createElement("select");
  select.setAttribute("multiple", "");

  cores.forEach((cor) => {
    const option = document.createElement("option");
    option.innerText = cor;
    select.appendChild(option);
  });

  form.appendChild(select);
};
createColorsOption();

const createSquareContainer = () => {
  const squareContainer = document.createElement("div");
  squareContainer.setAttribute("data-js", "square-container");
  document.body.appendChild(squareContainer);
};
createSquareContainer();

const inputSelect = document.querySelector("select");

inputSelect.addEventListener("change", ({ target }) => {
    const squaresContainer = document.querySelector('[data-js="square-container"]');
    squaresContainer.innerHTML = '';

  const selecteds = [...target.selectedOptions].map(
    (selected) => selected.value
  );

  selecteds.forEach((selected) => {
      createSquare(selected);
  });
});

const createSquare = (color) => {
  const container = document.querySelector('[data-js="square-container"]');
  const square = document.createElement("div");
  square.className = `quadrado ${color}`;
  square.style.backgroundColor = `${color}`;

  container.appendChild(square);
};
