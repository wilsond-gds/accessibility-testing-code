const {voTest:test} = require("@guidepup/playwright");
const {expect} = require("@playwright/test");
const itemTextSnapshot = require("./itemTextSnapshot.json");

test.describe("Playwright VoiceOver", () => {
    test("I can navigate the One Login accessibility statement", async ({
                                                               page,
                                                               voiceOver,
                                                           }) => {
        // Navigate to page being tested
        await page.goto("https://signin.account.gov.uk/accessibility-statement", {
            waitUntil: "domcontentloaded",
        });

        // Wait for page to be ready and interact
        await expect(page.locator('header[role="banner"]')).toBeVisible();
        await voiceOver.interact();

        // Move across the page menu to the Guidepup heading using VoiceOver
        while ((await voiceOver.itemText()) !== "How accessible GOV.UK One Login is heading level 2") {
            await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);
        }

        // Assert that we've ended up where we expected and what we were told on
        // the way there is as expected.
        const itemTextLog = await voiceOver.itemTextLog();

        for (const expectedItem of itemTextSnapshot) {
            expect(!!itemTextLog.find(log => log.includes(expectedItem))).toBe(true);
        }
    });
});