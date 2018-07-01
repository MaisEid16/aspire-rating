module.exports = {
  locales: {
    US: {
      dbConfig: {
        user: 's',
        password: 's',
        dataSource: 's',
        connectionLifetime: 600,
      },
    },
  },
  sequalizer: {
    host: 'ec2-54-235-196-250.compute-1.amazonaws.com',
    database: 'd8j674s6g3eoj1',
    username: 'pyydgpmntmjvpf',
    password: '9f1835377cf45a867c09f16b30f99eb9af9c3357297f4545089ea63d9d3b4012',
    port: 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
