var header = `
    <div class="burger-div"  id="burgerDiv">
        
        <div class="links">
            <ul>
                <li><button onclick="window.location='index.html'"><ion-icon name="home"></ion-icon> الصفحة الرئيسية</button></li>
                <li><button onclick="window.location='about.html'"><ion-icon name="person"></ion-icon> عنَا</button></li>
                <li><button onclick="window.location='videos.html'"><ion-icon name="play-circle"></ion-icon> فيديوهات</button></li>
                <li><button onclick="window.location='sort game.html'"><ion-icon name="game-controller"></ion-icon> ألعب معي</button>
                <li><button onclick="window.location='blogs.html'"><ion-icon name="newspaper"></ion-icon> مقالات</button>
                <li><button onclick="window.location='contact.html'"><ion-icon name="call"></ion-icon> تواصل معنا</button></li>
            </ul>
        </div>

    </div>
    <label class="burger" for="burger">
            
            <input type="checkbox" id="burger" onclick="burger()">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <header id="header">
            <div class="space">
                <div class="logo">
                    <a href="index.html"><img src="../logo.png" alt="logo"  ></a>
                </div>
                <div class="links">
                    <ul>
                        <li><button onclick="window.location='index.html'"><ion-icon name="home"></ion-icon> الصفحة الرئيسية</button></li>
                        <li><button onclick="window.location='about.html'"><ion-icon name="person"></ion-icon> عنَا</button></li>
                        <li><button><ion-icon name="leaf"></ion-icon> أعد التدوير <span><ion-icon name="chevron-forward-outline" class="arrow"></ion-icon></span></button>
                            <div class="recycle">
                                <ul>
                                    <li><button onclick="window.location='videos.html'"><ion-icon name="play-circle"></ion-icon> فيديوهات</button>
                                    <hr>
                                    <li><button onclick="window.location='sort game.html'"><ion-icon name="game-controller"></ion-icon> ألعب معي</button>
                                        <hr>
                                    <li><button onclick="window.location='blogs.html'"><ion-icon name="newspaper"></ion-icon> مقالات</button>
                                </ul>
                            </div>
                        </li>
                        
                        <li><button onclick="window.location='contact.html'"><ion-icon name="call"></ion-icon> تواصل معنا</button></li>
                    </ul>
                </div>
            </div>
        </header>
`
document.getElementById("header-container").innerHTML= header ;