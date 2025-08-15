let easy = document.querySelector('.easy');
let medium = document.querySelector('.medium');
let hard = document.querySelector('.hard');
let veryHard = document.querySelector('.veryHard');

let fixContact = document.querySelector('.fixContact');

let easyContent = document.querySelector('.easyContent');
let mediumContent = document.querySelector('.mediumContent');
let hardContent = document.querySelector('.hardContent');
let veryHardContent = document.querySelector('.veryHardContent');
let answerSpan = document.querySelectorAll('.answerSpan');
let containerAnswer = document.querySelector('.containerAnswer');
let mainButtons = document.querySelector('.mainButtons');


let contact = document.querySelector('.contact');
let answerRadioButt = document.querySelectorAll('.answerRadioButt');
let victory = document.querySelectorAll('.victory');
let submit = document.querySelector('.submit');

let numAnswer = 0;
let contactMale;
let arr = [];
let resultArr;


let correctAnswerButton = document.createElement('button');

correctAnswerButton.className = 'correctAnswerButton';
correctAnswerButton.textContent = 'Correct answer';
// mainButtons.append(correctAnswerButton); // added button Correct answer



medium.addEventListener('click', () => {
    easyContent.style.display = 'none';
    easy.style.boxShadow = 'none';

    mediumContent.style.display = 'block';
    medium.style.boxShadow = '5px 5px 4px rgb(150, 150, 2)';

    hardContent.style.display = 'none';
    hard.style.boxShadow = 'none';

    veryHardContent.style.display = 'none';
    veryHard.style.boxShadow = 'none';
});

hard.addEventListener('click', () => {
    easyContent.style.display = 'none';
    easy.style.boxShadow = 'none';

    mediumContent.style.display = 'none';
    medium.style.boxShadow = 'none';

    hardContent.style.display = 'block';
    hard.style.boxShadow = '5px 5px 4px rgb(150, 3, 3)';

    veryHardContent.style.display = 'none';
    veryHard.style.boxShadow = 'none';
});
veryHard.addEventListener('click', () => {
    easyContent.style.display = 'none';
    easy.style.boxShadow = 'none';

    mediumContent.style.display = 'none';
    medium.style.boxShadow = 'none';

    hardContent.style.display = 'none';
    hard.style.boxShadow = 'none';

    veryHardContent.style.display = 'block';
    veryHard.style.boxShadow = '5px 5px 4px rgb(148, 39, 2)';
});
easy.addEventListener('click', () => {
    easyContent.style.display = 'block';
    easy.style.boxShadow = '5px 5px 4px green';

    mediumContent.style.display = 'none';
    medium.style.boxShadow = 'none';

    hardContent.style.display = 'none';
    hard.style.boxShadow = 'none';

    veryHardContent.style.display = 'none';
    veryHard.style.boxShadow = 'none';
});

contact.addEventListener('input', function () {
    contactMale = this.value
});



submit.addEventListener('click', function pressSubmit() {

    if (contactMale == undefined) {
        fixContact.style.display = 'inline';
    }

    if (contactMale != undefined) {
        for (let answer of answerRadioButt) {
            if (answer.value == '2' && answer.checked == true) {
                numAnswer += Number(answer.value);
            }
            if (answer.value == '3' && answer.checked == true) {
                numAnswer += Number(answer.value);
            }
            if (answer.value == '4' && answer.checked == true) {
                numAnswer += Number(answer.value);
            }
            if (answer.value == '5' && answer.checked == true) {
                numAnswer += Number(answer.value);
            }
        }

        alert(contactMale + ' : ' + numAnswer + ' / 100');
        this.removeEventListener('click', pressSubmit);
        window.location.reload();
    }
    correctAnswerButton.style.display = 'block';

});
correctAnswerButton.addEventListener('click', function () {
    for (let vic of victory) {
        vic.style.color = 'rgba(4, 252, 37, 0.578)'; // Added color style for correct answer
    }
});




