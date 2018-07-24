window.GOL.GridUI = (function(){
    
    function gridUI (gamesArray, indexOfCurrentGame) {

        var gameCellsArray = gamesArray[indexOfCurrentGame].cellsArray;
        var rows = gameCellsArray.length;
        var cols = gameCellsArray[0].length;

        var eachGame = document.createElement('div');
        eachGame.setAttribute('class', 'eachGame');
        eachGame.setAttribute('id', indexOfCurrentGame);

        var hr = document.createElement('hr');

        var eachGameGrid = document.createElement('table');
        eachGameGrid.setAttribute('class', 'eachGameGrid');

        var gridBody = document.createElement('tbody');
        gridBody.setAttribute('class', 'gridBody');

        for (let row = 0; row < rows; row += 1) {
            let gridRow = document.createElement('tr');
            gridRow.setAttribute('class', 'gridRow');
            
            for (let col = 0; col < cols; col += 1) {
                let gridCol = document.createElement('td');
                gridCol.setAttribute('class', 'gridCol');
                gridCol.setAttribute('data-row', row);
                gridCol.setAttribute('data-col', col);
                gridCol.style.backgroundColor = 'white';
                gridCol.addEventListener('click', GOL.CellClickEventListener.init.bind(null, gameCellsArray) )
                gridRow.appendChild(gridCol);
            }
            gridBody.appendChild(gridRow);
        }

        var playButton = document.createElement('button');
        playButton.setAttribute('class', 'btn btn-success playBtn');
        playButton.textContent = 'Play';

        eachGameGrid.appendChild(gridBody);
        eachGame.appendChild(hr);
        eachGame.appendChild(eachGameGrid);
        eachGame.appendChild(playButton)
        document.querySelector('.allGames').appendChild(eachGame);

        // Hide Table
        var hideGrid = document.createElement('div');
        hideGrid.setAttribute('class', 'hideGridstatus');
        document.getElementById(indexOfCurrentGame).querySelector('.eachGameGrid').appendChild(hideGrid);

    }

    return {
        init: gridUI
    }
    
})();