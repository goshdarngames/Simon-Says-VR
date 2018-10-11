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
                this.Engine = jest.fn ();
            });

    return new MockBabylon ();
}

beforeEach ( ()=>
{
    window.babylonProject.changeScene = jest.fn();
    window.babylonProject.startScene = jest.fn();
    window.babylonProject.startVR =  jest.fn();
    window.babylonProject.activeScene =  jest.fn();
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
           "babylonProject.Engine",
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

    test ( "calls window.babylonProject.changeScene",
            () =>
    {
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();


        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.changeScene )
            .toHaveBeenCalledTimes ( 1 );

        expect ( window.babylonProject.changeScene )
            .toHaveBeenCalledWith ( window.babylonProject.startScene );
    });

    test ( "calls window.babylonProject.startVR",
            () =>
    {
        let mock_doc = get_mock_document ();

        let mock_babylon = get_mock_babylon ();


        window.babylonProject.pageLoaded ( mock_doc, mock_babylon );

        expect ( window.babylonProject.startVR )
            .toHaveBeenCalledTimes ( 1 );

        expect ( window.babylonProject.startVR )
            .toHaveBeenCalledWith ( window.babylonProject.activeScene );
    });

});
