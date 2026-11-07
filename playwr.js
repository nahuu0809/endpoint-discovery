const { chromium } = require("playwright");

(async () => {

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  page.on("response", async (response) => {
    const url = response.url();

    if (url.includes("search") || url.includes("inventory") || url.includes("cars")) {

      console.log("Endpoint detectado:", url);

      try {
        const data = await response.json();
        console.log("Respuesta JSON:", data);
      } catch (e) {}

    }
  });

  const TARGET_URL = process.env.TARGET_URL || "https://example.com";

  await page.goto(TARGET_URL, { waitUntil: "networkidle" });

})();