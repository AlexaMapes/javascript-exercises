const removeFromArray = function() {
    const args = Array.from(arguments);

    let userArray = args[0];
    let numOfArgs = args.length - 1;

    for (let i = 1; i <= numOfArgs; i++) {
        let element = args[i];
        let elementIndex = userArray.indexOf(element);
        
        if (elementIndex == -1) {
            continue;
        }

        userArray.splice(elementIndex, 1);
    }

    return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;
