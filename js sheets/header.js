var header = `
            <header id="header">
                <nav id="nav">
                    <ul>
                        <li><button onclick="window.location='index.html'"> HOME</button></li>
                        <li><button onclick="window.location='about.html'"> ABOUT</button></li>
                        <li><button onclick="window.location='video.html'"> VIDEOS</button>
                        <li><button onclick="window.location='sort game.html'"> Games</button>
                        <li><button onclick="window.location='blogs.html'"> BLOGS</button>
                        <li><button onclick="window.location='contact.html'"> CONTACT</button></li>
                        <li><button onclick="window.location='talk to animals.html'"> talk to animals</button></li>

                    </ul>

                </nav>
                <div class="main">
                    <div class="lang">
                        <button onclick="window.location='ar/index.html'">
                            <ion-icon name="language-outline"></ion-icon>
                        </button>
                    </div>
                    <div class="logo">
                        <img src="imgs/new logo3.png" alt="logo">
                    </div>
                    <div class="search">
                    </div>
                    
                </div>
            </header>
            <nav id="sNav">
                <div class="search">
                    
                </div>
                <div class="logo">
                    <img src="imgs/new logo3.1.png" alt="logo">
                </div>
                <div class="burger-icon">
                    <button onclick="showMenu()">
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                </div>
            </nav>
            <div id="menuBG" onclick="hideMenu()"></div>
            <aside id="menu">
                <button id="menuIcon" onclick="hideMenu()">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                <div class="container">
                    <div class="logo"><img src="imgs/chatbot icon.png" alt=""></div>
                    <div id="links">
                        <div class="webLinks">
                            <ul>
                                <li><button onclick="window.location='index.html'"><ion-icon name="home"></ion-icon> home</button></li>
                                <li><button onclick="window.location='about.html'"><ion-icon name="person"></ion-icon> about</button></li>
                                <li><button onclick="window.location='video'.html"><ion-icon name="play-circle"></ion-icon> videos</button>
                                <li><button onclick="window.location='sort game.html'"><ion-icon name="game-controller"></ion-icon> games</button>
                                <li><button onclick="window.location='blogs.html'"><ion-icon name="newspaper"></ion-icon>  blogs</button>
                                <li><button onclick="window.location='contact.html'"><ion-icon name="call"></ion-icon> contact</button></li>
                                <li><button onclick="window.location='talk to animals.html'"><ion-icon name="chatbubbles"></ion-icon> talk to animals</button></li>
        
                            </ul>
                        </div>
                        <div class="socialLinks">
                            <a href="https://www.facebook.com/profile.php?id=61564929233329" target="_blank" rel="noopener noreferrer"><button class="f" ><ion-icon name="logo-facebook"></ion-icon></button></a>
                            <a href="https://www.instagram.com/earth_care_kids4/" target="_blank" rel="noopener noreferrer"><button class="i"><ion-icon name="logo-instagram"></ion-icon></button></a>
                            <a href="https://www.youtube.com/@EarthCareKids-4" target="_blank" rel="noopener noreferrer"><button class="y"><ion-icon name="logo-youtube"></ion-icon></button></a>
                            <a href="https://x.com/care_kids4" target="_blank" rel="noopener noreferrer"><button class="t"><ion-icon name="logo-twitter"></ion-icon></button></a>
                    
                        </div>
                    </div>
                </div>
            </aside>
        
            
        
`;
document.getElementById("header-container").innerHTML= header ;

var searchDiv = document.getElementById("searchDiv");
var menu = document.getElementById("menu");
var menuGB = document.getElementById("menuBG");
function showSearch(){
    searchDiv.style="top:0;";
}
function hideSearch(){
    searchDiv.style="top:-26vh;";
}
function showMenu(){
    menu.style="right:0%;";
    menuGB.style="display:block;";
}
function hideMenu(){
    menu.style="right:-360px;";
    menuGB.style="display:none;";
}
window.addEventListener("scroll", function() {
let snav = document.getElementById("sNav");
snav.classList.toggle("on" , window.scrollY > 150 ) ;
})

