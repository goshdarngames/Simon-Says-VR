/****************************************************************************
 * renderLoop.js
 *
 * This is the main game loop that is used to update objects and render
 * the active scene.
 ***************************************************************************/

( function ( babylonProject, undefined )
{

    babylonProject.gameLoop = function ()
    {
        babylonProject.activeScene.render();
    };

} ( window.babylonProject = window.babylonProject || {} ));
