/***

    Elements.js
    ChickCoder
    
    DO NOT COPY THIS IN ANY WAY. Use with credit.
    
    Docs: [insert link here]

***/
function underEst (str) {
    if (typeof str === 'string') {
        if (str.length > 1) {
            // xxx - ski
            // no need to attach to the function's scope. a variable works just fine.
            let all = ''
            for (var i = 0; i < str.length; i++) {
                if (Math.random() <= 0.5) {
                    all += str[i]
                }
            }
            return all
        }
        // xxx - ski
        // returns an actual Error instead of a String
        // fixed error message to be more accurate
        return new Error("`str` needs to be longer than 1 character")
    }
    // xxx - ski
    // returns an actual Error instead of a String
    return new TypeError("Not a string")
}
function overEst (str) {
    if (typeof str === 'string') {
        if (str.length > 1) {
            // xxx - ski
            // no need to attach to the function's scope. a variable works just fine.
            let all = ''
            for (var i = 0; i < str.length; i++) {
                all += str[i]
                if (Math.random() <= 0.5) {
                    all += str[i]
                }
            }
            return all
        }
        // xxx - ski
        // returns an actual Error instead of a String
        return new Error("`str` needs to be longer than 1 character")
    }
    // xxx - ski
    // returns an actual Error instead of a String
    return new TypeError("Not a string")
}
function randomInt (least, most) {
    // xxx - ski
    // removed as it conflicted with the modification of the `else` statement.
    /*
    if (typeof least !== 'number' && typeof most !== 'number') {
        return new TypeError("One of the arguments are not numbers")
    }
    */
    if (arguments.length === 1) {
        // xxx - ski
        // added type-checking
        if(typeof least !== "number"){
            return new TypeError("`least` needs to be a number.")
        }
        return Math.round(Math.random() * least)
    } else if (arguments.length === 2) {
        // xxx - ski
        // added type-checking
        if(typeof least !== "number" || typeof most !== "number"){
            return new TypeError("`least` and `most` need to be a number.")
        }
        // xxx - ski
        // should be `least`. 
        // see: https://github.com/thelegendski/ski.js/blob/297230a8d724c8f9777eddd4124739de9feccb8a/main.js#L1077
        return Math.round(Math.random() * (most - least) + least)
    } else {
        // xxx - ski
        // to properly follow `random`, no arguments usually means between 0 and 1; the function will still return a value either 0 or 1
        // see: https://github.com/thelegendski/ski.js/blob/297230a8d724c8f9777eddd4124739de9feccb8a/main.js#L1079
        /* return new Error("Cannot get random from arguments") */
        return Math.round(Math.random())
    }
}
function randomFromArray (arr) {
    // xxx - ski
    // properly checked for `arr` to be an array
    if (Array.isArray(arr)) {
        return arr[randomInt(arr.length - 1)]
    } else {
        // xxx - ski
        // returns an actual Error instead of a String
        return new TypeError("Argument is supposed to be array")
    }
}
function randomFromObj (obj) {
    if (typeof obj === 'object') {
        try {
            // xxx - ski
            // a variable works better than referencing the function's scope here
            let keys = Object.keys(obj)
            if (keys.length === 0) {
                // xxx - ski
                // returns an actual Error instead of a String
                return new Error("Object has too less items in it")
            }
            return obj[randomFromArray(this.keys)]
        } catch (e) {
            // xxx - ski
            // returns an actual Error instead of a String
            return new Error(e)
        }
    }
    // xxx - ski
    // returns an actual Error instead of a String
    return new TypeError("Argument is supposed to be object")
}
function delArr (arr) {
    // xxx - ski
    // properly checked for `arr` to be an array
    if (Array.isArray(arr)) {
        arr.length = 0
        return arr
    }
    // xxx - ski
    // returns an actual Error instead of a String
    return new TypeError("Argument needs to be array")
}
function removeItemFromArr (arr, id) {
    // xxx - ski
    // properly checked for `arr` to be an array
    if (Array.isArray(arr) && typeof id === 'number') {
        if (arr.length <= 3) {
            return new Error("Array's length needs to be at least three")
        }
        if (id > 0 && id < arr.length) {
            // xxx - ski
            // no need to attach variable to function's scope. a variable works perfectly.
            let temp = []
            for (var i = 0; i < id; i++) {
                temp.push(arr[i])
            }
            for (var i = id + 1; i < arr.length; i++) {
                temp.push(arr[i])
            }
            return temp
        }
        // xxx - ski
        // returns an actual Error instead of a String
        return new Error("`id` is not in scope of array")
    }
    // xxx - ski
    // returns an actual Error instead of a String
    return new TypeError("`arr` is supposed to be array or `id` needs to be number")
}
