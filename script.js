const quizForm = document.getElementById("quiz-form");
const results = document.getElementById("results");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  let score = 0;
  
  // Get the selected answer for each question
  const q1 = quizForm.elements["q1"].value;
  const q2 = quizForm.elements["q2"].value;
  
  // Check the answers and update the score
  if (q1 === "b") {
    score++;
  }
  if (q2 === "b") {
    score++;
  }
  
  // Display the results
  results.innerHTML = `You scored ${score} out of 2.`;
});
submitButton.addEventListener('click', showResults);