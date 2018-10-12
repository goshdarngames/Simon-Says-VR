/****************************************************************************
 * jQueryDomFunctions.js
 * 
 * Functions where the game interacts with the DOM are defined here.
 *
 * This function is outside the coverage of unit testing as it was 
 * awkward to mock jQuery and the DOM.
 *
 * Where possible it simply  passes DOM objects to a function within the
 * scope of tests.
 ***************************************************************************/

(function( babylonProject, startScene, $,  undefined )
{
    //Called when all HTML/DOM objects have been loaded.
    $(document).ready(function() 
    {
        babylonProject.pageLoaded ( document, BABYLON );
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
