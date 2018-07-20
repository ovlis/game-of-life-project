window.GOL.Home = (function(){

    document.getElementById('createGrid').addEventListener('click', gridInit);

    function gridInit() {

        document.getElementById('play').disabled = false;

        var rows = document.getElementById('rowInput').value;
        var cols =  document.getElementById('colInput').value;

        var game = new Game(rows, cols);

        GOL.GridUI.init(game, rows, cols);

        document.getElementById('play').addEventListener('click', playEventListener);

        function playEventListener() {
            document.getElementById('play').disabled = true;
            var play = game.logic.bind(game,rows, cols, game.cellsArray);
            
            game.id = setInterval(play, 500);
            console.log(game);
        }

    }


})();