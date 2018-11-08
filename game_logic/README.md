Game Logic
==========

The modules that control the behaviour of the game can be found in this
directory.  

The single point of access from the HTML file that contains the canvas
can be found in:
    
     ./jQueryDomFunctions.js

It defines the document ready function which simply passes the external
dependencies of the project to the page loaded function found in:

    ./pageLoaded.js

The page loaded function performs some initialization and starts the game
loop.

Game Loop Finite State Machine
==============================

The project uses a finite state machine to encode the various states the
game could be in.  Some example states would be the Main Menu, Gameplay
and Game Over screen.

A Game State is an object with an update() function.  The update function
is called once per tick of the game loop and should be used to advance the
by a single time step and return the new game state.

In a normal update call of a game state the object would check for 
collisions, update the positions of all game objects and then return itself.

If the player were to die the state would construct the Game Over state and
return that.

The game states are defined in:
    
    ./game_state/

The game loop is found in:
    
    ./ gameLoop.js

Note:  
At present the game loop is controlled by babylon's runRenderLoop function
and simply calls update on the current state.  It is planned to use a 
more advanced main loop that will separate rendering from logic
