window.GOL.CellsArrayInit = (function(){

    var cellsArray = [];

    function cellsArrayInit(rows, cols) {
        for (let row=0; row < rows; row+=1){
            cellsArray.push(new Array(cols));
        }

        for (let row=0; row < rows; row+=1) {
            for (let cell=0; cell < cols; cell+=1) {
                cellsArray[row][cell] = false;
            }
        }

        GOL.cellsArray = cellsArray;
    }

    return {
        init: cellsArrayInit
    }

})();