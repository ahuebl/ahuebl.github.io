
let myApp = {

    createShip: function(shipLength, letter) {
        return {
            row: 0,
            col: 0,
            length: shipLength,
            name: letter,
            toString: function() {
                return "(" + this.row + "," + this.col + ") " + 
                        "Length: " + this.length + " Name: " + this.name;
            }
        };
    },

    // return an integer range min. - max.
    // max - min + 1 --> number of values
    rndInt: function(min, max) {
        /* let count = max - min + 1; // 10, 20 --> 11
        let x = Math.random() * count; // 0...10.99999
        x = Math.floor(x); // 0...10
        x = x + min; // 10...20 */
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    create2D: function(rows, cols) {
        let ray = [];
        let counter = 0;

        for (let row = 0; row < rows; row += 1) {
            let nextRow = [];

            for (let col = 0; col < cols; col += 1) {
                nextRow.push(counter);
                counter += 1;
            }
            ray.push(nextRow);
        }
        return ray;
    },

    main: function() {
        myApp.clrTxt();
        /* let grid = myApp.create2D(5, 2);
        myApp.print2D(grid); */
        let ship1 = myApp.createShip(3, "T");
        ship1.row = 4;
        ship1.col = 1;
        
        myApp.println(ship1.toString());
        let ship2 = myApp.createShip(5, "A");
        myApp.println(ship2.toString());
    },

    // 2D array is an array of arrays
    print2D: function(grid) {
        // print all rows
        for (let row = 0; row < grid.length; row += 1) {
            // print one row

            for (let col = 0; col < grid[row].length; col += 1) {
                myApp.print(grid[row][col] + " ");
            }
            // do a return after each row
            myApp.println("");
        }
    },

    print: function(str) {
        let out = document.getElementById("out");
        out.value = out.value + str;
    },

    println: function(str) {
        myApp.print(str + '\n');
    },

    clrTxt: function() {
        document.getElementById("out").value = "";
    },
};

window.onload = myApp.main;


