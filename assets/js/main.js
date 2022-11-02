// variables
let z;
// getting the element into the js
const container = document.getElementById('container');
const btnStart = document.getElementById('start');
const btnClear = document.getElementById('clear');
// linking the functions
btnStart.addEventListener('click', start);

// function
function start(){
    // input
    squareNumber = parseInt(document.getElementById('difficulty').value);
    // variables
    let x = 1;
    let bombs = [];
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
            if(bombs.includes(x)) {
                div.setAttribute('class', 'trigger cell');               
            }
            else{
                div.setAttribute('class', 'safe cell');
            }
            document.getElementById(`row${k}`).appendChild(div);
            document.getElementById(x).innerHTML = x;
            x++;
        }
    }
        
}
