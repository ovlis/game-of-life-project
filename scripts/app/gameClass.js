class Game {
    constructor(rows, cols) {
        this.cellsArray = this.cellsArrayInit(rows, cols);
        this.loopID;
    }

    cellsArrayInit(rows, cols) {
        var cellsArray = [];

        for (let row = 0; row < rows; row += 1) {
            cellsArray.push(new Array(cols));
        }
        for (let row = 0; row < rows; row += 1) {
            for (let cell = 0; cell < cols; cell += 1) {
                cellsArray[row][cell] = false;
            }
        }
        return cellsArray;
    }

    copyArrayByValue(oldArray) {
        var newCreatedArray = [];

        for (var i = 0; i < oldArray.length; i++) {
            newCreatedArray[i] = oldArray[i].slice();
        }
        return newCreatedArray;
    }

    configureCellState(oldCell, aliveNeighbors) {
        var newCell;

        if ((aliveNeighbors === 2 || aliveNeighbors === 3) && oldCell) {
            newCell = true;
        }
        else if (aliveNeighbors === 3 && !oldCell) {
            newCell = true;
        }
        else {
            newCell = false;
        }
        return newCell;
    }

    next() {
        var rows = this.cellsArray.length;
        var cols = this.cellsArray[0].length;
        var newCellsArray = this.copyArrayByValue(this.cellsArray);

        for (let row = 0; row < rows; row += 1) {
            for (let col = 0; col < cols; col += 1) {
                let aliveNeighbors = 0;

                if (this.cellsArray[row][col + 1]) {
                    aliveNeighbors += 1;
                }
                if (this.cellsArray[row][col - 1]) {
                    aliveNeighbors += 1;
                }
                if (this.cellsArray[row - 1]) {
                    if (this.cellsArray[row - 1][col - 1]) {
                        aliveNeighbors += 1;
                    }
                    if (this.cellsArray[row - 1][col + 1]) {
                        aliveNeighbors += 1;
                    }
                    if (this.cellsArray[row - 1][col]) {
                        aliveNeighbors += 1;
                    }
                }
                if (this.cellsArray[row + 1]) {
                    if (this.cellsArray[row + 1][col - 1]) {
                        aliveNeighbors += 1;
                    }
                    if (this.cellsArray[row + 1][col + 1]) {
                        aliveNeighbors += 1;
                    }
                    if (this.cellsArray[row + 1][col]) {
                        aliveNeighbors += 1;
                    }
                }
                var cellState = this.configureCellState(this.cellsArray[row][col], aliveNeighbors);
                newCellsArray[row][col] = cellState;
            }
        }
        this.cellsArray = this.copyArrayByValue(newCellsArray);
        return this.cellsArray;
    }

    compareArrays(cellsArray, newCellsArray) {
        var rows = cellsArray.length;
        var cols = cellsArray[0].length;
        var escapeLoop = true;

        for (let row = 0; row < rows; row += 1) {
            for (let col = 0; col < cols; col += 1) {
                if (cellsArray[row][col] !== newCellsArray[row][col]) {
                    escapeLoop = false;
                }
            }
        }
        return escapeLoop
    }
}
