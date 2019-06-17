/*
EXPORT AN ANONYMOUS FUNCTION
*/

const bar = require("../../app/service/bar")

describe('Bar Service', () => {
    it('should return bar!', () => {
        expect(bar()).toEqual('bar!')
    })
})