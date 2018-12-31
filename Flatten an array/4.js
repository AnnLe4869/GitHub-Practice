// Convert an array to string
// Doing that will take the real content inside of array only and add them into a string
function flattenArray(array) {
    return array
        .toString()
        .replace(",,", ",")
        .split(",")
        .map(function(v) {
            if (v == "[object Object]") {
                // bring back empty objects
                return {};
            } else if (isNaN(v)) {
                // if not a number (string)
                return v;
            } else {
                return parseInt(v); // if a number in a string, convert it
            }
        });
}

console.log(flattenArray([1, [2], {}, [[[]]], [3, [[4]]]]));
