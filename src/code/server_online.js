const path = require("path");
const fs = require("fs-extra");
const os = require("os");
const strapi = require("@strapi/strapi");
const nodeEnv = process.env.NODE_ENV;

function symlinkSrcApi() {
  const apiPath = path.join(__dirname, "src/api");
  const nasPath =
    nodeEnv === "local"
      ? path.join(os.homedir(), "strapi/api")
      : "/mnt/auto/strapi/api";

  const isApiPathExist = fs.existsSync(apiPath);
  console.log("registerisApiPathExist", isApiPathExist);
  fs.ensureDirSync(nasPath);
  if (!isApiPathExist) {
    // NAS 文件存在，加载软链
    fs.ensureSymlinkSync(nasPath, apiPath);
  } else {
    // 如果src/api 路径存在
    const fd = fs.lstatSync(apiPath);

    // 如果已经存在src/api 文件夹，需要删除掉。
    // TODO: 是否这个能力通过开关控制
    if (fd.isDirectory()) {
      if (!isNasPathExist) {
        // 如果NAS中也不存在，拷贝到NAS系统
        fs.copySync(apiPath, nasPath);
      }
      fs.removeSync(apiPath);
    }
    /**
     * 保证软链成功
     */
    fs.ensureSymlinkSync(nasPath, apiPath);
  }
}

symlinkSrcApi();
if (nodeEnv === "production") {
  strapi().start();
  console.log("strapi started");
}
