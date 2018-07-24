window.GOL.Home = (function () {

    var gamesArray = [];
    document.getElementById('createGrid').addEventListener('click', gridInit);

    function gridInit() {

        var rows = document.getElementById('rowInput').value;
        var cols = document.getElementById('colInput').value;

        var game = new Game(rows, cols);
        gamesArray.push(game);
        var indexOfCurrentGame = gamesArray.indexOf(game);

        GOL.GridUI.init(gamesArray, indexOfCurrentGame);

        var playBtn = document.getElementById(indexOfCurrentGame).querySelector('.playBtn');
        playBtn.addEventListener('click', playEventListener);

        function playEventListener(e) {
            e.target.disabled = true;
            document.getElementById(indexOfCurrentGame).querySelector('.hideGridstatus').classList.add('hideGrid');
            var cellsArray = game.copyArrayByValue(gamesArray[indexOfCurrentGame].cellsArray, []);

            gamesArray[indexOfCurrentGame].loopID =
                setInterval(
                    function () {
                        var oldCellsArray = game.copyArrayByValue(cellsArray, []);

                        if (game.compareArrays(oldCellsArray, game.next(cellsArray))) {
                            clearInterval(gamesArray[indexOfCurrentGame].loopID);
                            document.getElementById(indexOfCurrentGame).querySelector('.playBtn').classList.remove('btn-success');
                            document.getElementById(indexOfCurrentGame).querySelector('.playBtn').textContent = 'Ended';
                            console.log('heyyy');
                        }
                        else {
                            cellsArray = oldCellsArray;
                            cellsArray = game.next(cellsArray);
                            GOL.AliveCellsUI.init(indexOfCurrentGame, cellsArray);
                        }
                    }
                    , 500)
        }

    }


})();