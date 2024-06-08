function myOuterFunction(callback) {
    callback();
}

function myCallbackFunction() {
    console.log(134 + 66)
}

myOuterFunction(myCallbackFunction)

