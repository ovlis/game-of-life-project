window.GOL.PlayCode = (function(){

    document.getElementById('createGrid').addEventListener('click',GOL.CreateGrid.init);

    //whet play button does!
    function playCode(rows, cols) {
        
        var cellsArray = GOL.cellsArray;
        
        //Copy cellsArray by value
        var newCellsArray = [];
        
        for (var i = 0; i < cellsArray.length; i++) {
            newCellsArray[i] = cellsArray[i].slice();
        }

        // game of life logic
        for (let row=0; row < rows; row+=1) {
            for (let col=0; col < cols; col+=1) {

                // Counter alive neighbors
                let aliveNeighbors = 0;

                if ((cellsArray[row][col+1] === true) && (cellsArray[row][col+1] !== undefined)) {
                    aliveNeighbors += 1;
                }
                
                if ((cellsArray[row][col-1] === true) && (cellsArray[row][col-1] !== undefined)) {
                    aliveNeighbors += 1;
                }
                
                if (cellsArray[row-1]!== undefined) {
                    if ((cellsArray[row-1][col-1] === true) && (cellsArray[row][col-1] !== undefined)) {
                        aliveNeighbors += 1;
                    }
                    
                    if ((cellsArray[row-1][col+1] === true) && (cellsArray[row][col+1] !== undefined)) {
                        aliveNeighbors += 1;
                    }
                    if ((cellsArray[row-1][col] === true) && (cellsArray[row-1][col] !== undefined)) {
                        aliveNeighbors += 1;
                    }
                }
                

                if (cellsArray[row+1]!== undefined) {
                    if ((cellsArray[row+1][col-1] === true) && (cellsArray[row][col-1])!== undefined) {
                        aliveNeighbors += 1;
                    }
                    
                    if ((cellsArray[row+1][col+1] === true) && (cellsArray[row][col+1])!== undefined) {
                        aliveNeighbors += 1;
                    }
                    if ((cellsArray[row+1][col] === true) && (cellsArray[row+1][col] !== undefined)) {
                        aliveNeighbors += 1;
                    }
                }

                // Configure cell state
                if (aliveNeighbors < 2) {
                    newCellsArray[row][col] = false;
                }
                if ((aliveNeighbors === 2 || aliveNeighbors === 3) && cellsArray[row][col] === true) {
                    newCellsArray[row][col] = true;
                }
                if (aliveNeighbors > 3) {
                    newCellsArray[row][col] = false;
                }
                if (aliveNeighbors === 3 && cellsArray[row][col] === false) {
                    newCellsArray[row][col] = true;
                }

            }
        }
        //Copy newCellsArray by value
        for (var i = 0; i < newCellsArray.length; i++) {
            cellsArray[i] = newCellsArray[i].slice();
        }

        // Visualize alive cells
        for (let row2=0; row2 < rows; row2+=1) {
            for (let col2=0; col2 < cols; col2+=1) {

                let positionOfTd = row2*cols + col2;

                if (cellsArray[row2][col2] === true){
                    document.getElementsByClassName('colUI')[positionOfTd].style.backgroundColor = '#0069D9';
                }
                else {
                    document.getElementsByClassName('colUI')[positionOfTd].style.backgroundColor = 'white';
                }
            }
        }

    }

    return {
        init: playCode
    }

    

})();