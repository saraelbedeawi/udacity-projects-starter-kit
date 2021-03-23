const functions = require('../js/ValidURL');

describe('URL TESTING', () => {
    test('not defined or defined', () => {
        expect(functions.ValidURL("https://gist.github.com/franciskim/41a959f8e3989254ef5d")).toBeDefined();
    })
    test('URL False test case', () => {
        expect(functions.ValidURL("not defined url")).toBeFalsy();

    })
    test('URL True test case', () => {
        expect(functions.ValidURL("https://gist.github.com/franciskim/41a959f8e3989254ef5d")).toBeTruthy();
    })
})
