module.exports = {
  apps: [{
    name: 'CLICK-TOP-API',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      TOKEN_SECRET: 'wesfswerwer',
      DATA_BASE_HOST: 'localhost',
      DATA_BASE: 'clicktop',
      DATA_BASE_USER: 'root',
      DATA_BASE_USER_PASSWORD: 'root'
    },
    env_production: {
      NODE_ENV: 'production',
      TOKEN_SECRET: 'THODJYR8954834)(*&#',
      DATA_BASE_HOST: 'localhost',
      DATA_BASE: 'clicktop',
      DATA_BASE_USER: 'clicktop',
      DATA_BASE_USER_PASSWORD: 'hpuseGun-2pq'
    }
  }],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};