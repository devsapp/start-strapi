const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: '/mnt/auto/data.db'
    },
    useNullAsDefault: true,
  },
});
