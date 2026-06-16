namespace game {
    /**
     * The attached code will run repeatedly on a random interval every x milliseconds.
     * Where x is a random number between 'lower' and 'upper'.
     * @param lower the lower bound of the random interval
     * @param upper the upper bound of the random interval
     * @param handler the code to run every random interval
     * @param startImmediately whether the attached code should run as soon as this function is called
    */
    
    //% block="run every $lower to $upper ms start immediately $startImmediately"
    //% lower.defl=500
    //% upper.defl=2000
    //% startImmediately.shadow="toggleOnOff"
    //% startImmediately.defl=1
    //% blockAllowMultiple=1
    //% inlineInputMode=inline
    //% group="Timers"
    //% weight=80
    export function onUpdateRandomInterval(lower: number, upper: number, startImmediately: boolean = true, handler: () => void) {
        function repeated(lower: number, upper: number, handler: () => void) {
            handler();
            setTimeout(() => {
                repeated(lower, upper, handler);
            }, randint(lower, upper));
        }
        if (startImmediately) {
            repeated(lower, upper, handler);
        }
        else {
            setTimeout(() => {
                repeated(lower, upper, handler);
            }, randint(lower, upper));
        }
    }

    /**
     * Runs an onupdate loop in a separate thread allowing for pausing
    */
    //% blockNamespace="game"
    //% group="Gameplay"
    //% blockId=separateOnUpdate 
    //% block="on separate game update"
    //% blockAllowMultiple=1
    export function separateOnUpdate(handler: () => void) {
        control.runInBackground( () => {
            game.onUpdate( () => {
                handler
            })
        })
    }
}