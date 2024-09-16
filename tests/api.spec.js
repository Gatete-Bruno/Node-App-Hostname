require('dotenv').config()
const axios = require('axios');

// replace url value with your servers url in the .env
// be sure to push the .env with the url to github

URL=process.env.URL

describe("Test ingress", () => {
    it("returns 200 status code", async () => {
        const response = await axios.get(URL); 
        expect(response.status).toEqual(200);
    });

    it("returns a success message", async () => {
        const response = await axios.get(URL); 
        expect(response.data.success).toEqual(true);
    });

    it("returns hits", async () => {
        const response = await axios.get(URL); 
        expect(response.data.hits).toBeGreaterThan(0);
    });

    it("returns a hostname", async () => {
        const response = await axios.get(URL); 
        expect(response.data.hostName.length).toBeGreaterThan(0);
    });
});
