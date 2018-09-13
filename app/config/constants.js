const devConfig = {
  MONGO_URL: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds059306.mlab.com:59306/voting-app`
};
const testConfig = {
  MONGO_URL: `mongodb://${process.env.DB_USER_TEST}:${process.env.DB_PASS}@ds155252.mlab.com:55252/voting-app-test`
};
const prodConfig = {
  MONGO_URL: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds059306.mlab.com:59306/voting-app`
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};