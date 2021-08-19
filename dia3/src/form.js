const formatName = (string) =>
  string
    .toLowerCase()
    .replace(/(?:^|\s)(?!da|de|do)\S/g, (l) => l.toUpperCase());

const nameInput = document.querySelector('[data-js="name"]');

nameInput.addEventListener("input", ({ target }) => {
  const inputFormated = formatName(target.value);
  nameInput.value = inputFormated;
});

formatName("Guilherme de prais");
