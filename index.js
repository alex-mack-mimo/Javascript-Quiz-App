let questions = [
  "What is the biggest mammal?",
  "What is the biggest reptile?",
  "What is the biggest bony fish?"
]

let answers = [
  "Blue Whale",
  "Saltwater Crocodile",
  "Ocean Sunfish"
]

let numberCorrect = 0





for(let i = 0; i < questions.length; i++){

  let currentQuestion = questions[i]
  console.log(currentQuestion)

  let userAnswer = prompt("Enter your answer: ")

  if(userAnswer === answers[i]){
    console.log("Yes, you answered correctly")
    numberCorrect++
  } else {
    console.log("Better luck next time")
  }
  
}


console.log("You answered " + numberCorrect + " correct out of a total of " + questions.length + " questions")

