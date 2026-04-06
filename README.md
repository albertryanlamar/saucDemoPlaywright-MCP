
<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" width="120" alt="AI Agent" />
  
  <h1>🎭 Playwright + MCP: AI-Driven Browser Automation 🤖</h1>
  <h3>Give AI agents eyes and hands to write, run, and heal your UI tests in real-time.</h3>
  <p>
    <b>Playwright</b> <b>AI Agents</b> <b>MCP Protocol</b> <b>CI</b>
  </p>
</div>

---

## ✨ What This Is

Ever wish your AI assistant could actually see your app, click buttons, and fix its own mistakes?

By leveraging <b>@playwright/mcp</b>, we give AI agents a live browser to interact with. Instead of guessing what your HTML looks like, the AI navigates a real browser instance, reads the actual DOM, and generates resilient, production-ready Playwright tests.

---

## 🚀 Key Capabilities

- 👁️ <b>Visual Intelligence</b> — the AI sees your app exactly as a user does
- ⚡ <b>Auto-Healing</b> — tests break? the AI detects the change and fixes locators instantly
- ✍️ <b>Zero-Code Test Writing</b> — describe a scenario in plain English; the AI writes the .spec.ts
- 🕵️ <b>DOM Mastery</b> — real-time DOM analysis to find the most resilient selectors

---

## 🗺️ How It Works

The AI reads your test plan, uses your Page Objects, and controls a live browser via the <b>@playwright/mcp</b> server.

---

## Project Structure
- `tests/` - Playwright test specs
- `src/testdata/tc/` - Test case data (JSON)
- `report/` - Test reports (Allure, HTML, JSON, JUnit)
- `docs/` - Documentation and test plans
- `Dockerfile`, `docker-compose.yml` - Containerization

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run tests**
   ```bash
   npx playwright test
   ```
3. **View Allure report**
   ```bash
   npx allure serve report/allure-results
   ```
4. **Use Docker**
   ```bash
   docker-compose up --build
   ```

## AI Agent Capabilities
- **Test Generation**: Automatically create Playwright tests from requirements.
- **Test Healing**: Fix failing tests using AI suggestions.
- **Test Planning**: Generate comprehensive test plans.

> The AI agent is powered by GPT-4.1 and can be accessed via integrated VS Code tools or CLI commands.

## Example Test (Playwright)
```typescript
import { test, expect } from '@playwright/test';

test('sample test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

## License
MIT
