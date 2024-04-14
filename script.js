let randomNumber = Math.floor(Math.random() * 100);

let userInput = document.querySelector('input');
let submit = document.getElementById('btn');
let ans = document.getElementById('para');
let restart = document.getElementById('restart-btn');
let attempt_para = document.getElementById('attempt');
let attempt_msg = document.getElementById('attempt-para');

 let attempt = 6;
 attempt_para.innerText = `Attempts left : ${attempt}`;

 let button = document.getElementById('strt')
 let lower  = document.querySelector('.second')
 let upper  = document.querySelector('.first')

 button.addEventListener("click", function(){
     
     upper.style.display = 'none'
     lower.style.display = 'block'

 })

submit.addEventListener("click", function(){
    console.log(randomNumber)
 if(userInput.value && attempt){

        if(randomNumber == userInput.value){
        ans.innerText = `Congratulations!! You Guessed right, it was : ${userInput.value}`;
    
    }
        else if(randomNumber < userInput.value ){
        ans.innerText = `Random number is less than ${userInput.value}`;
        attempt--;
        if(attempt == '0'){
            ans.innerText = " ";
            attempt_msg.innerText = `No attempts left || Random number was ${randomNumber}`;
        }
        attempt_para.innerText = `Attempts left : ${attempt}`;
    }
        else if(randomNumber > userInput.value){
        ans.innerText = `Random number is greater than ${userInput.value}`;
        attempt--;
        if(attempt == '0'){
            ans.innerText = "";

            attempt_msg.innerText = `No attempts left|| Random number was ${randomNumber}`;
        }
        attempt_para.innerText = `Attempts left : ${attempt}`;
    }
    
}
else{
    if(attempt == '0'){
        ans.innerText = "Please Restart || No attempts left";
        attempt_msg.innerText = "";
    }
    else{
    ans.innerText = `Please Enter Your Guessed Number`;
    }
    }
})

restart.addEventListener("click", function(){
    randomNumber = Math.floor(Math.random() * 100);
    userInput.value = "";
    attempt = 6;
    attempt_para.innerText = `Attempts left : ${attempt}`;
    attempt_msg.innerText = ""
    ans.innerText = "";
})