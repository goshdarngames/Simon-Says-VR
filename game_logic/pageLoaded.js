( function ( babylonProject, undefined )
{
    babylonProject.pageLoaded = function ( documentRef, babylonRef )
    {
        babylonProject.canvas = 
            documentRef.querySelector( "#renderCanvas" );

        babylonProject.BABYLON = babylonRef;
    };
} ( window.babylonProject = window.babylonProject || {} ));
