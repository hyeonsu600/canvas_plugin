module.exports = {
  apps: [
    {
      name: 'text-recognition-lti',
      script: 'server.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3004
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
}; 