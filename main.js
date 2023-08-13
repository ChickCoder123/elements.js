/***

    Elements.js
    ChickCoder
    
    DO NOT COPY THIS IN ANY WAY. Use with credit.
    
    Docs: [insert link here]

***/
function underEst (str) {
    if (typeof str === 'string') {
        if (str.length > 1) {
            this.all = ''
            for (var i = 0; i < str.length; i++) {
                if (Math.random() <= 0.5) {
                    this.all += str[i]
                }
            }
            return this.all
        }
        return 'LenError: String\'s length is too low'
    }
    return 'TypeError: Not a string'
}
function overEst (str) {
    if (typeof str === 'string') {
        if (str.length > 1) {
            this.all = ''
            for (var i = 0; i < str.length; i++) {
                this.all += str[i]
                if (Math.random() <= 0.5) {
                    this.all += str[i]
                }
            }
            return this.all
        }
        return 'LenError: String\'s length is too low'
    }
    return 'TypeError: Not a string'
}
function randomInt (least, most) {
    if (typeof least !== 'number' && typeof most !== 'number') {
        return 'TypeError: One of arguments are not numbers'
    }
    if (arguments.length === 1) {
        return Math.round(Math.random() * least)
    } else if (arguments.length === 2) {
        return Math.round(Math.random() * (most - least) + most)
    } else {
        return 'ArgError: Cannot get random from arguments'
    }
}
function randomFromArray (arr) {
    if (typeof arr === 'object') {
        return arr[randomInt(arr.length - 1)]
    } else {
        return 'TypeError: Argument is supposed to be array'
    }
}
function randomFromObj (obj) {
    if (typeof obj === 'object') {
        try {
            this.keys = Object.keys(obj)
            if (this.keys.length === 0) {
                return 'LenError: Object has too less items in it'
            }
            return obj[randomFromArray(this.keys)]
        } catch (e) {
            return 'SysError: ' + e
        }
    }
    return 'TypeError: Argument is supposed to be object'
}
function delArr (arr) {
    if (typeof arr === 'object') {
        arr.length = 0
        return arr
    }
    return 'TypeError: Argument needs to be array'
}
function removeItemFromArr (arr, id) {
    if (typeof arr === 'object' && typeof id === 'number') {
        if (arr.length <= 3) {
            return 'LenError: Array\'s length needs to be at least three'
        }
        if (id > 0 && id < arr.length) {
            this.temp = []
            for (var i = 0; i < id; i++) {
                this.temp.push(arr[i])
            }
            for (var i = id + 1; i < arr.length; i++) {
                this.temp.push(arr[i])
            }
            return this.temp
        }
        return 'ArgError: Id is not in scope of array'
    }
    return 'TypeError: Arr is supposed to be array or id needs to be number'
}
