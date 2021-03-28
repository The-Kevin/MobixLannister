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

describe("test server", () => {

    test("test if express is runnin", () => {
        require('./index');
        expect(listenSpy).toHaveBeenCalled();
    })

    test("test if express use routes", () => {
       require('./index');
        expect(useSpy).toHaveBeenCalledWith(route);
    })
    
    test("test if express use cors", () => {
        require('./index');
        expect(useSpy).toHaveBeenCalledWith(cors());
    })

})