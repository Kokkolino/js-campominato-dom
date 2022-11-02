// global variables
let z;
let bombs = [];
let score;
let maxScore;

// getting the element into the js
const container = document.getElementById('container');
const btnStart = document.getElementById('start');
// linking the functions
btnStart.addEventListener('click', start);

// function
function start(){
    // input
    squareNumber = parseInt(document.getElementById('difficulty').value);
    // variables
    score = 0;
    maxScore = (squareNumber * squareNumber) - 16;
    let x = 1;
    bombs = [];
    container.classList.remove("stopClick");
    // clear box
    document.getElementById('score').innerHTML = ``;
    document.getElementById('container').innerHTML = "";
    // random bombs
    while(bombs.length < 16){
        z = Math.floor(Math.random() * (squareNumber * squareNumber)) + 1;
        if(bombs.includes(z) == false){
            bombs.push(z);
        }
    }

    console.log(bombs);
    // loop
    for (k = 1; k <= squareNumber; ++k) {
        // create row
        let div = document.createElement('div');
        div.setAttribute('class', 'sub-container');
        div.setAttribute('id', `row${k}` );
        document.getElementById('container').appendChild(div);

        for (let i = 1; i <= squareNumber; ++i) {
            // create element
            let div = document.createElement('div');
            div.setAttribute('id', x );
            div.setAttribute('class', 'cell');
            div.setAttribute('onclick', `bombsCheck(${x})`);               
            document.getElementById(`row${k}`).appendChild(div);
            document.getElementById(x).innerHTML = x;
            x++;
        }
    }
}


function bombsCheck(num){
    if(bombs.includes(num))
    {
        container.setAttribute('class', 'stopClick')
        for (let i = 0; i < bombs.length; i++) {
            document.getElementById(bombs[i]).setAttribute('class', 'cell trigger')
            document.getElementById('score').innerHTML = `<h3>Hai innescato una bomba! Hai ottenuto ${score} punti in questa partita.</h3>`;

        }
    }
    else{
        document.getElementById(num).setAttribute('class', 'cell safe stopClickElement')
        score++;
        document.getElementById('score').innerHTML = `<h3>Hai ${score} punti.</h3>`;
        if(score == maxScore){
            document.getElementById('score').innerHTML = `<h3>Hai ottenuto ${score} punti, il massimo punteggio per questa difficoltá! GG!</h3>`;
            container.setAttribute('class', 'stopClick')

        }
    }
    console.log(score)
}
