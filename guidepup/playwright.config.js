const { voConfig } = require("@guidepup/playwright");
const { devices } = require("@playwright/test");

const config = {
    ...voConfig,
    reportSlowTests: null,
    timeout: 4 * 60 * 1000,
    retries: 1,
    projects: [
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"], headless: false, video: "off" },
        },
    ],
};

module.exports = config;