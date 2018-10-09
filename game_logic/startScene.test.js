const init = require ( "./startScene" );

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

/**
 * Creates a mock of the BABYLON object with the functions needed for the
 * tests.
 */
function get_mock_babylon ()
{
    babylon = jest.fn ();

    babylon.Scene = jest.fn (
            function ()
            {
                this.createDefaultEnvironment = jest.fn();
            });

    babylon.Color3 = jest.fn ();

    babylon.FreeCamera = jest.fn ( 
            function ()
            {
                this.setTarget = jest.fn();
                this.attachControl = jest.fn();
            });

    babylon.Vector3 = jest.fn ();
    babylon.Vector3.Zero = jest.fn ();

    babylon.HemisphericLight = jest.fn ();

    babylon.MeshBuilder = jest.fn();
    babylon.MeshBuilder.CreateSphere = jest.fn(
            function()
            {
                return { position : { x : 0, y : 0, z : 0} };
            });

    return babylon;
}

/****************************************************************************
 * TESTS
 ***************************************************************************/
describe ("window.babylonProject.startScene", () =>
{
    test ( "is defined", () =>    
    {
        expect ( window.babylonProject.startScene ).toBeDefined ();
    });

    test ( "calls 'createDefaultEnvironment' on returned scene.", () =>
    {
        window.babylonProject.BABYLON = get_mock_babylon ();

        let scene = window.babylonProject.startScene ();

        expect ( scene.createDefaultEnvironment )
            .toHaveBeenCalledTimes ( 1 );
    });
    
    test ( "is not null", () =>
    {
        window.babylonProject.BABYLON = get_mock_babylon();
    
        expect ( window.babylonProject.startScene() ).not.toBeNull ();
    });
    
    test ( "creates a free camera", () =>
    {
        window.babylonProject.BABYLON = get_mock_babylon();
    
        var scene = window.babylonProject.startScene();
        
        var babylon = window.babylonProject.BABYLON;

        expect ( babylon.FreeCamera ).toHaveBeenCalledTimes ( 1 );
    });

    test ( "creates a hemispheric light", () =>
    {
        window.babylonProject.BABYLON = get_mock_babylon();
    
        var scene = window.babylonProject.startScene();
        
        var babylon = window.babylonProject.BABYLON;

        expect ( babylon.HemisphericLight ).toHaveBeenCalledTimes ( 1 );
    });

    test ( "creates sphere", () =>
    {
        window.babylonProject.BABYLON = get_mock_babylon();
    
        var scene = window.babylonProject.startScene();
        
        var babylon = window.babylonProject.BABYLON;

        expect ( babylon.MeshBuilder.CreateSphere )
            .toHaveBeenCalledTimes ( 1 );
    });

});
