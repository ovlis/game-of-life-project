window.GOL.AliveCellsUI = (function(){

    function aliveCellsUI(rows, cols, cellsArray) {

        // Visualize alive cells
        for (let row=0; row < rows; row+=1) {
            for (let col=0; col < cols; col+=1) {

                let positionOfTd = row*cols + col;

                if (cellsArray[row][col] === true){
                    document.getElementsByClassName('colUI')[positionOfTd].style.backgroundColor = '#0069D9';
                }
                else {
                    document.getElementsByClassName('colUI')[positionOfTd].style.backgroundColor = 'white';
                }
            }
        }
        
    }

    return {
        init: aliveCellsUI
    }
    

})();