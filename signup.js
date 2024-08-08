   
             // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
function yaya(){
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBQTlizyK7ctsYdxPhmq9u-MK92eFGl7VQ",
      authDomain: "earth-care-kids.firebaseapp.com",
      databaseURL: "https://earth-care-kids-default-rtdb.firebaseio.com",
      projectId: "earth-care-kids",
      storageBucket: "earth-care-kids.appspot.com",
      messagingSenderId: "965963921806",
      appId: "1:965963921806:web:0395d9544b0f6bc37f8cdf"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    const email = document.getElementById('email').value ;  
    const username = document.getElementById('username').value ;  
    const password = document.getElementById('password').value ;  
    const birthdate = document.getElementById('birthdate').value ;  
    const gender = document.getElementById('gender').value ; 
    const signup = document.getElementById('signup') ; 

     signup.addEventListener('click',(e)=>{

        createUserWithEmailAndPassword(auth, username, email, password, birthdate, gender )
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('user created !');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('error massage !');

        });

    }) 
}
function ta(event){
   event.preventDefault()
   alert(7);
}