const startState = require ( "./startState" );

describe ( "window.babylonProject.gameState.startState", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.gameState.StartState )
            .toBeDefined ();
    });

    test ( "instance has an update function", () =>
    {
        let startState = new window.babylonProject.gameState.StartState ();

        expect ( startState.update ).toBeDefined ();
    });

    test ( "instance.update() returns instance of StartState", () =>
    {
        let startState = new window.babylonProject.gameState.StartState ();

        expect ( startState.update () )
            .toBeInstanceOf (
                 window.babylonProject.gameState.StartState  );

    });


});
