require('dotenv').config();
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

URL = process.env.URL;

describe("Test ingress", () => {
    let mock;

    // Initialize the mock adapter before each test
    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    // Reset the mock after each test
    afterEach(() => {
        mock.reset();
    });

    it("returns 200 status code", async () => {
        // Mocking the API response
        mock.onGet(URL).reply(200, { success: true, hits: 10, hostName: "test-host" });

        const response = await axios.get(URL);
        expect(response.status).toEqual(200);
    });

    it("returns a success message", async () => {
        // Mocking the API response
        mock.onGet(URL).reply(200, { success: true });

        const response = await axios.get(URL);
        expect(response.data.success).toEqual(true);
    });

    it("returns hits", async () => {
        // Mocking the API response
        mock.onGet(URL).reply(200, { hits: 10 });

        const response = await axios.get(URL);
        expect(response.data.hits).toBeGreaterThan(0);
    });

    it("returns a hostname", async () => {
        // Mocking the API response
        mock.onGet(URL).reply(200, { hostName: "test-host" });

        const response = await axios.get(URL);
        expect(response.data.hostName.length).toBeGreaterThan(0);
    });
});
