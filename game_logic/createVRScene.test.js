const createVRScene = require ("./createVRScene");

/****************************************************************************
 * MOCK DATA
 ***************************************************************************/

/****************************************************************************
 * TESTS
 ***************************************************************************/

describe ( "window.babylonProject.createVRScene", () =>
{
    test ( "is defined", () =>
    {
        expect ( window.babylonProject.createVRScene ).toBeDefined ();
    });
});
