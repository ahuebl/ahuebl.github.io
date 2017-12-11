/*
 * Concentration Game
 * Allyson Huebl
 */


let tileArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 
                'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H',
                'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L',
                'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P',
                'Q', 'Q', 'R', 'R'];
let tileVals = [];
let flippedIDs = [];
let tilesFaceUp = 0;
let numberOfGuesses = 0;
let okToFlip = true;
const FLIP_BACK_MILSECS = 1100;
const BG_COLOR = "#ADA8BE";

// Add shuffle to the array class
Array.prototype.tileShuffle = function () {
    let i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

// Inititialize the HTML divs for the user interface
function createDivs() {
    let divs = '';

    for (let letter of tileArray) {
        let divID = 'id="tile_' + letter + '"';
        letter = "'" + letter + "'";
        let action = ' onclick="flipTile(this,' + letter + ');"';
        divs += '<div ' + divID + action + '></div>';
    }
    document.getElementById("board").innerHTML = divs;
}

// Create a new game, variables and game board
function newBoard() {
    numberOfGuesses = 0;
    tilesFaceUp = 0;
    tileArray.tileShuffle(); // Shuffling the cards
    createDivs();
}

// Check for all tiles flipped, if so, announce it, start new game
function announceIfWin() {
    if (tilesFaceUp === tileArray.length) {
        // Use timer wait so last card gets shown
        setTimeout(function() {
            alert("Number of guesses " + numberOfGuesses)
            document.getElementById('board').innerHTML = "";
            alert("Board is cleared. Generateing new board.");
            newBoard();
        }, 100);
    }
}

// Display the face of a tile
function showTile(tile, val) {
    tile.style.background = BG_COLOR;
    tile.innerHTML = val;
}

// Flip one tile back over
function flipBack(theTile) {
    theTile.style.background = 'url(images/tile.jpg) -38px -27px';
    theTile.innerHTML = "";
}

// No match, flip the tiles back over
function flipTilesBackOver() {
    // copy the tiles first for delayed flipBack function
    let savedTiles = flippedIDs.slice(); 
    // stop new flips until cards turned back over
    okToFlip = false;   
    setTimeout(function() {
            flipBack(savedTiles[0]);
            flipBack(savedTiles[1]);
            okToFlip = true;
        }, FLIP_BACK_MILSECS);
}

// Do the two flipped tiles match?
function flippedTilesMatch() {
    return flippedIDs[0].innerHTML === flippedIDs[1].innerHTML;
}

// Is a tile face down?
function faceDownTile(tile) {
    return tile.innerHTML == "";
}

// Check if two flipped tiles match
function matchOrFlipBack() {
    // Do the two tiles match?
    if (flippedTilesMatch()) {
        tilesFaceUp += 2;
        announceIfWin();
    } else {
        flipTilesBackOver();
    }
}

// Handle clicks on tiles, two tile flips make a guess
function flipTile(tile, val) {
    // Testing if user has not clicked on this tile (stops duplicate click)
    //  and stop clicking action after two tiles already clicked
    if (faceDownTile(tile) && okToFlip) {
        showTile(tile, val);
        flippedIDs.push(tile);
        // If second tile flipped, check for match, etc.
        if (flippedIDs.length == 2) { 
            numberOfGuesses += 1;
            matchOrFlipBack();
            flippedIDs = [];  // Clear the array holding the two flipped tiles
        }
    }
}
