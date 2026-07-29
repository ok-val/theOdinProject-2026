/**
 * The open-closed principle states that software entities (classes, 
 * modules, functions) should be open for extension but closed for
 * modifcation.
 * 
 * This simply means that whenever you need to extend a software
 * entity's functionality, you shouldn't need to go in and modify it.
 */

// Expand the code below to see the infringing codes

// function printQuiz(questions) {

//     questions.forEach(question => {
//         console.log(question.description);
//         switch (question.type) {
//             case 'boolean':
//                 console.log('1. True');
//                 console.log('2. False');
//                 break;
//             case 'multipleChoice':
//                 question.options.forEach((option, index) => {
//                     console.log(`${index + 1}. ${option}`);
//                 });
//                 break;
//             case 'text':
//                 console.log('Answer: ____________');
//                 break;
//             case 'range':
//                 console.log('Minimum: ____________');
//                 console.log('Maximum: ____________');
//                 break;
//         }
//         /**
//          * Notice that whenever the we have a new question type, 
//          * we would need to modify this function. 
//          * => Thus violating the OPEN-CLOSED principle
//          *  */
//         console.log('');
//     });
// }

// const questions = [
//     {
//         type: 'boolean',
//         description: 'This video is useful.',
//     },
//     {
//         type: 'multipleChoice',
//         description: 'What is your favorite language?',
//         options: ['CSS', 'HTML', 'JS', 'Python']
//     },
//     {
//         type: 'text',
//         description: 'Describe your favorite JS feature.'
//     },
//     {
//         type: 'range',
//         description: 'What is the speed limit in your city?'
//     }
// ]


// Here's the solution using OOP

class Question {
    constructor (ques) {
        this.question = ques;
        this.answer = null;
    };
    
    printAnswers() {
        this.answer.forEach(ans => console.log(ans));
    }
}

class BooleanQuestion extends Question {
    constructor(ques) {
        super(ques);
        this.answer = [true, false]; 
    }
}

class MultipleChoiceQuestion extends Question {
    constructor(ques, ...ans) {
        super(ques);
        this.answer = ans;
    }
}

class TextQuestion extends Question {
    constructor(ques) {
        super(ques);
        this.answer = ['Answer: ______'];
    }
}

class RangeQuestion extends Question {
    constructor(ques) {
        super(ques);
        this.min = 'Min: ______';
        this.max = 'Max: ______';
        this.answer = [this.min, this.max];
    }
}

const booleanQuestion2 = new BooleanQuestion('Are you mad?');
const MultipleChoiceQuestion2 = new MultipleChoiceQuestion('How goes it?', 'Ok', 'Not bad');
const TextQuestion2 = new TextQuestion('What did you eat today?');
const RangeQuestion2 = new RangeQuestion('How tall are you?');


function printQuiz2(...questions) {
    questions.forEach(ques => {
        console.log(ques.question);
        ques.printAnswers();
    })
}

printQuiz2(booleanQuestion2, MultipleChoiceQuestion2, TextQuestion2, RangeQuestion2);




// My solution is not with OOP, but rather functional programming

function printAnswerChoice(question) {
    question.answerChoice.forEach(ans => console.log(ans));
}

function makeBooleanQuestion(question) {
    const answerChoice = [true, false];
    return { answerChoice, question };
}

function makeMultipleChoiceQuestion(question, ...answers) {
    const answerChoice = answers;
    return { answerChoice, question };
}

function makeTextQuestion(question) {
    const answerChoice = ['____________'];
    return { answerChoice, question };
}

function makeRangeQuestion(question) {
    const minText = 'Min = ______';
    const maxText = 'Max = ______';
    const answerChoice = [minText, maxText];
    return { answerChoice, question };
}

// const booleanQuestion1 = makeBooleanQuestion('Do you like this cake?');
// const multipleChoiceQuestion1 = makeMultipleChoiceQuestion("How goes?", 'Good', 'OK');
// const rangeQuestion1 = makeRangeQuestion('How tall are you?'); 

// printAnswerChoice(rangeQuestion1);

function printQuiz(...questions) {
    questions.forEach(q => {
        console.log(q.question);
        q.answerChoice.forEach(ans => console.log(ans));
    });
}

// printQuiz(booleanQuestion1, multipleChoiceQuestion1, rangeQuestion1);