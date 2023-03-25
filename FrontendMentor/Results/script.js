// I decided to make the scores random instead of using the JSON file.

const averageElement = document.querySelector("#average");

const scores = [];
const elements = [
  document.querySelector("#reaction"),
  document.querySelector("#memory"),
  document.querySelector("#verbal"),
  document.querySelector("#visual"),
];

elements.forEach((element) => {
  var score = Math.floor(Math.random() * 100 + 1);
  element.textContent = score;
  scores.push(score);
});

var total = 0;
scores.forEach((score) => (total += score));

averageElement.textContent = Math.round(total / 4);
