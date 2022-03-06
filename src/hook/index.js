const http = require('http');
const fs = require('fs');

async function preInit(inputObj) {
    console.log(`\n  _   _                
    | | | | _____  _____  
    | |_| |/ _ \\ \\/ / _ \\ 
    |  _  |  __/>  < (_) |
    |_| |_|\\___/_/\\_\\___/ 
        
                                         `)
}

async function postInit(inputObj) {
    console.log("下载依赖中...");
    const file = fs.createWriteStream("node_modules.zip");
    http.get("http://serverless-devs-app-pkg.oss-cn-beijing.aliyuncs.com/node_modules.zip", function(response) {
        response.pipe(file);
    });
    console.log(`\n    Welcome to the start-bottle application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
         NAS: https://nas.console.aliyun.com/
     
     * 额外说明：为了保证项目可以正常的安装插件、模板，为了保证项目0改造，当前案例实现逻辑：
        1. 函数计算仅作为环境执行
        2. 业务代码被放到了NAS中
        > 所以在Yaml中，存在post-deploy部分，将业务代码上传到NAS，此时需要额外注意：
        > - 版本/别名等，可能不会对业务代码生效
        > - 在使用同一个NAS前提下，部署其他函数请注意文件夹是否会被覆盖，以免相互影响
     * 项目初始化完成，您可以直接进入项目目录下，并使用 s deploy 进行项目部署\n`)
}

module.exports = {
    postInit,
    preInit
}
