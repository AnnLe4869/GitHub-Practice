// Fast and effective way to flatten an array
function flattenArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? flattenArray(flat) : flat;
}

console.log(flattenArray([1, [2], [3, [[4]]]]));
