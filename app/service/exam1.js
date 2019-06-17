const asyncModule = require('async')
class Exam1 {
    constructor(var1) {
        this.var1 = var1
    }

    add(a, b) {
        return (a * 1000 + b * 1000)/1000
    }

    helloWorldCallback(greeting) {
        greeting('Hello', this.var1 + 'World')
    }

    prom(value) {
        return new Promise((resolve, reject) => {
            if (value <= 10) 
                reject('lower than then')
            else
                resolve('Hello')
        })
    }

    waterFallCallback(value, cd) {
        asyncModule.waterfall([
            (callback) => {
                if (value > 10) {
                    callback('more than ten')
                } else {
                    callback(null, "one", "two")
                }
            }, 
            (var1, var2, callback) => {
                callback(null, 'success')
            }
        ], (err, result) => {
            cd(err, result)
        })
    }

    seriesCallback(value, cd) {
        asyncModule.series([
            (callback) => {
                if (value > 10) callback('error more than 10')
                else callback(null, 'one')
            },
            (callback) => {
                callback(null, 'two')
            },
            (callback) => {
                callback(null, 'three')
            }
        ], cd)
    }
}

module.exports = new Exam1('This')
