let easy = document.querySelector('.easy');
let medium = document.querySelector('.medium');
let hard = document.querySelector('.hard');

let fixContact = document.querySelector('.fixContact');

let easyContent = document.querySelector('.easyContent');
let mediumContent = document.querySelector('.mediumContent');
let hardContent = document.querySelector('.hardContent');
let answerSpan = document.querySelector('.answerSpan');

let contact = document.querySelector('.contact');
let answerRadioButt = document.querySelectorAll('.answerRadioButt');
let submit = document.querySelector('.submit');

let numAnswer = 0;
let contactMale;


medium.addEventListener('click', ()=>{
    easyContent.style.display = 'none';
    hardContent.style.display = 'none';
    mediumContent.style.display = 'block';
});
hard.addEventListener('click', ()=>{
    easyContent.style.display = 'none';
    hardContent.style.display = 'block';
    mediumContent.style.display = 'none';
});
easy.addEventListener('click', ()=>{
    easyContent.style.display = 'block';
    hardContent.style.display = 'none';
    mediumContent.style.display = 'none';
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
            if(answer.value == '5' && answer.checked == true) {
            numAnswer+=Number(answer.value);
            }
            // console.log(answer);
        }

    alert(contactMale +' : '+ numAnswer + ' / 100');
    window.location.reload();
}
       
}); 


