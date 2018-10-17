const startState = require ( "./startState" );

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

function get_mock_scene ()
{
    let MockScene = jest.fn();

    return new MockScene();
}

/****************************************************************************
 * TESTS
 ***************************************************************************/

describe ( "window.babylonProject.gameState.startState", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.gameState.StartState )
            .toBeDefined ();
    });

    test ( "instance has an update function", () =>
    {
        let mock_scene = get_mock_scene();

        let startState = 
            new window.babylonProject.gameState.StartState ( mock_scene );

        expect ( startState.update ).toBeDefined ();
    });

    test ( "constructing StartState with no args throws error", () =>
    {
        expect (() =>
                {
                    new window.babylonProject.gameState.StartState ()
                })
            .toThrow ();
    });

    test ( "instance.update() returns instance of StartState", () =>
    {
        let mock_scene = get_mock_scene();

        let startState = 
            new window.babylonProject.gameState.StartState ( mock_scene );



        expect ( startState.update () )
            .toBeInstanceOf (
                 window.babylonProject.gameState.StartState  );

    });


});
