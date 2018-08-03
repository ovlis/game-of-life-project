window.GOL.OnPlayCells = (function() {
    function onPlayCells(indexOfCurrentGame, game) {
        var currentGame = document.getElementById(indexOfCurrentGame);
        var cellsArray = game.cellsArray;
        var rows = cellsArray.length;
        var cols = cellsArray[0].length;

        // Visualize alive cells
        for (let row = 0; row < rows; row += 1) {
            for (let col = 0; col < cols; col += 1) {
                let positionOfTd = row * cols + col;

                if (cellsArray[row][col] === true) {
                    currentGame.getElementsByClassName('gridCol')[positionOfTd].style.backgroundColor = '#0069D9';
                } else {
                    currentGame.getElementsByClassName('gridCol')[positionOfTd].style.backgroundColor = 'white';
                }
            }
        }
    }

    return {
        init: onPlayCells
    };
})();
