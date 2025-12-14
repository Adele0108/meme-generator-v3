module.exports = {
  launch: {
    headless: process.env.CI === 'true' ? 'new' : false,
    slowMo: process.env.CI === 'true' ? 0 : 50,
    devtools: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ]
  },
  server: {
    command: process.platform === 'win32' 
      ? 'python -m http.server 8000' 
      : 'python3 -m http.server 8000',
    port: 8000,
    launchTimeout: 30000,
    debug: false
  },
  browserContext: 'default'
};

