const startState = require ( "./startState" );

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

let MockScene = jest.fn (
    function ()
    {
        this.render = jest.fn();
    });

let MockMeshBuilder = jest.fn (
    function ()
    {
        this.CreateBox = jest.fn(
            function ()
            {
                return new MockBox ();
            });
    });

let MockBox = jest.fn (
    function ()
    {
        this.position = { x:0, y:0, z:0 };
    });

MockBabylon = jest.fn (
    function ()
    {
  
        this.MeshBuilder = new MockMeshBuilder ();      

    });

/****************************************************************************
 * TESTS
 ***************************************************************************/

describe ( "window.babylonProject.startState", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.StartState )
            .toBeDefined ();
    });

    test ( "instance has an update function", () =>
    {
        let mock_babylon = new MockBabylon ();
        let mock_scene = new MockScene ();

        let startState = 
            new window.babylonProject
                .StartState ( mock_babylon, mock_scene );

        expect ( startState.update ).toBeDefined ();
    });

    test ( "constructing StartState with no args throws error", () =>
    {
        expect (() =>
                {
                    new window.babylonProject.StartState ()
                })
            .toThrow ();
    });

    test ( "instance.update() returns instance of StartState", () =>
    {
        let mock_scene = new MockScene ();
        let mock_babylon = new MockBabylon ();

        let startState = 
            new window.babylonProject.StartState (mock_babylon, mock_scene );

        expect ( startState.update () )
            .toBeInstanceOf (
                 window.babylonProject.StartState  );

    });

});
