window.GOL.GridUI = (function(){
    
    function gridUI (game, rows,cols) {

        var eachGrid = document.createElement('div');
        eachGrid.setAttribute('class','eachGrid');


        for ( let row=0; row<rows; row+=1) {
            let rowUI = document.createElement('tr')
            rowUI.setAttribute('class','rowUI');

            for (let col=0; col<cols; col+=1) {
                let colUI = document.createElement('td');
                colUI.setAttribute('class','colUI');
                colUI.setAttribute('style', 'background-color: white');
                colUI.setAttribute('data-row',row);
                colUI.setAttribute('data-col',col);
                colUI.addEventListener('click',GOL.CellClickEventListener.init.bind(game,game));
                rowUI.appendChild(colUI);
            }
            
            eachGrid.appendChild(rowUI);
        }

        GOL.EachGameTable.init();
        var lastTableBody = document.getElementsByClassName('bodyGridUI')[document.getElementsByClassName('bodyGridUI').length - 1];
        lastTableBody.appendChild(eachGrid);

    }

    return {
        init: gridUI
    }
    
})();