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


// My solution is not within OOP, but rather functional programming

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
    const answerChoice = '____________';
    return { answerChoice, question };
}

function makeRangeQuestion(question) {
    const minText = 'Min = ______';
    const maxText = 'Max = ______'
    const answerChoice = [minText, maxText];
    return { answerChoice, question };
}

const booleanQuestion1 = makeBooleanQuestion('Do you like this cake?');
const multipleChoiceQuestion1 = makeMultipleChoiceQuestion("How goes?", 'Good', 'OK');
const rangeQuestion1 = makeRangeQuestion('How tall are you?'); 

// printAnswerChoice(rangeQuestion1);

function printQuiz(...questions) {
    questions.forEach(q => {
        console.log(q.question);
        q.answerChoice.forEach(ans => console.log(ans));
    });

}

printQuiz(booleanQuestion1, multipleChoiceQuestion1, rangeQuestion1);