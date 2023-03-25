// I decided to make the scores random instead of using the JSON file.

const averageElement = document.querySelector("#average");
const elements = [
  document.querySelector("#reaction"),
  document.querySelector("#memory"),
  document.querySelector("#verbal"),
  document.querySelector("#visual"),
];
const ratingElement = document.querySelector("#rating");
const commentElement = document.querySelector("#comment");

function getScores() {
  const scores = [];

  elements.forEach((element) => {
    var score = Math.floor(Math.random() * 100 + 1);
    element.textContent = score;
    scores.push(score);
  });

  var total = 0;
  scores.forEach((score) => (total += score));

  var average = Math.round(total / 4);
  averageElement.textContent = average;

  if (average >= 70) {
    ratingElement.textContent = "Great";
    commentElement.textContent =
      "You scored higher than 65% of the people who have taken these tests.";
  } else if (average >= 40) {
    ratingElement.textContent = "Average";
    commentElement.textContent =
      "You scored roughly the same as the other people who have taken these tests.";
  } else {
    ratingElement.textContent = "Bad";
    commentElement.textContent =
      "You scored lower then 70% of the other people who have taken these tests.";
  }
}
getScores();
