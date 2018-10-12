const createVRScene = require ("./createVRScene");

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

beforeEach ( () =>
{
    let MockBabylon = jest.fn (
            function ()
            {
                this.Scene = jest.fn (
                        function ()
                        {
                            this.createDefaultEnvironment = jest.fn ();
                            this.createDefaultVRExperience = jest.fn ();
                        });
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

    test ( "calls scene.createDefaultEnvironment", () =>
    {
        let scene = window.babylonProject.createVRScene ();

        expect ( scene.createDefaultEnvironment )
            .toBeCalledTimes ( 1 );
    });
  
    test ( "calls scene.createDefaultVRExperience", () =>
    {
        let scene = window.babylonProject.createVRScene ();

        expect ( scene.createDefaultVRExperience )
            .toBeCalledTimes ( 1 );
    });
  

})
