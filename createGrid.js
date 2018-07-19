window.GOL.CreateGrid = (function(){
    
    function createGrid() {
        //enable play button
        document.getElementById('play').disabled = false;

        var rows = document.getElementById('rowInput').value;
        var cols =  document.getElementById('colInput').value;

        // create grid
        GOL.GridUI.init(rows, cols);

        //create cellsArray 2d false
       var cellsArray = GOL.CellsArrayInit.init(rows, cols);

        //play
        document.getElementById('play').addEventListener('click',function(){setInterval(GOL.PlayCode.init.bind(null,rows, cols),500);});

    }


    return {
        init: createGrid,
    }
})();