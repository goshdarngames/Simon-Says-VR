const init = require ( "./activeScene" );

test ( 'window.babylonProject.activeScene is defined', () => 
        {
            expect ( window.babylonProject.activeScene ).toBeDefined ();
        });

test ( "changeScene calls parameter as a function" , () =>
    {
        const testSceneFunction = jest.fn (); 

        window.babylonProject.changeScene(testSceneFunction);
        
        expect ( testSceneFunction.mock.calls.length ).toBe ( 1 );
    });
