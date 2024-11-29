let easy = document.querySelector('.easy');
let medium = document.querySelector('.medium');
let hard = document.querySelector('.hard');
let veryHard = document.querySelector('.veryHard');

let fixContact = document.querySelector('.fixContact');

let easyContent = document.querySelector('.easyContent');
let mediumContent = document.querySelector('.mediumContent');
let hardContent = document.querySelector('.hardContent');
let veryHardContent = document.querySelector('.veryHardContent');
let answerSpan = document.querySelector('.answerSpan');

let contact = document.querySelector('.contact');
let answerRadioButt = document.querySelectorAll('.answerRadioButt');
let submit = document.querySelector('.submit');

let numAnswer = 0;
let contactMale;
let arr = [];
let resultArr;



medium.addEventListener('click', ()=>{
    easyContent.style.display = 'none';
    easy.style.boxShadow = 'none';
    
    mediumContent.style.display = 'block';
    medium.style.boxShadow = '5px 5px 4px rgb(150, 150, 2)';

    hardContent.style.display = 'none';
    hard.style.boxShadow = 'none';

    veryHardContent.style.display = 'none';
    veryHard.style.boxShadow = 'none';
});

hard.addEventListener('click', ()=>{
    easyContent.style.display = 'none';
    easy.style.boxShadow = 'none';

    mediumContent.style.display = 'none';
    medium.style.boxShadow = 'none';

    hardContent.style.display = 'block';
    hard.style.boxShadow = '5px 5px 4px rgb(150, 3, 3)';

    veryHardContent.style.display = 'none';
    veryHard.style.boxShadow = 'none';
});
veryHard.addEventListener('click', ()=>{
    easyContent.style.display = 'none';
    easy.style.boxShadow = 'none';

    mediumContent.style.display = 'none';
    medium.style.boxShadow = 'none';

    hardContent.style.display = 'none';
    hard.style.boxShadow = 'none';

    veryHardContent.style.display = 'block';
    veryHard.style.boxShadow = '5px 5px 4px rgb(148, 39, 2)';
});
easy.addEventListener('click', ()=>{
    easyContent.style.display = 'block';
    easy.style.boxShadow = '5px 5px 4px green';
    
    mediumContent.style.display = 'none';
    medium.style.boxShadow = 'none';

    hardContent.style.display = 'none';
    hard.style.boxShadow = 'none';

    veryHardContent.style.display = 'none';
    veryHard.style.boxShadow = 'none';
});

contact.addEventListener('input', function (){
contactMale = this.value
});


submit.addEventListener('click', function (){
    if(contactMale == undefined) {
        fixContact.style.display = 'inline';
    }   
    if(contactMale != undefined) {
        for (let answer of answerRadioButt) {
            if(answer.value == '2' && answer.checked == true) {
                numAnswer+=Number(answer.value);
            }
            if(answer.value == '3' && answer.checked == true) {
                numAnswer+=Number(answer.value);
            }
            if(answer.value == '4' && answer.checked == true) {
            numAnswer+=Number(answer.value);
            }
            if(answer.value == '5' && answer.checked == true) {
                numAnswer+=Number(answer.value);
            }
            // console.log(answer);
        }
        arr.push(numAnswer);
        resultArr = JSON.stringify(arr);
        localStorage.setItem('completedArr', resultArr);
    alert(contactMale +' : '+ numAnswer + ' / 100');
    window.location.reload();
}     
}); 


