(function( babylonProject ,  undefined )
{
    babylonProject.startScene = function(  ) 
    {
        var BABYLON = babylonProject.BABYLON;

        // Now create a basic Babylon Scene object
        var scene = new BABYLON.Scene(babylonProject.engine);

        // Change the scene background color to dark green.
        scene.clearColor = new BABYLON.Color3(0, 0.3, 0);

        // This creates and positions a free camera
        var camera = new BABYLON.FreeCamera(
                "camera1",
                new BABYLON.Vector3(0, 5, -10),
                scene);

        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
        
        // This attaches the camera to the canvas
        camera.attachControl(babylonProject.canvas, false);
       
        // This creates a light, aiming 0,1,0 - to the sky.
        var light = new BABYLON.HemisphericLight(
                "light1",
                new BABYLON.Vector3(0, 1, 0),
                scene);

        // Dim the light a small amount
        light.intensity = .5;

        // Let's try our built-in 'sphere' shape.
        var sphere = BABYLON.MeshBuilder.
            CreateSphere("sphere1",
                         { segments : 16, diameter: 2},
                         scene);
      
        // Move the sphere upward 1/2 its height
        sphere.position.y = 1;
     
        // Let's try our built-in 'ground' shape.
        var ground = BABYLON.MeshBuilder.
            CreateGround("ground1",
                        { width : 6, height : 6, subdivisions : 2},
                        scene);

        return scene;
    };

} ( window.babylonProject = window.babylonProject || {} ));
