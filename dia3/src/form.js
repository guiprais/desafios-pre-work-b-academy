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

const colorsOption = document.querySelectorAll("option");

colorsOption.forEach((color) => {
  color.addEventListener("click", ({ target }) => {
    const squares = document.querySelectorAll(
      '[data-js="square-container"] div'
    );

    const arrayOfSquares = [...squares];
    const findSquare = arrayOfSquares.find(
      (square) => square.style.backgroundColor === target.value
    );

    if (findSquare) {
      const container = document.querySelector('[data-js="square-container"]');
      const child = document.querySelector(`.${target.value}`);
      container.removeChild(child);
    } else {
      createSquare(target.value);
    }
  });
});

const createSquare = (color) => {
  const container = document.querySelector('[data-js="square-container"]');
  const square = document.createElement("div");
  square.className = `quadrado ${color}`;
  square.style.backgroundColor = `${color}`;

  container.appendChild(square);
};
