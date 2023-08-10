module.export = {
  apps: [
    {
      name: 'jenkins_pm2',
      script: 'node_modules/next/dist/bin/next',
      args: 'start --port 80',
      instance: 1,
      exec_mode: 'single',
    },
  ],
};
