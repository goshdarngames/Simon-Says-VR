const createVRScene = require ("./createVRScene");

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

beforeEach ( () =>
{
    let MockBabylon = jest.fn (
            function ()
            {
                this.Scene = jest.fn ();
            });

    window.babylonProject.BABYLON = new MockBabylon ();

    window.babylonProject.engine = jest.fn ();

});

/****************************************************************************
 * TESTS
 ***************************************************************************/

describe ( "window.babylonProject.createVRScene", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.createVRScene ).toBeDefined ();
    });

    test ( "returns instance of BABYLON.Scene", () =>
    {
        expect ( window.babylonProject.createVRScene () )
            .toBeInstanceOf ( window.babylonProject.BABYLON.Scene );
    });

    test ( "passed window.babylonProject.engine to Scene constructor", () =>
    {
        window.babylonProject.createVRScene ();

        expect ( window.babylonProject.BABYLON.Scene )
            .toBeCalledWith ( window.babylonProject.engine );
    });

       
});
