 sound = new Audio('me.mp3');
 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("your name")) {
        sound = new Audio('me.mp3');
        sound.play();
    } else if (input.includes("water pollution")) {
       sound = new Audio('plastic pollution.mp3');
      sound.play()
    } else if (input.includes("chemicals")) {
       sound = new Audio('chemicals pollution.mp3');
      sound.play()
    } else {
      output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let userMessage = message; /* important */ 
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let botMessage = message; /* important */  

  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      });
      document.getElementById("input").value = "";
    }
  }
  

  // Add a click event listener to the button
  document.getElementById("sendBtn").addEventListener("click", sendMessage );



  
  