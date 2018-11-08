/****************************************************************************
 * pageLoaded.js
 *
 * The page loaded function is called by the jQueryDomFunctions.js 
 * module when the HTML Document is ready.
 *
 * This is the entry point into the game logic.  The game should be 
 * initialized and the first state of the finite state machine defined
 * in game_state/ should be loaded for the game loop to execute.
 ***************************************************************************/

( function ( babylonProject, undefined )
{
    /**
     * pageLoaded ( documentRef, babylonRef )
     *
     * The first game logic function that is called when the
     * HTML page is ready.
     *
     * Parameters:
     *  - documentRef: The HTML DOM object 'document'
     *  - babylonRef : A reference to the Babylon object
     */
    babylonProject.pageLoaded = function ( documentRef, babylonRef )
    {
        babylonProject.canvas = 
            documentRef.querySelector( "#renderCanvas" );

        babylonProject.BABYLON = babylonRef;

        babylonProject.engine = 
            new babylonProject.BABYLON.Engine (
                    babylonProject.canvas, true );

        let scene =  babylonProject.createVRScene ();

        let startState = new window.babylonProject
            .gameState.StartState( scene );

        babylonProject.currentGameState = startState;

        babylonProject.engine.runRenderLoop ( babylonProject.gameLoop );
    };
} ( window.babylonProject = window.babylonProject || {} ));
