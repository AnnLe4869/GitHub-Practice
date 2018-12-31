// Shorter and more effective way to flatten an array
// Note the function of concat() in combination with spread operator
function flattenArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? flattenArray(flat) : flat;
}

console.log(flattenArray([1, [2], [3, [[4]]]]));
