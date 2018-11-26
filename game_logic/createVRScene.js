/****************************************************************************
 * createVRScene.js
 ***************************************************************************/

( function ( babylonProject, undefined )
{
    babylonProject.createVRScene = function ( babylon, engine )
    {
        let scene = new babylon.Scene ( engine );

        scene.createDefaultEnvironment ();
        
        scene.createDefaultVRExperience ();

        return scene;
    };
} ( window.babylonProject = window.babylonProject || {} ));
