const pageLoaded = require ( "./pageLoaded" );

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

function get_mock_document ()
{
    let MockDoc = jest.fn ( 
            function ()
            {
                this.querySelector = jest.fn();
            });
    
    return new MockDoc(); 
}

function get_mock_babylon ()
{
    let MockBabylon = jest.fn (
            function ()
            {
                this.Engine = jest.fn (
                        function ()
                        {
                            this.runRenderLoop = jest.fn()
                        });
            });

    return new MockBabylon ();
}

beforeEach ( ()=>
{
    window.babylonProject.gameState = jest.fn ();

    window.babylonProject.gameState.StartState = jest.fn ();

    window.babylonProject.createVRScene =  jest.fn ();

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
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();

        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( mock_doc.querySelector ).toHaveBeenCalledTimes ( 1 );

        expect ( mock_doc.querySelector )
            .toHaveBeenCalledWith ( "#renderCanvas" );
        
    });

    test ( "stores return value of querySelector in babylonProject.canvas",
            () =>
    {
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();

        //set an arbitrary return value to test for
        mock_doc.querySelector.mockReturnValue ( 7 );

        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.canvas ).toBe ( 7 );
    });

    test ( "stores babylonRef parameter in window.babylonProject.BABYLON",
            () =>
    {
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();


        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.BABYLON == mock_babylon )
            .toBeTruthy ( );
    });

    test ( "constructs instance of BABYLON.Engine and stores it in "+
           "window.babylonProject.engine",
            () =>
    {
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();

        let canvas_test_value = 9;
        mock_doc.querySelector.mockReturnValue ( canvas_test_value );

        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.engine )
            .toBeInstanceOf ( mock_babylon.Engine );

        expect ( mock_babylon.Engine )
            .toHaveBeenCalledTimes ( 1 );

        expect ( mock_babylon.Engine )
            .toHaveBeenCalledWith ( canvas_test_value, true );
    });

    test ( "creates an instance of StartScene", () =>
    {
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();

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
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();


        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.currentGameState )
            .toBeInstanceOf ( window.babylonProject.gameState.StartState );
    });

    

    test ( "calls createVRScene",  () =>
    {
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();


        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.createVRScene )
            .toHaveBeenCalledTimes ( 1 );
    });



    test ( "calls window.babylonProject.engine.runRenderLoop with "+
           "window.babylonProject.gameLoop",
            () =>
    {
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();


        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.engine.runRenderLoop )
            .toHaveBeenCalledTimes ( 1 );

        expect ( window.babylonProject.engine.runRenderLoop )
            .toHaveBeenCalledWith ( window.babylonProject.gameLoop );
    });

});
