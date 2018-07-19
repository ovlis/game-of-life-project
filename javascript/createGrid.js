window.GOL.CreateGrid = (function(){
    
    function createGrid() {

        //enable play button
        document.getElementById('play').disabled = false;

        //clear interval and event listener
        clearInterval(GOL.playCodeID);

        var rows = document.getElementById('rowInput').value;
        var cols =  document.getElementById('colInput').value;

        // create grid
        GOL.GridUI.init(rows, cols);

        //create cellsArray 2d false
       var cellsArray = GOL.CellsArrayInit.init(rows, cols);

        //play
        document.getElementById('play').addEventListener('click',playEventListener);

        function playEventListener () {
            document.getElementById('play').removeEventListener('click',playEventListener);
            var playCodeInitBinded = GOL.PlayCode.init.bind(null,rows, cols);
            GOL.playCodeID = setInterval(playCodeInitBinded,500);
        }

    }


    return {
        init: createGrid,
    }
})();