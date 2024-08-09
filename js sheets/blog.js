window.addEventListener("scroll", function() {
    let mainBlog = document.getElementById("mainBlog");
    mainBlog.classList.toggle("on" , window.scrollY > 25 ) ;
    let main = document.getElementById("main");
    main.classList.toggle("blur" , window.scrollY > 25 ) ;
    })