module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '98d24bdc6c1675b10eb80cd7548964d2'),
  },
});