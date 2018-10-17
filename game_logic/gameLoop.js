/****************************************************************************
 * gameLoop.js
 *
 * This is the main game loop that is used to update objects and render
 * the scene.
 *
 * A finite state machine is used to switch between logical scenarios
 * such as the main menu or gameplay.
 *
 * The states are defined as objects in ./game_state
 ***************************************************************************/

( function ( babylonProject, undefined )
{

    babylonProject.gameLoop = function ()
    {
        babylonProject.activeScene.render();
    };

} ( window.babylonProject = window.babylonProject || {} ));
