let keys = document.querySelectorAll(".key");


for(let x = 0; x < keys.length; x++){
    // keys[x].addEventListener("click",function(){
        // alert(keys[x].innerHTML.toLowerCase());
        playAudio(keys[x].innerHTML.toLowerCase());

    // });
}


document.addEventListener("keydown",function(keybtn){
    // console.log(keybtn.keynum);
    playAudio(keybtn.key.toLowerCase());
    let pressed_btn = keybtn.key.toLowerCase();

    for(let x = 0;x < keys.length; x++){
        keys[x].classList.remove('activated');
    }

    for(let x = 0; x < keys.length; x++){
        if(pressed_btn == keys[x].innerHTML.toLowerCase()){
            keys[x].classList.add('activated');
        }
    }
});

function playAudio(keynum){
    switch(keynum){
        case 'a':
            var audio = new Audio('/music/a-3.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('/music/a3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('/music/b3.mp3');
            audio.play();
            break;
        case 'f':
            var audio = new Audio('/music/b4.mp3');
            audio.play();
            break;
        case 'g':
            var audio = new Audio('/music/c3.mp3');
            audio.play();
            break;
        case 'h':
            var audio = new Audio('/music/d3.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('/music/do.mp3');
            audio.play();
        case 'k':
            var audio = new Audio('/music/doh.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('/music/e3.mp3');
            audio.play();
            break;
        case 'z':
            var audio = new Audio('/music/f3.mp3');
            audio.play();
            break;
        case 'x':
            var audio = new Audio('/music/fa.mp3');
            audio.play();
            break;
        case 'c':
            var audio = new Audio('/music/g3.mp3');
            audio.play();
            break;
        case 'v':
            var audio = new Audio('/music/la.mp3');
            audio.play();
            break;
        case 'b':
            var audio = new Audio('/music/mi.mp3');
            audio.play();
            break;
        case 'n':
            var audio = new Audio('/music/re.mp3');
            audio.play();
            break;
        case 'm':
            var audio = new Audio('/music/sol.mp3');
            audio.play();
            break;
    }

}
