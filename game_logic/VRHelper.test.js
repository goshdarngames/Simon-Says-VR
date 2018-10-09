const init = require ('./VRHelper');

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

function get_mock_scene ()
{
    let Scene = jest.fn (
            function ()
            {
                this.createDefaultVRExperience = jest.fn (
                function ()
                {
                    return { enableTeleportation : jest.fn() };
                });
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

        expect ( scene.createDefaultVRExperience )
            .toHaveBeenCalledWith ( 
                    {
                        createDeviceOrientationCamera : false
                    });    
    });

    test ( "sets window.babylonProject.VRHelper to the return value of "+
           "scene.createDefaultVRExperience" , () =>
    {
        let scene = get_mock_scene ();

        scene.createDefaultVRExperience.mockReturnValue ( 10 );

        window.babylonProject.startVR ( scene );

        expect ( window.babylonProject.VRHelper ).toBe( 10 );
    });

    test ( "calls enableTeleportation on window.babylonProject.VRHelper",
            () =>
    {
        let scene = get_mock_scene();

        window.babylonProject.startVR ( scene );

        expect ( window.babylonProject.VRHelper.enableTeleportation )
            .toHaveBeenCalledTimes ( 1 );
    });

});
