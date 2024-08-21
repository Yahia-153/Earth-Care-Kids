 let sound = new Audio('me.mp3');
 let meText = "I'm JoJo, the sea turtle. Today I want to talk to you about something very important, Pollution. It's something that makes our ocean home a bit dangerous for us sea turtles.";
 let plasticPollution = "Did you know that every year lots of plastic ends up in the ocean? It's true. Sometimes we see turtles mistake plastic bags for jellyfish. Yummy. And we try to eat them.  But plastic isn't food. It can make us very sick. It can even get stuck in our bellies, which is really bad for our health.";
 var chemicalPollution = "Chemicals from factories and farms sometimes flow into the ocean. These chemicals can make the water dirty and can harm the plants and animals we eat. If we eat food that's been in dirty water, it can make us very sick too.";
 let sorry = "Sorry, I don't understand that. Please try something else.";

 function chatbot(inputV) {
    inputV = inputV.toLowerCase()
    if (inputV.includes("your name")) {
      document.querySelector('#massage').style = "display: block;";
      document.querySelector('#output').innerText = meText;
        sound = new Audio('me.mp3');
        sound.play();
        setTimeout(function() {
          document.querySelector('#output').innerText = '';
          document.querySelector('#massage').style = "display: none;";

      }, 11000);
    } else if (inputV.includes("plastic")) {
      document.querySelector('#massage').style = "display: block;";
      document.querySelector('#output').innerText = plasticPollution;
       sound = new Audio('plastic pollution.mp3');
      sound.play()
      setTimeout(function() {
        document.querySelector('#output').innerText = '';
        document.querySelector('#massage').style = "display: none;";

    }, 19000);
    } else if (inputV.includes("chemical")) {
      document.querySelector('#massage').style = "display: block;";
      document.querySelector('#output').innerText = chemicalPollution;
       sound = new Audio('chemicals pollution.mp3');
      sound.play()
      setTimeout(function() {
        document.querySelector('#output').innerText = '';
        document.querySelector('#massage').style = "display: none;";

    }, 14000);
    } else {
      document.querySelector('#massage').style = "display: block;";
      document.querySelector('#output').innerText = sorry;
      sound = new Audio('sorry.mp3');
      sound.play()
      setTimeout(function() {
        document.querySelector('#output').innerText = '';
        document.querySelector('#massage').style = "display: none;";

    }, 4000);
    }
  }
  var input = document.getElementById("input");
 var questionBtnOne =  document.querySelector('.question-One') ;
 var questionBtnTwo =  document.querySelector('.question-Two') ;
 var questionBtnThree =  document.querySelector('.question-Three') ;
 questionBtnOne.addEventListener('click' , ()=>{
  let question = document.querySelector('.question-One').innerText;
  input.value = question ;
 })
 questionBtnTwo.addEventListener('click' , ()=>{
  let question = document.querySelector('.question-Two').innerText;
  input.value = question ;
 })
 questionBtnThree.addEventListener('click' , ()=>{
  let question = document.querySelector('.question-Three').innerText;
  input.value = question ;
 })

  function sendMessage() {
    var inputV = document.getElementById("input").value;
    chatbot(inputV)
    document.getElementById("input").value = "";   
  }
  document.getElementById("sendBtn").addEventListener("click", sendMessage );




  
  