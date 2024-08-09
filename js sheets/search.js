function search(){
    var searchInput = document.querySelector('#searchInput').Value.toUpperCase();
    console.log(searchInput);
    let blog = document.querySelectorAll('.blog');
    let blogName = document.getElementsByTagName("h3");
    for(let i = 0 ; i < blogName.length ; i++){
        if(blogName[i].innerHTML.toUpperCase().indexOf(searchInput) >= 0){
            blog[i].style="";
        }else{
            blog[i].style="display: none ;";
        }
    }
}
