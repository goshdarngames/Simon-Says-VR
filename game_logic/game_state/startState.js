( function ( babylonProject, gameState, undefined )
{

    gameState.StartState = function ( scene )
    {
        if ( scene == undefined )
        {
            throw new Error ( "Scene argument is undefined" );
        }

        this.update = function ()
        {
            return this;
        };
    }; 

} ( window.babylonProject = window.babylonProject || {},

    window.babylonProject.gameState =  
        window.babylonProject.gameState || {} ));
