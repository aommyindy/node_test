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

    test('Should call helloWorldCallback retrun = hello', () => {
        exam1.helloWorldCallback((h,w) => {
            expect(h).toEqual('Hello')
        })
    })

    test('Should call helloWorldCallback retrun = ThisWorld', () => {
        exam1.helloWorldCallback((h,w) => {
            expect(w).toEqual('ThisWorld')
        })
    })

    test('should prom retrun resolve = Hello', () => {
        exam1.prom(11).then(result => {
            expect(result).toEqual('Hello')
        })
    })

    test('should prom retrun reject = lower than then', () => {
        exam1.prom(9).catch(result => {
            expect(result).toEqual('lower than then')
        })
    })

    test('should await hello value', async () => {
        expect(await exam1.prom(11)).toEqual('Hello')
    })

    test('should catch exception lower than then value', async () => {
        try {
            const result = await exam1.prom(9)
        } catch (e) {
             expect(e).toEqual('lower than then')
        }
    })
})