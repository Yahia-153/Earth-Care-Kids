var footer = `
    <footer>
    <div class="logo">
        <img src="imgs/logo w.png" alt="">
    </div>
    <div class="links2">
        <ul>
            <li><button onclick="window.location='index'"><ion-icon name="home"></ion-icon> HOME</button></li>
            <li><button onclick="window.location='about'"><ion-icon name="person"></ion-icon> ABOUT US</button></li>
            <li><button onclick="window.location='video'"><ion-icon name="play-circle"></ion-icon> VIDEOS</button></li>
            <li><button onclick="window.location='sort game'"><ion-icon name="game-controller"></ion-icon> PLAY WITH ME</button>
            <li><button onclick="window.location='blogs'"><ion-icon name="newspaper"></ion-icon> BLOGS</button>
            <li><button onclick="window.location='contact'"><ion-icon name="call"></ion-icon> CONTACT US</button></li>
            <li><button onclick="window.location='talk to animals'"><ion-icon name="chatbubbles"></ion-icon> talk to animals</button></li>

        </ul>
        
    </div>
    <div class="social">
        <a href="https://www.facebook.com/profile.php?id=61556130872330" target="_blank" rel="noopener noreferrer"><button class="f" ><ion-icon name="logo-facebook"></ion-icon></button></a>
        
        <a href="https://www.instagram.com/earthcarekids1?igsh=MXd2NWJ6cmUxdzlkeg==" target="_blank" rel="noopener noreferrer"><button class="i"><ion-icon name="logo-instagram"></ion-icon></button></a>
        <a href="https://www.youtube.com/@EARTHCAREKIDS" target="_blank" rel="noopener noreferrer"><button class="y"><ion-icon name="logo-youtube"></ion-icon></button></a>
        <a href="https://twitter.com/earth_care_kids" target="_blank" rel="noopener noreferrer"><button class="t"><ion-icon name="logo-twitter"></ion-icon></button></a>
    </div>
</footer>
`
document.getElementById("footer-container").innerHTML= footer ;