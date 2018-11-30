( function ( babylonProject,  undefined )
{

    babylonProject.StartState = function ( babylonScene )
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
