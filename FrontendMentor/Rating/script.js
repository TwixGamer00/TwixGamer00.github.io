const options = document.querySelectorAll(".option");
const submit = document.querySelector(".submit");
const main = document.querySelector("main");
const score = document.querySelector(".score");

var rating = 0;
options.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector(".selected")?.classList.remove("selected");
    option.classList.add("selected");
    if (rating == 0) submit.classList.add("enabled");
    rating = parseInt(option.textContent);
    score.textContent = `You selected ${rating} out of 5`;
  });
});

submit.addEventListener("click", () => {
  if (rating == 0) return;

  main.classList.add("thanks");
});
