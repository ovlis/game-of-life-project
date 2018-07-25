window.GOL.Home = (function () {
    document.getElementById('createGrid').addEventListener('click', gridInit);

    function gridInit() {
        var rows = document.getElementById('rowInput').value;
        var cols = document.getElementById('colInput').value;

        var game = new Game(rows, cols);
        var indexOfCurrentGame = window.GOL.indexOfCurrentGame++;
        GOL.GridUI.init(game.cellsArray, indexOfCurrentGame);

        var playBtn = document.getElementById(indexOfCurrentGame).querySelector('.playBtn');
        playBtn.addEventListener('click', playEventListener);

        function playEventListener(e) {
            e.target.disabled = true;
            document.getElementById(indexOfCurrentGame).querySelector('.hideGridstatus').classList.add('hideGrid');

            game.loopID =
                setInterval(
                    function () {
                        var oldCellsArray = game.copyArrayByValue(game.cellsArray);
                        game.next();
                        var newCellsArray = game.copyArrayByValue(game.cellsArray);

                        if (game.compareArrays(oldCellsArray, newCellsArray)) {
                            clearInterval(game.loopID);
                            playBtn.classList.remove('btn-success');
                            playBtn.textContent = 'Ended';
                        }
                        else {
                            GOL.AliveCellsUI.init(indexOfCurrentGame, game);
                        }
                    }
                    , 500)
        }

    }


})();