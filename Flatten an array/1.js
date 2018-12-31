// Own way to flatten an array.
// Fail with unknown reason
// The result print out is the same as the argument array
function flattenArray(array) {
    return array.map(ele => {
        if (Array.isArray(ele)) {
            return flattenArray(ele);
        } else {
            return flattenOneElement(ele);
        }
    });
}

function flattenOneElement(element) {
    if (Array.isArray(element[0])) {
        return flattenOneElement(element[0]);
    } else {
        return element[0] || element;
    }
}

console.log(flattenArray([1, [2], [3, [[4]]]]));
