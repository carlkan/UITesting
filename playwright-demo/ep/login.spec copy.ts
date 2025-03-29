import { test } from "../ep/fixture";

test.beforeEach(async ({ page }) => {

  page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("https://10.15.204.201:4999/fe/#/running?appID=E-Frame-portal");
  // 处理证书对话框

  await page.waitForLoadState("networkidle");
  
    // 注入 JS 代码绕过验证码校验
    await page.evaluate(() => {
      (window as any).lalalaid = '123456789';
    });
});


test("登录", async ({ page, ai, aiAssert }) => {  // 在测试函数参数中添加 aiAssert
  await ai("在租户域名输入框，输入goldwind");
  await ai("在用户名输入框，输入psadmin");
  await ai("在密码输入框，输入Ep%2028&091");
  await ai("在验证码输入框，输入111");
  await ai("点击登录按钮");
  await aiAssert('左上角有一块区域显示 "新能源智慧运营平台"');
});

