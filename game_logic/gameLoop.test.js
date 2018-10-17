const renderLoop = require ( "./gameLoop" );

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/
function get_mock_game_state ()
{
    let MockState = jest.fn (
            function ()
            {
                this.update = jest.fn(
                        function ()
                        {
                            return this;
                        });
            });

    return new MockState ();
}
beforeEach ( () =>
{
});

/****************************************************************************
 * TESTS
 ***************************************************************************/

test ( "window.babylonProject.gameState is defined", () =>
{
    expect ( window.babylonProject.gameState ).toBeDefined ();
});

describe ( "window.babylonProject.gameLoop", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.gameLoop ).toBeDefined ();
    });

    test ( "calls update() on window.babylonProject.gameState", () =>
    {
        window.babylonProject.gameState = get_mock_game_state ();
        
        window.babylonProject.gameLoop ();

        expect ( window.babylonProject.gameState.update )
            .toHaveBeenCalledTimes ( 1 );
    });

    test ( "stores result of window.babylonProject.gameState.update() in "+
           "window.babylonProject.gameState", () =>
    {
        window.babylonProject.gameState = get_mock_game_state ();

        window.babylonProject.gameState.update
           .mockReturnValue(10); 
         
        window.babylonProject.gameLoop ();

        expect ( window.babylonProject.gameState ).toBe( 10 );
    });


});
