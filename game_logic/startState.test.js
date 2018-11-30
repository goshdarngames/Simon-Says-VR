const startState = require ( "./startState" );

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

function get_mock_scene ()
{
    let MockScene = jest.fn (
            function ()
            {
                this.render = jest.fn();
            });

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

    test ( "startState stores babylonScene passed in constructor", () =>
    {
        let babylonScene = jest.fn ();

        let startState = 
            new window.babylonProject.gameState.StartState ( babylonScene );

        expect ( startState.babylonScene ).toBe ( babylonScene );
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

    test ( "startscene update calls render() on startscene.babylonScene",
            () =>
    {
        let mock_scene = get_mock_scene();

        let startState = 
            new window.babylonProject.gameState.StartState ( mock_scene );
        
        startState.update ();
        
        expect ( startState.babylonScene.render )
            .toHaveBeenCalledTimes ( 1 );
    });

});
