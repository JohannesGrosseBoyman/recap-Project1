console.clear();

const bookmark = document.querySelector(`[data-js="question-card__icon"]`);
const answerButton = document.querySelector(".btn-answer");
const cardAnswer = document.querySelector(".question-card__answer");
console.log(cardAnswer);
//console.log(bookmark);

//console.log(bookmark.getAttribute("fill"));

bookmark.addEventListener("click", () => {
  bookmark.getAttribute("fill") === "white" 
  ? bookmark.setAttribute("fill", "black")
  : bookmark.setAttribute("fill", "white");
});

answerButton.addEventListener("click", () => {
   if (cardAnswer.style.display === "block") {
    cardAnswer.style.display = "none";
    answerButton.textContent = "Show Answer";
   } else {
    cardAnswer.style.display = "block"; 
    answerButton.textContent = "Hide Answer";
   }
   
})