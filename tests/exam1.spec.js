const exam1 = require("../app/service/exam1")

describe('Exam1', () => {
    test('test exam1', () => {
        const data = ['one']
        expect(data).toEqual(['one']) 
    })

    test('Should be 1 + 1.235 = 2.235', () => {
        const data = exam1.add(1, 1.235)
        expect(data).toEqual(2.235)
    })
})