namespace loops{

    /**
    * Repeatedly runs the code inside until the variable i has reached the end value
    * similar to loops or conditions.
    */
    //% block="for $i from $start to $end by $step"
    //% blockId=forFromToBy
    //% draggableParameters
    //% handlerStatement
    export function forFromToBy(start: number, end: number, step: number, handler: (i: number) => void): void {
        for (let i = start; i < end; i += step) {
            handler(i)
        }
    }

}