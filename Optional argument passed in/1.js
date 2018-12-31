function addTogether(...arg){
    if (!arg.every(ele => typeof ele === 'number')) {
        return undefined
    }
    if(arg.length === 2){
        return arg.reduce((accum, current) => accum + current)
    }
    return function (b) {
        if (typeof b !== 'number') {
            return undefined
        }
        else {
            return arg[0] + b
        }
    }
}
console.log(addTogether(2,'3'))
