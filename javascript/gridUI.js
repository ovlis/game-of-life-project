window.GOL.GridUI = (function(){
    
    function gridUI (game, rows,cols) {

        document.getElementById('gridUI').innerHTML = '';

        for ( let row=0; row<rows; row+=1) {
            let rowUI = document.createElement('tr')
            rowUI.setAttribute('class','rowUI');

            for (let col=0; col<cols; col+=1) {
                let colUI = document.createElement('td');
                colUI.setAttribute('class','colUI');
                colUI.setAttribute('style', 'background-color: white');
                colUI.setAttribute('data-row',row);
                colUI.setAttribute('data-col',col);
                colUI.addEventListener('click',GOL.CellClickEventListener.init.bind(null,game));
                rowUI.appendChild(colUI);
            }
            
            document.getElementById('gridUI').appendChild(rowUI);
        }

    }

    return {
        init: gridUI
    }
    
})();