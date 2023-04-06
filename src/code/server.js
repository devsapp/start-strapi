const strapi = require("@strapi/strapi");
const options =
  process.env.NODE_ENV === "production"
    ? {}
    : {
        dir: __dirname,
        autoReload: true,
        watchIgnore: ["**/node_modules/**"],
      };

strapi(options).start();
