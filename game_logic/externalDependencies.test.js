/**
 * @jest-environment jsdom
 */

const init = require ('./externalDependencies');

test ( 'window.babylonProject is defined', () => 
        {
            expect ( window.babylonProject ).toBeDefined ();
        });

test ( 'window.babylonProject.canvas is defined', () => 
        {
            expect ( window.babylonProject.canvas ).toBeDefined ();
        });

test ( 'window.babylonProject.engine is defined', () => 
        {
            expect ( window.babylonProject.engine ).toBeDefined ();
        });

test ( 'window.babylonProject.BABYLON is defined', () => 
        {
            expect ( window.babylonProject.BABYLON ).toBeDefined ();
        });


