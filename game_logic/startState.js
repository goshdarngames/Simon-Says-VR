/****************************************************************************
 * startState.js
 *
 * When the page is loaded the initial state that the game loop will
 * enter into will be babylonProject.StartState
 *
 * The StartState object should have an update function that returns the
 * next state.  
 ***************************************************************************/
( function ( babylonProject, simon_says,  undefined )
{
    /**
     * StartState ( babylon, scene )
     *
     * Constructor function for the first state the game will enter into
     * when the page is loaded.
     *
     * The update function should return the next state - it should return
     * 'this' if the state is not changing.
     */
    babylonProject.StartState = function ( babylon, scene )
    {
        if ( scene == undefined )
        {
            throw new Error ( "Scene argument is undefined" );
        }

        let box = babylon.MeshBuilder.CreateBox ( "box", {}, scene );

        box.position.z = 1;
        box.position.y = 3;

        this.update = function ()
        {
            scene.render ();

            return this;
        };
    }; 

} ( window.babylonProject = window.babylonProject || {},
    window.simonSays = window.simonSays || {}  ));
