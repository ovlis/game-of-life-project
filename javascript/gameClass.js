class Game {
    constructor(rows, cols) {
        this.cellsArray = this.cellsArrayInit( rows, cols );
    }

    cellsArrayInit(rows, cols) {

        var cellsArray = [];

        for (let row=0; row < rows; row+=1){
            cellsArray.push(new Array(cols));
        }

        for (let row=0; row < rows; row+=1) {
            for (let cell=0; cell < cols; cell+=1) {
                cellsArray[row][cell] = false;
            }
        }
        return cellsArray;

    }

    copyArrayByValue(oldArray, newCreatedArray) {
        
        for (var i = 0; i < oldArray.length; i++) {
            newCreatedArray[i] = oldArray[i].slice();
        }

        return newCreatedArray;

    }

    configureCellState(oldCell, aliveNeighbors) {

        var newCell;
        
        if (aliveNeighbors < 2) {
            newCell = false;
        }
        if ((aliveNeighbors === 2 || aliveNeighbors === 3) && oldCell === true) {
            newCell = true;
        }
        if (aliveNeighbors > 3) {
            newCell = false;
        }
        if (aliveNeighbors === 3 && oldCell === false) {
            newCell = true;
        }

        return newCell;

    }

    next(cellsArray) {
        
        var rows = cellsArray.length;
        var cols = cellsArray[0].length;
        var newCellsArray = [];

        var newCellsArray = this.copyArrayByValue(cellsArray,newCellsArray)
        
        for (let row=0; row < rows; row+=1) {
            for (let col=0; col < cols; col+=1) {

                var aliveNeighbors = 0;

                if (cellsArray[row][col+1] === true) {
                    aliveNeighbors += 1;
                }
                
                if (cellsArray[row][col-1] === true) {
                    aliveNeighbors += 1;
                }
                
                if (cellsArray[row-1]!== undefined) {

                    if (cellsArray[row-1][col-1] === true) {
                        aliveNeighbors += 1;
                    }
                    
                    if (cellsArray[row-1][col+1] === true) {
                        aliveNeighbors += 1;
                    }

                    if (cellsArray[row-1][col] === true) {
                        aliveNeighbors += 1;
                    }

                }
                

                if (cellsArray[row+1]!== undefined) {

                    if (cellsArray[row+1][col-1] === true) {
                        aliveNeighbors += 1;
                    }
                    
                    if (cellsArray[row+1][col+1] === true) {
                        aliveNeighbors += 1;
                    }

                    if (cellsArray[row+1][col] === true) {
                        aliveNeighbors += 1;
                    }

                }

                var cellState = this.configureCellState(cellsArray[row][col], aliveNeighbors);
                newCellsArray[row][col] = cellState;

            }
        }

        this.cellsArray = this.copyArrayByValue(newCellsArray, cellsArray);

        return this.cellsArray;
    }

    compareArrays(cellsArray, newCellsArray) {
        var rows = cellsArray.length;
        var cols = cellsArray[0].length;
        var escapeLoop = true;
        
        for (let row = 0; row < rows; row += 1) {
            for (let col=0; col< cols; col += 1) {
                if (cellsArray[row][col] !== newCellsArray[row][col]) {
                    escapeLoop = false;
                }
            }
        }

        return escapeLoop
    }

}
