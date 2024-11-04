let strictMode = false;
let powerOn = false;
const sequence = [];
let usersequence = [];
let level = 1;
const levelCount = document.querySelector('.level-count');

function startGame(){
    sequence.length = 0;
    usersequence.length =0;
    level = 1;
    levelCount.textContent = level;
    nextRound();
    document.getElementById("start-btn").disabled = true;
    document.getElementById("power-btn").disabled = false;
}

function nextRound(){
    addToSequence();
    playSequence();
}

function addToSequence() {
    const randomColor = Math.floor(Math.random() * 4) + 1;
    sequence.push(randomColor);
}

function checkSequence(){
    for (let i=0; i< usersequence.length; i++){
        if(usersequence[i] !== sequence[i]){
            return false
        }
        else{
            return true
        }
    }
}


function highlightButton(color){
    const button = document.querySelector(`[data-color="${color}"]`)
    if (Number(color) == 1){
        button.style.backgroundColor = 'lightgreen'
    }
    else if(Number(color)==2){
        button.stylebackgroundColor = 'tomato'
    }
    else if(Number(color)==3){
        button.stylebackgroundColor = 'yellow'
    }
    else if(Number(color)==4){
        button.stylebackgroundColor = 'lightskyblue'
    }
    setTimeout(()=>{
        button.attributes.removeNamesItem('style')
    },300)

}

function playSequence(){
    let i=0;
    const intervalId = setInterval(()=>{
        highlightButton(sequence[i]);
        i++;
        if ( i >= sequence.length){
            clearInterval(intervalId);
            enableButtons();
        }
    })
}




function handleClick(){
    if(powerOn){
        const userColor = button.getAttribute("data-color");
        usersequence.push(Number(userColor));
        highlightButton(userColor);
        if(!checkSequence()){
            if(strictMode){
                alert(`Game over let's begin again \nFinal Score :${level} `);
                togglePower();
                startGame();
            }
            else{
                alert('Wrong sequence! press start again');
                userSequence = [];
                document.getElementById('power-btn').addEventListener('click',()=>{
                    playSequence();
                })
            }
        }
        else if (userSequence.length === sequence.length){
            userSequence = [];
			level++;
			levelCount.textContent = level;

        }

    }

}


