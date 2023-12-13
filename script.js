const formSelected = document.querySelector("#quiz-form");
const alertSelected = document.querySelector("#alert");

// # of Correct Question
let numCorrectQuestions = 0;

formSelected.addEventListener("submit", (e) => {
  // Prevent the page from refreshing after submit
  e.preventDefault();
  // Select all the questions
  const allQuestions = document.querySelectorAll(".question-item");
  // Convert the NodeArray to Array
  const convertedQuestions = Array.from(allQuestions);

  // Loop through each question
  convertedQuestions.forEach((eachQuestion) => {
    const allAnswers = eachQuestion.querySelectorAll(".answer");
    // Firstly, set the answer to incorrect
    eachQuestion.classList.add("incorrect");

    // Loop through each question
    allAnswers.forEach((eachAns) => {
      // Correct Answer picked
      if (eachAns.checked && eachAns.value == "true") {
        // Remove incorrect class & add correct class
        eachQuestion.classList.remove("incorrect");
        eachQuestion.classList.add("correct");

        // Increment number of correct answers
        numCorrectQuestions++;
        return;
      }
      // If there is no correct answer picked, class will remain as incorrect
    });
  });

  // If the user gets all question correct, this will run
  if (numCorrectQuestions === convertedQuestions.length) {
    // Display Congratulation
    alertSelected.classList.add("active");
    // Reset the correct counter to 0
    numCorrectQuestions = 0;
    // Remove Congratulation after 1 second
    setTimeout(() => {
      alertSelected.classList.remove("active");
    }, 1000);
  }
});
