/****************************************************************************
 * createVRScene.js
 ***************************************************************************/

( function ( babylonProject, undefined )
{
    babylonProject.createVRScene = function ()
    {
        let scene = new babylonProject.BABYLON.Scene ( 
                babylonProject.engine );

        scene.createDefaultEnvironment ();
        
        scene.createDefaultVRExperience ();

        return scene;
    };
} ( window.babylonProject = window.babylonProject || {} ));
