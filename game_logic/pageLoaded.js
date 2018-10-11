( function ( babylonProject, undefined )
{
    babylonProject.pageLoaded = function ( documentRef )
    {
        babylonProject.canvas = 
            documentRef.querySelector( "#renderCanvas" );
    };
} ( window.babylonProject = window.babylonProject || {} ));
