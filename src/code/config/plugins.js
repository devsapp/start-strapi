module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-oss",
      providerOptions: {
        accessKeyId: env("ACCESS_KEY_ID"),
        accessKeySecret: env("ACCESS_KEY_SECRET"),
        region: env("REGION"),
        bucket: env("BUCKET"),
        uploadPath: env("UPLOAD_PATH"),
        baseUrl: env("BASE_URL"),
        timeout: env("TIMEOUT"),
        // autoThumb: false,
        secure: env("OSS_SECURE"), //default to true
      },
    },
  },
});
