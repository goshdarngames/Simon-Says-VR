/****************************************************************************
 * externalDependencies.js
 *
 * Pointers to external objects such as DOM objects and library objects
 * are managed within this file.
 *
 * Mocking the values from this file allows the dependencies to be mocked
 * during testing.
 ***************************************************************************/


( function ( babylonProject, undefined )
{
    //HTML Canvas DOM object that is used for rendering.
    babylonProject.canvas = null;

    //pointer to the BABYLON library object.
    babylonProject.BABYLON = null;

    //reference to the Babylon 3D engine
    babylonProject.engine = null;

} ( window.babylonProject = window.babylonProject || {} ));

