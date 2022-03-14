module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  backend: '0.0.0.0',
  // url: 'http://strapi.strapi.1740298130743624.cn-hangzhou.fc.devsapp.net',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
