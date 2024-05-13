function add(a, b){
    return a+b
}

function subtract(a,b){
    return a-b
}

// module.exports = add;
// module.exports = subtract;
// subtract will override add

// second method
exports.mulFn = (a,b) => a*b;
exports.subFn1 = (a,b) => a-b;


module.exports = {
    addFn: add, 
    subFn: subtract
}