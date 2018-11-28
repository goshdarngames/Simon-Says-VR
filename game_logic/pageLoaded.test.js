const pageLoaded = require ( "./pageLoaded" );

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

MockDoc = jest.fn ( 
    function ()
    {
        this.querySelector = jest.fn();
    });
    
MockBabylon = jest.fn (
   function ()
   {
       this.Engine = jest.fn (
               function ()
               {
                   this.runRenderLoop = jest.fn()
               });
   });


beforeEach ( ()=>
{
    window.babylonProject.gameState = jest.fn ();

    window.babylonProject.gameState.StartState = jest.fn ();

    window.babylonProject.createVRScene = jest.fn ();

    window.babylonProject.gameLoop = jest.fn ();
});
 
/****************************************************************************
 * TESTS
 ***************************************************************************/

describe ( "window.babylonProject.pageLoaded" , () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.pageLoaded ).toBeDefined ();
    });

    test ( "calls query selector on document ref parameter", () =>
    {
        let mock_doc = new MockDoc ();

        let mock_babylon = new MockBabylon ();

        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( mock_doc.querySelector ).toHaveBeenCalledTimes ( 1 );

        expect ( mock_doc.querySelector )
            .toHaveBeenCalledWith ( "#renderCanvas" );
        
    });

    test ( "calls window.babylonProject.createBabylonEngine",
            () =>
    {
        let mock_doc = new MockDoc ();

        let mock_babylon = new MockBabylon ();
        
        //A reference to the existing function is stored so that it can
        //be mocked without changing its functionaliy
        // - This allows jest to count how many times it has been called
        let createBabylonEngineFunc = 
            window.babylonProject.createBabylonEngine;
      
        //create mocked function using existing functionality 
        window.babylonProject.createBabylonEngine = 
            jest.fn ( createBabylonEngineFunc );

        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.createBabylonEngine )
            .toHaveBeenCalledTimes ( 1 );
        
        //restore old function
        window.babylonProject.createBabylonEngine = createBabylonEngineFunc; 
    });

    test ( "creates an instance of StartScene", () =>
    {
        let mock_doc = new MockDoc ();

        let mock_babylon = new MockBabylon ();

        //The start state should have this scene as its parameter
        window.babylonProject.createVRScene
            .mockReturnValue ( 10 );

        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.gameState.StartState )
            .toHaveBeenCalledTimes ( 1 );


        expect ( window.babylonProject.gameState.StartState )
            .toHaveBeenCalledWith ( 10 );
    });

    test ( "assigns window.babylonProject.gameState", () =>
    {
        let mock_doc = new MockDoc ();

        let mock_babylon = new MockBabylon ();


        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.currentGameState )
            .toBeInstanceOf ( window.babylonProject.gameState.StartState );
    });

    

    test ( "calls createVRScene",  () =>
    {
        let mock_doc = new MockDoc ();

        let mock_babylon = new MockBabylon ();


        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.createVRScene )
            .toHaveBeenCalledTimes ( 1 );
    });

    test ( "passes dependencies to createVRScene",  () =>
    {
        let mock_doc = new MockDoc ();

        let mock_babylon = new MockBabylon ();
  
        //store an engine instance returned by the factory function
        engineInstance = 
            window.babylonProject.createBabylonEngine (
                    mock_babylon, jest.fn() );
      
        //store old engine creation method
        let createBabylonEngineFunc = 
            window.babylonProject.createBabylonEngine;

        //override the engine creation function 
        window.babylonProject.createBabylonEngine = 
            jest.fn ( createBabylonEngineFunc  );
 

        //mock return value to return the stored instance
        window.babylonProject.createBabylonEngine.
            mockReturnValueOnce ( engineInstance );

        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.createVRScene )
            .toHaveBeenCalledTimes ( 1 );

        //check that the engine instance was passed to create VR Scene
        expect ( window.babylonProject.createVRScene )
            .toBeCalledWith ( mock_babylon, engineInstance ); 

        //restore the old version of the engine creation function
        window.babylonProject.createBabylonEngine = createBabylonEngineFunc;
    });


    test ( "calls runRenderLoop on the engine instance created.",
            () =>
    {
        let mock_doc = new MockDoc ();

        let mock_babylon = new MockBabylon ();

        //store an engine instance returned by the factory function
        engineInstance = 
            window.babylonProject.createBabylonEngine (
                    mock_babylon, jest.fn() );
      
        //store old engine creation method
        let createBabylonEngineFunc = 
            window.babylonProject.createBabylonEngine;

        //override the engine creation function 
        window.babylonProject.createBabylonEngine = 
            jest.fn ( createBabylonEngineFunc  );
 

        //mock return value to return the stored instance
        window.babylonProject.createBabylonEngine.
            mockReturnValueOnce ( engineInstance );



        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( engineInstance.runRenderLoop )
            .toHaveBeenCalledTimes ( 1 );

        expect ( engineInstance.runRenderLoop )
            .toHaveBeenCalledWith ( window.babylonProject.gameLoop );

        //restore the old version of the engine creation function
        window.babylonProject.createBabylonEngine = createBabylonEngineFunc;
 
    });

});

describe ( "window.babylonProject.createBabylonEngineInstance", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.createBabylonEngine )
            .toBeDefined ();
    });

    test ( "returns instance of babylon.Engine", () =>
    {
        let mock_babylon = new MockBabylon ();
        
        let mock_canvas = jest.fn ();

        expect ( window.babylonProject.createBabylonEngine ( 
                    mock_babylon,
                    mock_canvas   ) )
            .toBeInstanceOf ( mock_babylon.Engine );
    });

    test ( "calls Engine constructor with (canvas, true) params", () =>
    {
        let mock_babylon = new MockBabylon ();
        
        let mock_canvas = 1234;

        window.babylonProject.createBabylonEngine ( 
                    mock_babylon,
                    mock_canvas   );

        expect ( mock_babylon.Engine )
            .toHaveBeenCalledWith ( mock_canvas, true );
    });

});
