window.GOL.CellClickEventListener = (function(){

    function cellClickEventListener(game, e){
        console.log(e);
        var clickedRow = (e.target).getAttribute('data-row');
        var clickedCol = (e.target).getAttribute('data-col');
        
        if (e.target.style.backgroundColor === 'white') {
            e.target.style.backgroundColor = '#0069D9';
            game.cellsArray[clickedRow][clickedCol] = true;
        }
        else {
            e.target.style.backgroundColor = 'white';
            game.cellsArray[clickedRow][clickedCol] = false;
        }
    }

    return {
        init: cellClickEventListener
    }

})();