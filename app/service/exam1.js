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
}

module.exports = new Exam1('This')
