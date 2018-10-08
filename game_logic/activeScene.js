/****************************************************************************
 * activeScene.js
 ***************************************************************************/

(function( babylonProject,  undefined )
{
    babylonProject.activeScene = null;

    babylonProject.changeScene = function( sceneCreationFunction ) 
    {
        babylonProject.activeScene = sceneCreationFunction();
    };

} ( window.babylonProject = window.babylonProject || {} ));
