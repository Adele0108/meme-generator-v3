/**
 * Jest 测试环境配置
 * 在运行测试前执行
 */

// 设置测试超时时间
jest.setTimeout(30000);

// 全局测试前准备
beforeAll(async () => {
  // 可以在这里设置全局变量、mock数据等
  console.log('🧪 开始运行测试套件...');
});

// 全局测试后清理
afterAll(async () => {
  console.log('✅ 测试套件执行完成');
});

// 每个测试前执行
beforeEach(async () => {
  // 可以在这里重置状态
});

// 每个测试后执行
afterEach(async () => {
  // 可以在这里清理资源
});

