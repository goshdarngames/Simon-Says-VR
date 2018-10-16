( function ( babylonProject, gameState, undefined )
{

    gameState.StartState = function ()
    {
        this.update = function ()
        {
            return this;
        };
    }; 

} ( window.babylonProject = window.babylonProject || {},

    window.babylonProject.gameState =  
        window.babylonProject.gameState || {} ));
