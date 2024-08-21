const audio = new Audio('hi.m4a');
function hiSound() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
    const audio2 = new Audio('game.m4a');
    function gameSound() {
        if (audio2.paused) {
            audio2.play();
        } else {
            audio2.pause();
        }
    }


