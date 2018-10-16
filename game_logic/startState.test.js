const startState = require ( "./startState" );

describe ( "window.babylonProject.systemState.startState", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.systemState.StartState )
            .toBeDefined ();
    });

    test ( "instance has an update function", () =>
    {
        let startState = new window.babylonProject.systemState.StartState ();

        expect ( startState.update ).toBeDefined ();
    });

    test ( "instance.update() returns instance of StartState", () =>
    {
        let startState = new window.babylonProject.systemState.StartState ();

        expect ( startState.update () )
            .toBeInstanceOf (
                 window.babylonProject.systemState.StartState  );

    });


});
