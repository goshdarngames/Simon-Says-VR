/****************************************************************************
 * renderLoop.js
 *
 * This is the main game loop that is used to update objects and render
 * the active scene.
 ***************************************************************************/

( function ( babylonProject, undefined )
{

    babylonProject.renderLoop = function ()
    {
        babylonProject.activeScene.render();
    };

} ( window.babylonProject = window.babylonProject || {} ));
