var footer = `
    <footer>
    <div class="logo">
        <img src="../imgs/logo w.png" />
    </div>
    <div class="links2">
        <ul>
            <li><button onclick="window.location='index.html'"><ion-icon name="home"></ion-icon> الصفحة الرئيسية</button></li>
            <li><button onclick="window.location='about.html'"><ion-icon name="person"></ion-icon> عنّا</button></li>
            <li><button onclick="window.location='video.html'"><ion-icon name="play-circle"></ion-icon> الفيديوهات</button></li>
            <li><button onclick="window.location='Clean my Beach by Kayfo Game Studio.html'"><ion-icon name="game-controller"></ion-icon> الالعاب</button>
            <li><button onclick="window.location='blogs.html'"><ion-icon name="newspaper"></ion-icon> المقالات</button>
            <li><button onclick="window.location='contact.html'"><ion-icon name="call"></ion-icon> تواصل معنا </button></li>
            <li><button onclick="window.location='talk to animals.html'"><ion-icon name="chatbubbles"></ion-icon> تحدث مع الحيوانات </button></li>
        </ul>
        
    </div>
    <div class="social">
        <a href="https://www.facebook.com/profile.php?id=61564929233329" target="_blank" rel="noopener noreferrer"><button class="f" ><ion-icon name="logo-facebook"></ion-icon></button></a>
        
        <a href="https://www.instagram.com/earth_care_kids4/" target="_blank" rel="noopener noreferrer"><button class="i"><ion-icon name="logo-instagram"></ion-icon></button></a>
        <a href="https://www.youtube.com/@EarthCareKids-4" target="_blank" rel="noopener noreferrer"><button class="y"><ion-icon name="logo-youtube"></ion-icon></button></a>
        <a href="https://x.com/care_kids4" target="_blank" rel="noopener noreferrer"><button class="t"><ion-icon name="logo-twitter"></ion-icon></button></a>
    </div>
</footer>
`
document.getElementById("footer-container").innerHTML= footer ;