console.clear();

const form = document.querySelector(`[data-js="form"]`);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

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
  // fetch the svg file with an HTTP request
  fetch("assets/bookmark.svg")
    .then((response) => response.text()) // process the response into text(svgContent)
    .then((svgContent) => {
      newSvg.innerHTML = svgContent; // Insert the SVG content
      // Query the embedded SVG`s path element
      const svgPath = newSvg.querySelector("path");
      // add click event listener to toggle the "fill" attribute
      newSvg.addEventListener("click", () => {
        const currentFill = svgPath.getAttribute("fill");
        svgPath.setAttribute(
          "fill",
          currentFill === "white" ? "black" : "white"
        );
      });
    })
    .catch((error) => console.error("Error fetching SVG:", error));
  // end of ChatGPT code
  // add data-js to newSvg
  newSvg.setAttribute("data-js", "newSvg");
  const newQuestion = document.createElement("h3");
  newArticle.appendChild(newQuestion);
  newQuestion.classList.add("question-card__question");
  newQuestion.textContent = question;
  const newButton = document.createElement("button");
  newArticle.appendChild(newButton);
  newButton.setAttribute("type", "text");
  newButton.classList.add("btn-answer");
  newButton.textContent = "Show Answer";
  // add data-js to newButton
  newButton.setAttribute("data-js", "newButton");
  const newAnswer = document.createElement("p");
  newArticle.appendChild(newAnswer);
  newAnswer.classList.add("question-card__answer");
  newAnswer.textContent = answer;
  // add data-js to newAnswer
  newAnswer.setAttribute("data-js", "answer");
  const newUl = document.createElement("ul");
  newArticle.appendChild(newUl);
  newUl.classList.add("category");
  const newLi = document.createElement("li");
  newUl.appendChild(newLi);
  newLi.classList.add("category__tag");
  newLi.textContent = tag;

  event.target.elements.question.focus();
  event.target.reset();

  newButton.addEventListener("click", () => {
    if (newAnswer.style.display === "block") {
      newAnswer.style.display = "none";
      newButton.textContent = "Show Answer";
    } else {
      newAnswer.style.display = "block";
      newButton.textContent = "Hide Answer";
    }
  });
});

const inputQuestion = document.querySelector(`[data-js="question"]`);
const remainingCharQuestion = document.querySelector(
  `[data-js="remaining-characters-question"]`
);

inputQuestion.addEventListener("input", (event) => {
  remainingCharQuestion.textContent = `${
    150 - event.target.value.length
  } characters left`;
});

const inputAnswer = document.querySelector(`[data-js="answer"]`);
const remainingCharAnswer = document.querySelector(
  `[data-js="remaining-characters-answer"]`
);

inputAnswer.addEventListener("input", (event) => {
  remainingCharAnswer.textContent = `${
    150 - event.target.value.length
  } characters left`;
});
