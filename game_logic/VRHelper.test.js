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
                    let VRHelper = {};
                    
                    VRHelper.enableTeleportation = jest.fn();
                    
                    VRHelper.enableInteractions = jest.fn();

                    return VRHelper; 
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
    
    test ( "calls enableInteractions on window.babylonProject.VRHelper",
            () =>
    {
        let scene = get_mock_scene();

        window.babylonProject.startVR ( scene );

        expect ( window.babylonProject.VRHelper.enableInteractions )
            .toHaveBeenCalledTimes ( 1 );

    });


    test ( "calls enableTeleportation on window.babylonProject.VRHelper",
            () =>
    {
        let scene = get_mock_scene();

        window.babylonProject.startVR ( scene );

        expect ( window.babylonProject.VRHelper.enableTeleportation )
            .toHaveBeenCalledTimes ( 1 );

        expect ( window.babylonProject.VRHelper.enableTeleportation )
            .toHaveBeenCalledWith (
                    {
                        floorMeshName : "ground"
                    });

    });

});
