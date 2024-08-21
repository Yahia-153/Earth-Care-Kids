var header = `
    <header id="header">
                <nav id="nav">
                    <ul>
                        <li><button onclick="window.location='index'"> الصفحة الرئيسية</button></li>
                        <li><button onclick="window.location='about'"> عنّا</button></li>
                        <li><button onclick="window.location='videos'"> الفيديوهات</button>
                        <li><button onclick="window.location='sort game'"> الالعاب</button>
                        <li><button onclick="window.location='blogs'"> المقالات</button>
                        <li><button onclick="window.location='contact'"> تواصل معنا</button></li>
                        <li><button onclick="window.location='talk to animals'"> تحدث مع الحيوانات </button></li>

                    </ul>

                </nav>
                <div class="main">
                    <div class="lang">
                        <button onclick="window.location='../index'">
                            <ion-icon name="language-outline"></ion-icon>
                        </button>
                    </div>
                    <div class="logo">
                        <img src="../imgs/new logo3.png" alt="logo">
                    </div>
                    <div class="search">
                    </div>
                    
                </div>
            </header>
            <nav id="sNav">
                <div class="search">
                    
                </div>
                <div class="logo">
                    <img src="../imgs/new logo3.1.png" alt="logo">
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
                    <div></div>
                    <div id="links">
                        <div class="webLinks">
                            <ul>
                                <li><button onclick="window.location='index'"> الصفحة الرئيسية</button></li>
                                <li><button onclick="window.location='about'"> عنّا</button></li>
                                <li><button onclick="window.location='videos'"> الفيديوهات</button>
                                <li><button onclick="window.location='sort game'"> الالعاب</button>
                                <li><button onclick="window.location='blogs'"> المقالات</button>
                                <li><button onclick="window.location='contact'"> تواصل معنا</button></li>
                                <li><button onclick="window.location='talk to animals'"> تحدث مع الحيوانات </button></li>
        
                            </ul>
                        </div>
                        <div class="socialLinks">
                            <a href="https://www.facebook.com/profile.php?id=61556130872330" target="_blank" rel="noopener noreferrer"><button class="f" ><ion-icon name="logo-facebook"></ion-icon></button></a>
                            <a href="https://www.instagram.com/earthcarekids1?igsh=MXd2NWJ6cmUxdzlkeg==" target="_blank" rel="noopener noreferrer"><button class="i"><ion-icon name="logo-instagram"></ion-icon></button></a>
                            <a href="https://www.youtube.com/@EARTHCAREKIDS" target="_blank" rel="noopener noreferrer"><button class="y"><ion-icon name="logo-youtube"></ion-icon></button></a>
                            <a href="https://twitter.com/earth_care_kids" target="_blank" rel="noopener noreferrer"><button class="t"><ion-icon name="logo-twitter"></ion-icon></button></a>
                    
                        </div>
                    </div>
                </div>
            </aside>
`
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