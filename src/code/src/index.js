"use strict";
const path = require("path");
const fs = require("fs-extra");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    const apiPath = path.join(__dirname, "api");
    const nasPath = process.env.DATABASE_FILENAME || "/mnt/auto/data.db";

    const isApiPathExist = fs.existsSync(apiPath);
    const isNasPathExist = fs.existsSync(nasPath);
    if (!isApiPathExist) {
      if (!isNasPathExist) {
        return;
      } else {
        // NAS 文件存在，加载软链
        await fs.ensureSymlink(nasPath, apiPath);
      }
    } else {
      // 如果src/api 路径存在
      const fd = await fs.lstatSync(apiPath);

      // 如果已经存在src/api 文件夹，需要删除掉。
      // TODO: 是否这个能力通过开关控制
      if (fd.isDirectory()) {
        if (!isNasPathExist) {
          // 如果NAS中也不存在，拷贝到NAS系统
          await fs.copy(apiPath, nasPath);
        }
        await fs.remove(apiPath);
      }
      /**
       * 保证软链成功
       */
      await fs.ensureSymlink(nasPath, apiPath);
    }
  },
};
