const renderLoop = require ( "./renderLoop" );

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

describe ( "window.babylonProject.renderLoop", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.renderLoop ).toBeDefined ();
    });

    test ( "calls window.babylonProject.activeScene.render", () =>
    {
        window.babylonProject.renderLoop ();

        expect ( window.babylonProject.activeScene.render )
            .toHaveBeenCalledTimes ( 1 );
    });
});
