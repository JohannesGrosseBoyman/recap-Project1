console.clear();

const form = document.querySelector(`[data-js="form"]`);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("Data ", data);
  console.log(data.question);
  const question = data.question;
  const answer = data.answer;
  const tag = data.tag;
  console.log(question, answer, tag);
  const main = document.querySelector(`[data-js="main"]`);
  const newSection = document.createElement("section");
  main.appendChild(newSection);
  newSection.classList.add("card-section");
  const newArticle = document.createElement("article");
  newSection.appendChild(newArticle);
  newArticle.classList.add("question-card");
  const newSvg = document.createElement("svg");
  newArticle.appendChild(newSvg);
  newSvg.classList.add("question-card__icon");
  // the following code I fetched from chatGPT
  // fetch the svg file
  fetch("assets/bookmark.svg")
    .then((response) => response.text())
    .then((svgContent) => {
      newSvg.innerHTML = svgContent; // Insert the SVG content
    })
    .catch((error) => console.error("Error fetching SVG:", error));
  // end of ChatGPT code
  const newQuestion = document.createElement("h3");
  newArticle.appendChild(newQuestion);
  newQuestion.classList.add("question-card__question");
  newQuestion.textContent = question;
  const newButton = document.createElement("button");
  newArticle.appendChild(newButton);
  newButton.setAttribute("type", "text");
  newButton.classList.add("btn-answer");
  newButton.textContent = "Show Answer";
  const newAnswer = document.createElement("p");
  newArticle.appendChild(newAnswer);
  newAnswer.classList.add("question-card__answer");
  newAnswer.textContent = answer;
  const newUl = document.createElement("ul");
  newArticle.appendChild(newUl);
  newUl.classList.add("category");
  const newLi = document.createElement("li");
  newUl.appendChild(newLi);
  newLi.classList.add("category__tag");
  newLi.textContent = tag;

  event.target.elements.question.focus();
  event.target.reset();
});

const inputQuestion = document.querySelector(`[data-js="question"]`);
const remainingCharQuestion = document.querySelector(`[data-js="remaining-characters-question"]`);

inputQuestion.addEventListener("input", (event) => {
    remainingCharQuestion.textContent = `${150 - event.target.value.length} characters left`;
})

const inputAnswer = document.querySelector(`[data-js="answer"]`);
const remainingCharAnswer = document.querySelector(`[data-js="remaining-characters-answer"]`);

inputAnswer.addEventListener("input", (event) => {
    remainingCharAnswer.textContent = `${150 - event.target.value.length} characters left`;
})