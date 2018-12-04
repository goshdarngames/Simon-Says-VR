/****************************************************************************
 * startState.js
 *
 * When the page is loaded the initial state that the game loop will
 * enter into will be babylonProject.StartState
 *
 * The StartState object should have an update function that returns the
 * next state.  
 ***************************************************************************/
( function ( babylonProject,  undefined )
{
    /**
     * This object will be passed to the game loop as the first state
     * when the page is loaded.
     */
    babylonProject.StartState = function ( babylon, babylonScene )
    {
        if ( babylonScene == undefined )
        {
            throw new Error ( "Scene argument is undefined" );
        }

        this.babylonScene = babylonScene;

        this.update = function ()
        {
            this.babylonScene.render ();

            return this;
        };
    }; 

} ( window.babylonProject = window.babylonProject || {}  ));
