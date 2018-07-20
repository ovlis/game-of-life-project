// Create each Movie Thumbnail index
GOL.EachGameTable = (function(){

    function eachGameTable() {
        
        var myInfo = `
            <hr>
            <div class="eachGame">
                <table class="gameGridUI">
                    <tbody class="bodyGridUI">
                    </tbody>
                </table>
                <button type="button" class="btn btn-success" id="play">Play</button>
            </div>
            
        `;

        var template = Handlebars.compile(myInfo);
        var data = template({});
        document.querySelector('.allGames').innerHTML += data;

    }

return {
    init: eachGameTable
}

})();