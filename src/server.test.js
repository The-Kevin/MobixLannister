const route = require('./routes');

const cors = require('cors');

const useSpy = jest.fn();
const listenSpy = jest.fn();

jest.doMock('express', () => {
    return() => ({
        use: useSpy,
        listen: listenSpy,
    })
})

jest.mock('cors');

describe("test of server", () => {
    require('./index');

    test("test if express is runnin", () => {
        expect(listenSpy).toHaveBeenCalled();
    })

    test("test if express use routes", () => {
        expect(useSpy).toHaveBeenCalledWith(route);
    })
    
    test("test if express use cors", () => {
        expect(useSpy).toHaveBeenCalledWith(cors());
    })

})

