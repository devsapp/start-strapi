# strapi 帮助文档

<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=strapi&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=strapi" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=strapi&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=strapi" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=strapi&type=packageDownload">
  </a>
</p>

<description>

> ***快速部署一个 strapi 框架到阿里云函数计算***

</description>

<table>



</table>

<codepre id="codepre">

</codepre>

<deploy>

## 部署 & 体验

<appcenter>

- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=strapi) ，
[![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=strapi)  该应用。 

</appcenter>

- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
    - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://www.serverless-devs.com/fc/config) ；
    - 初始化项目：`s init strapi -d strapi`   
    - 进入项目，并进行项目部署：`cd strapi && s deploy -y`

</deploy>

<appdetail id="flushContent">

# 应用详情

## 项目使用注意事项
项目Yaml中，声明了`actions`，其对应的命令分别为`npm install`以及`npm run build`。如果已经安装依赖或者无需`build`，再部署的时候通过`--skip-actions`跳过：`s deploy --skip-actions`。
或者注释掉`actions`的声明。加速`deploy`的部署流程

## 应用详情
通过 Serverless Devs 开发者工具，您只需要几步，就可以体验 Serverless 架构，带来的降本提效的技术红利。

本案例应用是一个非常简单的静态网站案例，部署完成之后，您可以看到系统返回给您的案例地址，例如：

![图片alt](https://img.alicdn.com/imgextra/i3/O1CN01fxYSoO1fHLTljwiTM_!!6000000003981-2-tps-1798-420.png)

此时，打开案例地址，就可以看到测试的应用详情：

![图片alt](https://img.alicdn.com/imgextra/i4/O1CN01crbYOg1MXOeyDUzQ0_!!6000000001444-2-tps-2532-1328.png)


</appdetail>

<devgroup>

## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
|--- | --- | --- |
| <center>微信公众号：`serverless`</center> | <center>微信小助手：`xiaojiangwh`</center> | <center>钉钉交流群：`33947367`</center> | 

</p>

</devgroup>