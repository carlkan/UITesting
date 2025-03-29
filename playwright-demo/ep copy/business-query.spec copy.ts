import { test } from "./fixture";
import type { CustomFixtures as PlayWrightAiFixtureType } from "./fixture";
import type { Page } from "@playwright/test";

test.beforeEach(async ({ login }: PlayWrightAiFixtureType) => {
  await login();
});

test("新建集团", async ({ page, ai, aiQuery, aiAssert }) => {
  // 导航到右上角系统配置
  await ai("点击右上角的系统配置");
  // 添加等待时间，确保下拉菜单完全展开
  await page.waitForTimeout(1000);
  await ai("下拉选择用户&权限管理");
  // 添加等待时间，确保二级菜单完全展开
  await page.waitForTimeout(1000);
  await ai("移动选择组织机构管理");
  // 添加等待时间，确保页面完全加载
  await page.waitForTimeout(1000);
  
  // 执行查询操作
  await ai("点击左侧的新增组织");
  await aiQuery("弹出新增组织弹框");
  
  await ai("组织类型下拉选择集团");
  await ai("组织名称输入框输入EGtest001");
  await ai("下滑滚动条到底部");
  await ai("是否是监视对象后面的选择框，选择上");
  await ai("经度输入框输入23");
  await ai("纬度输入框输入23");
  await ai("点击保存按钮");
  
  
  // 获取查询结果
  // const queryResults = await aiQuery(
  //   "{deviceName: string, status: string}[], 获取设备列表中的设备名称和状态信息"
  // );
  
  // console.log("查询结果：", queryResults);
  
  // // 验证查询结果
  // await aiAssert("查询结果列表不为空");
  // await aiAssert("列表中显示了设备名称和状态信息");
});

test("新建用户", async ({ page, ai, aiQuery, aiAssert }) => {
  // 导航到右上角系统配置
  await ai("点击右上角的系统配置");
  // 添加等待时间，确保下拉菜单完全展开
  await page.waitForTimeout(1000);
  await ai("下拉选择用户&权限管理");
  // 添加等待时间，确保二级菜单完全展开
  await page.waitForTimeout(1000);
  await ai("下拉选择用户管理");
  // 添加等待时间，确保页面完全加载
  await page.waitForTimeout(1000);
  await ai("点击新增按钮");
  
  // 执行查询操作
  await ai("用户名输入框输入kkkywpzy");
  await ai("姓名输入框输入kkkywpzy");
  await ai("手机号码输入框输入随机的11位数手机号码");
  
  await ai("关联角色下拉框，下拉选择业务配置员角色（业务配置员）");
  await ai("登录密码输入框输入Abc1234%091");
  await ai("点击保存按钮");
  
  
  // // 获取查询结果
  const queryResults = await aiQuery(
    "{用户名: string, 关联角色: string}[], 获取用户列表中的用户名和关联角色"
  );
  
  console.log("查询结果：", queryResults);
  
  // 验证查询结果
  await aiAssert("查询结果列表不为空");
  await aiAssert("列表中显示了关于kkkywpzy用户名和关联角色");
});

