const audio = new Audio('audio/hi kids i am Zain i .mp3');
function hiSound() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
    const audio2 = new Audio('audio/HEY-KIDS-JUMP-INTO-O.mp3');
    function gameSound() {
        if (audio2.paused) {
            audio2.play();
        } else {
            audio2.pause();
        }
    }


