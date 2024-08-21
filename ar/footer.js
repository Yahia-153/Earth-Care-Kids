var footer = `
    <footer>
    <div class="logo">
        <img src="../imgs/logo w.png" />
    </div>
    <div class="links2">
        <ul>
            <li><button onclick="window.location='index'"><ion-icon name="home"></ion-icon> الصفحة الرئيسية</button></li>
            <li><button onclick="window.location='about'"><ion-icon name="person"></ion-icon> عنّا</button></li>
            <li><button onclick="window.location='videos'"><ion-icon name="play-circle"></ion-icon> الفيديوهات</button></li>
            <li><button onclick="window.location='sort game'"><ion-icon name="game-controller"></ion-icon> الالعاب</button>
            <li><button onclick="window.location='blogs'"><ion-icon name="newspaper"></ion-icon> المقالات</button>
            <li><button onclick="window.location='contact'"><ion-icon name="call"></ion-icon> تواصل معنا </button></li>
            <li><button onclick="window.location='talk to animals'"><ion-icon name="chatbubbles"></ion-icon> تحدث مع الحيوانات </button></li>
        </ul>
        
    </div>
    <div class="social">
        <a href="https://www.facebook.com/profile.php?id=61556130872330" target="_blank" rel="noopener noreferrer"><button class="f" ><ion-icon name="logo-facebook"></ion-icon></button></a>
        
        <a href="https://www.instagram.com/earthcarekids1?igsh=MXd2NWJ6cmUxdzlkeg==" target="_blank" rel="noopener noreferrer"><button class="i"><ion-icon name="logo-instagram"></ion-icon></button></a>
        <a href="https://www.youtube.com/@EARTHCAREKIDS" target="_blank" rel="noopener noreferrer"><button class="y"><ion-icon name="logo-youtube"></ion-icon></button></a>
        <a href="https://twitter.com/earth_care_kids" target="_blank" rel="noopener noreferrer"><button class="t"><ion-icon name="logo-twitter"></ion-icon></button></a>
    </div>
    <div class="lan">
        <a href="ar/index"><ion-icon name="language"></ion-icon></a>
    </div>
</footer>
`
document.getElementById("footer-container").innerHTML= footer ;