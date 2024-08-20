 sound = new Audio('me.mp3');
 function chatbot(inputV) {
    inputV = inputV.toLowerCase()
    if (inputV.includes("your name")) {
        sound = new Audio('me.mp3');
        sound.play();
    } else if (inputV.includes("plastic pollution")) {
       sound = new Audio('plastic pollution.mp3');
      sound.play()
    } else if (inputV.includes("chemical")) {
       sound = new Audio('chemicals pollution.mp3');
      sound.play()
    } else {
      sound = new Audio('sorry.mp3');
      sound.play()
    }
  }
  var input = document.getElementById("input");
 var questionBtnOne =  document.querySelector('.question-One') ;
 var questionBtnTwo =  document.querySelector('.question-Two') ;
 var questionBtnThree =  document.querySelector('.question-Three') ;
 questionBtnOne.addEventListener('click' , ()=>{
  let question = document.querySelector('.question-One').innerText;
  input.value = question ;
  input.focus();
 })
 questionBtnTwo.addEventListener('click' , ()=>{
  let question = document.querySelector('.question-Two').innerText;
  input.value = question ;
  input.focus();
 })
 questionBtnThree.addEventListener('click' , ()=>{
  let question = document.querySelector('.question-Three').innerText;
  input.value = question ;
  input.focus();
 })

  function sendMessage() {
    var inputV = document.getElementById("input").value;
    chatbot(inputV)
    document.getElementById("input").value = "";   
  }
  document.getElementById("sendBtn").addEventListener("click", sendMessage );

  





  
  