export const throttle1 = (func: () => void, timer: number) => {
    console.log('in throtte');
    // let isThrottled: boolean;
    return function () {
        // if ( !isThrottled ) {
        //     isThrottled = true;
            setTimeout(func, timer);
        // }
    }

}
