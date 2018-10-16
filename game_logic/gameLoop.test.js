const renderLoop = require ( "./gameLoop" );

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

beforeEach ( () =>
{
    window.babylonProject.activeScene = jest.fn ();

    window.babylonProject.activeScene.render = jest.fn ();
});

/****************************************************************************
 * TESTS
 ***************************************************************************/

describe ( "window.babylonProject.gameLoop", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.gameLoop ).toBeDefined ();
    });

    test ( "calls window.babylonProject.activeScene.render", () =>
    {
        window.babylonProject.gameLoop ();

        expect ( window.babylonProject.activeScene.render )
            .toHaveBeenCalledTimes ( 1 );
    });
});
