let tileArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 
                 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H',
                 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L',
                 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P',
                 'Q', 'Q', 'R', 'R'];

let tileVals = [];
let tileIds = [];
let tilesFlipped = 0;

Array.prototype.tileShuffle = function () {
    let i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard() {
    tilesFlipped = 0;
    let output = '';
    tileArray.tileShuffle();
    for(let i =0; i < tileArray.length; i += 1) {
        output += '<div id="tile_'+ i +'" onclick="flipTile(this, \''+ tileArray[i] + '\')"></div>';
    }
    document.getElementById("board").innerHTML = output;
}
function flipTile(tile, val) {
    if(tile.innerHTML == "" && tileVals.length < 2) {
        tile.style.background = '#FFF';
        tile.innerHTML = val;
        if(tileVals.length == 0) {
            tileVals.push(val);
            tileIds.push(tile.id);
        } else if (tileVals.length == 1) {
            tileVals.push(val);
            tileIds.push(tile.id);
            if (tileVals[0] == tileVals[1]) {
                tilesFlipped += 2;
                // Clear both arrays
                tileVals = [];
                tileIds = [];
                // Check to see if the whole board is cleared
                if (tilesFlipped == tileArray.length) {
                    alert("Board is cleared. Generateing new board.");
                    document.getElementById('board').innerHTML = "";
                    newBoard();
                }
            } else { // Checking to see if no match was made
                function flip2Back() {
                    // Flip the 2 tiles back over
                    let tile1 = document.getElementById(tileIds[0]);
                    let tile2 = document.getElementById(tileIds[1]);
                    tile1.style.background = 'url(images/tile.jpg) -38px -27px';
                    tile1.innerHTML = "";
                    tile2.style.background = 'url(images/tile.jpg) -38px -27px';
                    tile2.innerHTML = "";
                    // Clear both arrays
                    tileVals = [];
                    tileIds = [];
                }
                setTimeout(flip2Back, 1200);
            }
        }
    }
}