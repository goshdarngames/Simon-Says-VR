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
    let MockBabylon = jest.fn ();

    return new MockBabylon ();
}
 
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
});
