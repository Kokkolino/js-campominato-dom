// variables
let z;
let bombs = [];
let score;

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
    let x = 1;
    // clear box
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
        document.getElementById(num).setAttribute('class', 'cell trigger')
    }
    else{
        document.getElementById(num).setAttribute('class', 'cell safe')
        score++;
    }
    console.log(score)
}
