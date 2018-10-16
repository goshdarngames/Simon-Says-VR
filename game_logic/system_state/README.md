System State
============

The system uses a finite state machine to encode how it should behave
during the course of the game.

States have an update() method which should perform a logical step.

The update method should return the next state.
 - If the state is not changing it should return 'this'
 - If the state is changing it should construct that state and return it.

If the state decides that it needs to change state it should prepare the
babylon scene for that state, removing any objects that shouldn't be in the
scene.

This functionality is encoded in an 'exitState' function, however in some
cases states might share objects in the Babylon Scene.
    e.g. The environment and skybox could persist between states.

Important game data that states need should be passed as a parameter to the
constructor of that state.
