// var assert = require('assert')

describe('Math', function () {

    var game;
    beforeEach(function () {
        game = new Game(5, 5);
    });

    it('configureCellState true, 4 neighbors', function () {
        assert.equal(game.configureCellState(true, 4), false);
        assert.equal(game.configureCellState(true, 3), true);
        assert.equal(game.configureCellState(true, 2), true);
        assert.equal(game.configureCellState(true, 1), false);
    });

    it('cellsArrayInit', function () {
        assert.deepEqual(game.cellsArrayInit(2, 2), [[false, false], [false, false]])
    });

});