import { test as base } from "@playwright/test";
import type { PlayWrightAiFixtureType } from "@midscene/web/playwright";
import { PlaywrightAiFixture } from "@midscene/web/playwright";
import { login } from './login.ts';

export type CustomFixtures = PlayWrightAiFixtureType & {
  login: () => Promise<void>;
};

export const test = base.extend<CustomFixtures>({
  ...PlaywrightAiFixture(),
  login: async ({ page, ai, aiAssert }, use) => {
    await use(async () => {
      await login(page, ai, aiAssert);
    });
  },
});
