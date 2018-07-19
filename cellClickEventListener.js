window.GOL.CellClickEventListener = (function(){

    function cellClickEventListener(e){
        
        
        var clickedRow = (e.target).getAttribute('data-row');
        var clickedCol = (e.target).getAttribute('data-col');
        
        if (e.target.style.backgroundColor === 'white') {
            e.target.style.backgroundColor = '#0069D9';
            console.log(window.GOL.cellsArray);
            window.GOL.cellsArray[clickedRow][clickedCol] = true;
        }
        else {
            e.target.style.backgroundColor = 'white';
            window.GOL.cellsArray[clickedRow][clickedCol] = false;
        }
    }

    return {
        init: cellClickEventListener
    }

})();