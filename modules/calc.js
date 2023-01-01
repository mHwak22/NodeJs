exports.addition = (num1, num2) => {
    var num1 = parseFloat(num1);
    var num2 = parseFloat(num2);
    return (num1 + num2);
}
exports.substraction = (num1, num2) => {
    var num1 = parseFloat(num1);
    var num2 = parseFloat(num2);
    return (num2 - num1);
}
exports.multipliction = (num1, num2) => {
    var num1 = parseFloat(num1);
    var num2 = parseFloat(num2);
    return (num1 * num2);
}
exports.division = (num1, num2) => {
    var num1 = parseFloat(num1);
    var num2 = parseFloat(num2);
    if (num1 < num2) {
        return (num2 / num1);
    }
    else {
        return (num1 / num2);
    }
}
exports.square = (num3) => {
    var num3 = parseFloat(num3);
    return (num3 * num3);
}
exports.sum=(arr=[])=>{
    var arr =[];
    Array.isArray(arr)
    var sum =0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
