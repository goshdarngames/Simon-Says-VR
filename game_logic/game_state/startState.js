( function ( babylonProject, systemState, undefined )
{

    systemState.StartState = function ()
    {
        this.update = function ()
        {
            return this;
        };
    }; 

} ( window.babylonProject = window.babylonProject || {},

    window.babylonProject.systemState = 
        window.babylonProject.systemState || {} ));
