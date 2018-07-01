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
    host: 'ec2-54-235-244-185.compute-1.amazonaws.com',
    database: 'd32n0ji74ul5nq',
    username: 'frvlmckhgbjkzf',
    password: 'b9351aa92cfd386c1deee435d665976aba4b47dd2f1cd3cfe180f8d87e15b907',
    port: 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
