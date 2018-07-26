describe('Math', function () {
    var game;

    beforeEach(function () {
        game = new Game(5, 5);
        game.cellsArray =   [[false, false, false, false, false],
        [false, false, false, false, false],
        [false, true, true, true, false],
        [false, false, false, false, false],
        [false, false, false, false, false]]
    });
    it('configureCellState', function () {
        assert.equal(game.configureCellState(true, 4), false);
        assert.equal(game.configureCellState(true, 3), true);
        assert.equal(game.configureCellState(true, 2), true);
        assert.equal(game.configureCellState(true, 1), false);
        assert.equal(game.configureCellState(false, 3), true);
        assert.equal(game.configureCellState(true, 3), true);
    });

    it('cellsArrayInit', function () {
        assert.deepEqual(game.cellsArrayInit(2, 2), [[false, false], [false, false]]);
        assert.deepEqual(game.cellsArrayInit(3, 3), [[false, false, false], [false, false, false], [false, false, false]]);
        assert.deepEqual(game.cellsArrayInit(3, 2), [[false, false], [false, false], [false, false]]);
        assert.deepEqual(game.cellsArrayInit(5, 5),                                     
                                                [[false, false, false, false, false],
                                                [false, false, false, false, false],
                                                [false, false, false, false, false],
                                                [false, false, false, false, false],
                                                [false, false, false, false, false]]
        );
    });
    it('copyArrayByValue', function () {
        assert.deepEqual(game.copyArrayByValue(
            [[false, false, false], [false, false, false], [false, false, false]])
            ,[[false, false, false], [false, false, false], [false, false, false]]);
    });
    it('compareArrays', function () {
        assert.equal(game.compareArrays([[false, false], [false, false]], [[false, false], [false, true]]), false);
        assert.equal(game.compareArrays([[false, false], [false, false]], [[false, false], [false, false]]), true);
        assert.equal(game.compareArrays([[false, false], [undefined, false]], [[false, false], [false, true]]), false);
    });
    it('next', function () {
        assert.deepEqual(game.next(),
                                    [[false, false, false, false, false],
                                    [false, false, true, false, false],
                                    [false, false, true, false, false],
                                    [false, false, true, false, false],
                                    [false, false, false, false, false]]
        )
        assert.deepEqual(game.next(),   
                                    [[false, false, false, false, false],
                                    [false, false, false, false, false],
                                    [false, true, true, true, false],
                                    [false, false, false, false, false],
                                    [false, false, false, false, false]]
        )
        assert.deepEqual(game.next(),
                                    [[false, false, false, false, false],
                                    [false, false, true, false, false],
                                    [false, false, true, false, false],
                                    [false, false, true, false, false],
                                    [false, false, false, false, false]]
        )
    });
});