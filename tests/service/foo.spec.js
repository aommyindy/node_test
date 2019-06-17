require("../app/service/foo")

describe('Foo Service', () => {
    it('should return foo!', () => {
        expect(foo()).toEqual('foo!')
    })
})