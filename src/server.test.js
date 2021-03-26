const route = require('./routes');
const start = require('./models/start');

const useSpy = jest.fn();
const listenSpy = jest.fn();

jest.doMock('express', () => {
    return() => ({
        use: useSpy,
        listen: listenSpy
    })
})


describe("test server", () => {

    test("test if express is runnin", () => {
        require('./index');
        expect(listenSpy).toHaveBeenCalled();
    })

    test("test if express use routes", async () => {
       require('./index');
        expect(useSpy).toHaveBeenCalledWith(route);
    })

})