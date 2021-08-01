/**
 * Validate function arg quantity and types, using a validator object.
 * Strings that can be parsed to numbers are valid.
 * @param {Object} validatorObj an object whose keys are the arg names and whose values are the valid types, as strings.
 * @param {Array} args arguments to be validated
 */
function validateArgs(validatorObj, args) {
    //First, validate our validator and destructure the returned vars
    const {validatorLength, validatorKeyValuePairs} = metaValidator(validatorObj)

    //are the args an array?
    if (!Array.isArray(args)) {
        throw new Error("Expected argument 'args' to be an Array.");
    }

    //Check if number of args is correct
    if (validatorLength !== args.length) {
        switch (validatorLength) {
            case 0:
                throw new Error(`Expected parameters: None!`)
            case 1:
                throw new Error(`Expected parameters: ${validatorKeyValuePairs[0][0]}.`)
            default:
                let errorArgsString = '';

                //loop and get comma separated string of all but the last args
                for (let i = 0; i < validatorLength-1; i++) {
                    errorArgsString += `${validatorKeyValuePairs[i][0]}, `
                }

                throw new Error(`Expected parameters: ${errorArgsString}and ${validatorKeyValuePairs[validatorLength-1][0]}.`)
        }
    }

    //validate types, and parse to number when appropriate
    for (let i = 0; i < validatorLength; i++) {
        const currentKey = validatorKeyValuePairs[i][0]
        const currentType = validatorKeyValuePairs[i][1];
        const currentArg = args[i];

        const handleDefault = () => {
            if (typeof currentArg !== currentType) {
                throw new Error(`Expected argument '${currentKey}' to be a ${currentType}.`);
            }
        }

        switch (currentType) {
            case 'number':
                if (typeof currentArg === 'string') {
                    const parsed = parseFloat(currentArg, 10)

                    if (parsed === NaN) {
                        throw new Error(`Expected argument '${currentKey}' to be a number or a string that can be parsed to a number.`)
                    }

                    //We didn't throw an error on NaN, so replace the string value with our parsed number
                    args[i] = parsed
                } else {
                    if (typeof currentArg !== currentType) {
                        throw new Error(`Expected argument '${currentKey}' to be a number or a string that can be parsed to a number.`);
                    }
                }
                break;
            default:
                handleDefault()
                break;
        }

    }

    //All checks passed without throwing an error. Return our (possibly cleaned) args.
    return args;
}

/**
 * Validate the validator object to be used within validateArgs.
 * Returns an object containing the validatorLength and the validatorKeyValuePairs.
 * @param {Object} validatorObj an object whose keys are the arg names and whose values are the valid types, as strings.
 */
function metaValidator(validatorObj) {
    const typesList = ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null', 'object']
    let validatorLength, validatorKeyValuePairs;

    if (typeof validatorObj !== 'object') {
        throw new Error("Expected argument 'validatorObj' to be type object.");
    } else {
        //validatorObj is an object, so we can store its length and get its key:value pairs.
        validatorLength = Object.keys(validatorObj).length
        validatorKeyValuePairs = Object.entries(validatorObj)
    }

    //ensure all values in our validator object are actually primative types, or an object.
    validatorKeyValuePairs.map((keyValuePair) => {
        const key = keyValuePair[0];
        const value = keyValuePair[1];
        
        if (!typesList.includes(value)) {
            throw new Error(`'${key}'s value, '${value}', is not a primative type or an object.`)
        }
    })
    
    return {validatorLength, validatorKeyValuePairs}
}

module.exports = { validateArgs }