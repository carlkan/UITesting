import type { Page } from '@playwright/test';
import type { PlayWrightAiFixtureType } from '@midscene/web/playwright';

export async function login(
  page: Page,
  ai: PlayWrightAiFixtureType['ai'],
  aiAssert: PlayWrightAiFixtureType['aiAssert']
) {

  page.setViewportSize({ width: 1920, height: 1080 });
  // await page.goto("https://10.15.204.201:4999/fe/#/running?appID=E-Frame-portal");
  await page.goto("https://10.12.41.43:4999/fe/#/running?appID=E-Frame-portal");
  
  // 等待一段时间确保证书选择框显示
  await page.waitForTimeout(5000);
  // 处理证书选择框，按Enter键选择默认证书
  await page.keyboard.press('Enter');

  await page.waitForLoadState("networkidle");
  
  // 注入 JS 代码绕过验证码校验
  await page.evaluate(() => {
    (window as any).lalalaid = '123456789';
  });

  await ai("在租户域名输入框，输入goldwind");
  await ai("在用户名输入框，输入psadmin");
  await ai("在密码输入框，输入Ep%2028&091");
  await ai("在验证码输入框，输入111");
  await ai("点击登录按钮");
  await aiAssert('左上角有一块区域显示 "新能源智慧运营平台"');
}