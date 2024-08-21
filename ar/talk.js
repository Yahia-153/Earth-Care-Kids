 let sound = new Audio('me.mp3');
 let meText = "أنا جوجو، سلحفاة بحرية , اليوم أريد أن أتحدث إليكم عن شيء مهم للغاية التلوث إنه شيء يجعل محيطنا خطيرا بعض الشيء بالنسبة لنا ";
 let plasticPollution = "هل تعلم أن كميات كبيرة من البلاستيك تنتهي في المحيط كل عام؟ هذا صحيح في باب الأحيان نرى السلاح فتخلط بين الأكياسي البلاستيكية وقنادي للبحر الذي ذاتي فنحاول أن نأكلها لكن البلاستيك ليس طعام بل يمكن أن يجعلنا مرضى للغاية ";
 var chemicalPollution = "تتدفق المواد الكيميائية من المصانع والمزارع أحياناً إلى المحيط ويمكن لهذه المواد الكيميائية أن تجعل المياه ملوثة وقد تضر بالنباتات والحيوانات التي نأكلها وإذا تناولنا تعاماً كان في مياه ملوثة فقد يؤدي ذلك إلى إصابتنا بأمراض خطيرة إيضاً ";
 let sorry = "Sorry, I don't understand that. Please try something else.";

 function chatbot(inputV) {
    inputV = inputV.toLowerCase()
    if (inputV.includes("اسمك") || inputV.includes("إسمك")) {
      document.querySelector('#massage').style = "display: block;";
      document.querySelector('#output').innerText = meText;
        sound = new Audio('me.mp3');
        sound.play();
        setTimeout(function() {
          document.querySelector('#output').innerText = '';
          document.querySelector('#massage').style = "display: none;";

      }, 14000);
    } else if (inputV.includes("بلاستيك")) {
      document.querySelector('#massage').style = "display: block;";
      document.querySelector('#output').innerText = plasticPollution;
       sound = new Audio('plastic pollution.mp3');
      sound.play()
      setTimeout(function() {
        document.querySelector('#output').innerText = '';
        document.querySelector('#massage').style = "display: none;";

    }, 22000);
    } else if (inputV.includes("كيماوي") ||inputV.includes("كيمياء") ||inputV.includes("كيميائي")) {
      document.querySelector('#massage').style = "display: block;";
      document.querySelector('#output').innerText = chemicalPollution;
       sound = new Audio('chemicals pollution.mp3');
      sound.play()
      setTimeout(function() {
        document.querySelector('#output').innerText = '';
        document.querySelector('#massage').style = "display: none;";

    }, 24000);
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




  
  