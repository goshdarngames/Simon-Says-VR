const init = require ('./VRHelper');

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

function get_mock_scene ()
{
    let Scene = jest.fn (
            function ()
            {
                this.createDefaultVRExperience = jest.fn ();
            });

    return new Scene;
}

/****************************************************************************
 * TESTS
 ***************************************************************************/

test ( "window.babylonProject.VRHelper is defined", () => 
{
    expect ( window.babylonProject.VRHelper ).toBeDefined ();
});

describe ( "window.babylonProject.startVR", () =>
{
    test ( "calls scene.createDefaultVRExperience" , () =>
    {
        let scene = get_mock_scene ();

        window.babylonProject.startVR ( scene );

        expect ( scene.createDefaultVRExperience )
            .toHaveBeenCalledTimes ( 1 );    
    });
});
