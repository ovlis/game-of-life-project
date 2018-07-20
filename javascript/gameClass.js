class Game {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.cellsArray = this.cellsArrayInit(this.rows, this.cols);
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
        console.log('hey');
        for (var i = 0; i < oldArray.length; i++) {
            newCreatedArray[i] = oldArray[i].slice();
        }

        return newCreatedArray;

    }

    configureCellState(oldCell, newCell, aliveNeighbors) {

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

    logic(rows,cols,cellsArray) {
        
        var newCellsArray = [];
        console.log(this);
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

                var cellState = this.configureCellState(cellsArray[row][col], newCellsArray[row][col], aliveNeighbors);
                newCellsArray[row][col] = cellState;

            }
        }

        this.cellsArray = this.copyArrayByValue(newCellsArray, cellsArray);
        GOL.AliveCellsUI.init(rows,cols, cellsArray)

    }

}
