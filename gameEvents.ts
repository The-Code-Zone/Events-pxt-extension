namespace game {
    /**
     * The attached code will run repeatedly on a random interval every x milliseconds.
     * Where x is a random number between 'lower' and 'upper'.
     * @param lower the lower bound of the random interval
     * @param upper the upper bound of the random interval
     * @param handler the code to run every random interval
     * @param startImmediately whether the attached code should run as soon as this function is called
    */
    //% blockNamespace="game"
    //% group="Gameplay"
    //% help=game/on-update-interval weight=98 afterOnStart=true
    //% blockId=onUpdateRandomInterval block="update randomly between %lower=timePicker ms and %upper=timePicker ms || start immediately $startImmediately"
    //% startImmediately.defl=true
    //% startImmediately.shadow="toggleOnOff"
    //% blockAllowMultiple=1
    export function onUpdateRandomInterval(lower: number, upper: number, handler: () => void, startImmediately: boolean = true) {
        function repeated(lower: number, upper: number, handler: () => void) {
            handler()
            setTimeout(() => {
                repeated(lower, upper, handler)
            }, randint(lower, upper))
        }
        if (startImmediately) {
            repeated(lower, upper, handler)
        }
        else {
            setTimeout(() => {
                repeated(lower, upper, handler)
            }, randint(lower, upper))
        }
    }
}