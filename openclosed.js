//OPEN/CLOSED PRINCIPLE
//software entities eg classes,modules and functions should be open for extension but closed for modification
//incorrect way
function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        switch(question.type) {
            case 'boolean':
                console.log('1, True');
                console.log('2, False');
                break;
            case 'multiplechoice':
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`);
                });
                break;
            case 'text':
                console.log('Answer: ');
                break;
            // case 'range':
            //     console.log('Minimum: ');
            //     console.log('Maximum: ');
            //      break;
        }
    })
};

const questions = [
    {
        type: 'boolean',
        description: 'open/closed'
    },
    {
        type: 'multiplechoice',
        description: 'what is your favourite language',
        options: ['Javascript', 'Python', 'Java']
    },
    {
        type: 'text',
        description: 'what is react'
    },
    // {
    //     type: 'range',
    //     description: 'what is the speed limit in your town'
    // }
];

printQuiz(questions);

//correct way
//we shouldn't have to go into the printquiz function and make a modification everytime we extend the code outside the function
//printquiz should work even when we add a new question type without having to modify code in the function

class BooleanQuestion{
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiceQuestion{
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        })
    }
}

class TextQuestion{
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Answer: ');
    }
}

class RangeQuestion{
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Minimum: ');
        console.log('Maximum: ');
    }
}

function typeQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices();
    })
}

const newQuestions = [
    new BooleanQuestion('open/closed'),
    new MultipleChoiceQuestion('What is your favourite language', ['Javascript', 'Python', 'Java']),
    new TextQuestion('what is react'),
    new RangeQuestion('what is the speed limit in your town')
];

typeQuiz(newQuestions);
