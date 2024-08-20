const audio = new Audio('hi kids i am Zain i .mp3');
function hiSound() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
    const audio2 = new Audio('HEY-KIDS-JUMP-INTO-O.mp3');
    function gameSound() {
        if (audio2.paused) {
            audio2.play();
        } else {
            audio2.pause();
        }
    }

    

    function burger(){
        if(document.getElementById("burger").checked){
            document.getElementById("burgerDiv").style.right="0";
        }else{
        document.getElementById("burgerDiv").style.right="-100%";
    }
    }

   
  /* //game code//

    let rows=3;
    let columns=rows;  //make the number of columns equal to the number of rows for a perfect square grid

    let currTile;
    let otherTile;

    let turns=0;

    window.onload=function(){
        //initialize the 3x3 board
        for(let  r=0 ;r<rows ;++r){
            for(let  c=0 ;c<columns ;++c ){
                //<img>
                let tile= document.createElement("img");
                tile.src="game1_IMG/blank1.jpg";//default image is blank

                document.getElementById('board').append(tile)
            }
        }

        //pieces
        let pieces=[];
        for(let i=1; i <= rows*columns;i++){
            pieces.push(i.toString()) //put "1" to "9" into array (puzzles images names)
        }
        pieces.reverse()
        for(let i=0;i < pieces.length;i++){
            let j = Math.floor(Math.random() * pieces.length);

            //swap
            let tmp =pieces[i];
            pieces[i] = pieces[j];
            pieces[j] = tmp;
        }
        for(let i=0;i < pieces.length;i++){
           let tile= document.createElement("img");
           tile.src="game1_IMG/" + pieces[i] + ".jpg";

           //Drag 
           tile.draggable ="true";
           tile.addEventListener("dragstart", dragStart); //click on img to drag
           tile.addEventListener("dragover", dragOver);   //drag an img
           tile.addEventListener("dragenter", dragEnter); // dragging an img into another one
           tile.addEventListener("dragleave", dragLeave); //dragging an img away into another one
           tile.addEventListener("drop", dragDrop);       // drop an img onto onother one
           tile.addEventListener("dragend", dragEnd);     // after you completed dragDrop

           document.getElementById("pieces").append(tile);
        }
}*/
