/****************************************************************************
 * VRHelper.js 
 *
 * Provides access to the VR functionality of BabylonJS.
 ***************************************************************************/


( function ( babylonProject, undefined )
{
    //Referenc to the VRExperienceHelper
    babylonProject.VRHelper = null;

    babylonProject.startVR = function ( scene )
    {
        babylonProject.VRHelper = scene.createDefaultVRExperience ();        
    };

} ( window.babylonProject = window.babylonProject || {} ));

