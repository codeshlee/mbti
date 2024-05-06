import { questions }from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentnumber = 0
let mbti = ''

function renderQuestion() {
  const question = questions[currentnumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  console.log(question)
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentnumber + 1) * 10 + '%'
}
function nextQuestion(choiceNumber){
  if(currentnumber === questions.length) {
    showresultpage()
    return
  }
  const question = questions[currentnumber]
  mbti = mbti + question.choices[choiceNumber].value
  // mbit = 'inf' 
  currentnumber = currentnumber + 1
  renderQuestion()
}
function showresultpage() {
  location.href = '/results.html?mbti=' + mbti //쿼리스트링 

}

choice1El.addEventListener('click', function(){
  nextQuestion(0)
})

choice2El.addEventListener('click', function (){
  nextQuestion(1)
})


renderQuestion()

