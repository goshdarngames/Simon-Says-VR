( function ( babylonProject, undefined )
{
    babylonProject.pageLoaded = function ( documentRef, babylonRef )
    {
        babylonProject.canvas = 
            documentRef.querySelector( "#renderCanvas" );

        babylonProject.BABYLON = babylonRef;

        babylonProject.engine = 
            new babylonProject.BABYLON.Engine (
                    babylonProject.canvas, true );

        let scene =  babylonProject.createVRScene ();

        babylonProject.engine.runRenderLoop ( babylonProject.gameLoop );
    };
} ( window.babylonProject = window.babylonProject || {} ));
