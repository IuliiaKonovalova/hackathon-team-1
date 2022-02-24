const homePageContainer = document.getElementById('home-page-container');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const resultsButton = document.getElementById('results-button');
const quizContent = document.getElementById('quiz-content');
const questionText = document.getElementById('question-text');
const answerContainerA = document.getElementById('answer-a');
const answerContainerB = document.getElementById('answer-b');
const answerContainerC = document.getElementById('answer-c');


const firstQuestion = {
    question: 'Does your partner prefer going out or staying at home?',
    answerA: 'Staying home',
    answerB:'Going out',
    answerC: 'pass'
}

const homeQuestion = {
    question: 'Does your partner enjoy being creative?',
    answerA: 'Yes',
    answerB: 'No',
    answerC: 'Pass'    
}

const creativeQuestion = {
    question: 'Which of the following activities would most interest your partner?',
    answerA: 'Arts and cratfs',
    answerB: 'Gardening',
    answerC: 'Cookery'
}

const unCreativeQuestion = {
    question: 'Which of the following is your partner most interested in?',
    answerA: 'Tech',
    answerB: 'Animals',
    answerC: 'Games'
}

const outQuestion = {
    question: 'Would your partner prefer an adventurous day out or would they rather relax?',
    answerA: 'Adventure',
    answerB: 'Relaxation',
    answerC: 'pass'
}

const adventurousQuestion = {
    question: 'Does your partner prefer to do something active?',
    answerA: 'Yes',
    answerB: 'No',
    answerC: 'pass'

}

const leisureQuestion = {
    question: 'Is your partner a bit of a foodie?',
    answerA: 'Yes',
    answerB: 'No',
    answerC: 'pass'

}

const activeQuestion = {
    question: 'Which of the following activities would your partner prefer?',
    answerA: 'Individual sports',
    answerB: 'Team sports',
    answerC: 'Travel'
}

const notActiveQuestion = {
    question: 'Which of the following activities would your partner prefer?',
    answerA: 'Go to watch a sports event',
    answerB: 'Visit a theme park',
    answerC: 'Go on an adrenaline fueled ride'
}


const foodieQuestion = {
    question: 'Would your partner rather...',
    answerA: 'Eat out',
    answerB: 'Learn to cook something new',
    answerC: 'Go for a tasting session'
}


const notFoodieQuestion = {
    question: 'Which of the following would interest your partner the most?',
    answerA: 'A visit to a museum',
    answerB: 'A pamper day at the spa',
    answerC: 'Going sightseeing'
}

let currentQuestion = firstQuestion;

//sets the text of the questions and answers. hides button C if there are only 2 options
function displayQuestion(currentQuestion) {
    questionText.innerText = currentQuestion.question;
    answerContainerA.innerText = currentQuestion.answerA;
    answerContainerB.innerText = currentQuestion.answerB;
    if (currentQuestion.answerC === 'pass') {
        answerContainerC.classList.add('hide');
    }
    else {
        answerContainerC.classList.remove('hide');
        answerContainerC.innerText = currentQuestion.answerC;
    }
}

displayQuestion(currentQuestion)

function checkAnswer(e) {
    if (currentQuestion === firstQuestion) {
        if (e.target.id === 'answer-a') {
            currentQuestion = homeQuestion;
        } else {
            currentQuestion = outQuestion;
        }
        displayQuestion(currentQuestion);    
    } 
    else if (currentQuestion === homeQuestion) {
        if (e.target.id === 'answer-a') {
            currentQuestion = creativeQuestion;
        } else {
            currentQuestion = unCreativeQuestion;
        }
        displayQuestion(currentQuestion)
    }
    else if (currentQuestion === outQuestion) {
        if (e.target.id === 'answer-a') {
            currentQuestion = adventurousQuestion;
        } else {
            currentQuestion = leisureQuestion;
        }
        displayQuestion(currentQuestion)
    }    
    else if (currentQuestion === adventurousQuestion) {
        if (e.target.id === 'answer-a') {
            currentQuestion = activeQuestion;
        } else {
            currentQuestion = notActiveQuestion;
        }
        displayQuestion(currentQuestion)
    }
    else if (currentQuestion === leisureQuestion) {
        if (e.target.id === 'answer-a') {
            currentQuestion = foodieQuestion;
        } else {
            currentQuestion = notFoodieQuestion;
        }
        displayQuestion(currentQuestion)
    }

}

//event listeners
answerContainerA.addEventListener('click', checkAnswer);
answerContainerB.addEventListener('click', checkAnswer);
answerContainerC.addEventListener('click', checkAnswer);



