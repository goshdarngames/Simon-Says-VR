/****************************************************************************
 * jQueryDomFunctions.js
 * 
 * Functions where the game interacts with the DOM are defined here.
 ***************************************************************************/

(function( babylonProject, startScene, $,  undefined )
{
    //Called when all HTML/DOM objects have been loaded.
    $(document).ready(function() 
    {
        babylonProject.canvas = document.querySelector("#renderCanvas");
        
        babylonProject.BABYLON = BABYLON;

        babylonProject.engine =
            new BABYLON.Engine(babylonProject.canvas, true);

        babylonProject.changeScene ( babylonProject.startScene );

        // Register a render loop to repeatedly render the scene
        babylonProject.engine.runRenderLoop(function ()
        {
            babylonProject.activeScene.render();
        });
    });

    //Dynamically resizes the canvas as the browser window changes.
    $(window).on("resize load", function()
    {
        if ( babylonProject.engine )
        {
            babylonProject.engine.resize();
        }
    });

} ( window.babylonProject = window.babylonProject || {},
    window.startScene = window.startScene || {},
    jQuery));
