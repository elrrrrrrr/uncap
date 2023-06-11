# 🍾 Uncap

[English Version](./README.md)

[🚀 在线示例](https://uncap.elrrrrrrr.cloud/cnpmcore@3.x)

> Uncap: A missing UI for npmmirror's online pkg viewer.

![screenshot](https://github.com/elrrrrrrr/uncap/blob/main/uncap.png)

* 🏗️ 支持独立部署
* 🛠️ 支持二次集成开发
* 🚀 强大的文件解析性能
* 🎯 支持任意 semver 表达式

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/elrrrrrrr/uncap)

## 项目简介

[npmmirror](https://npmmirror.com/) 提供了强大的 NPM 产物在线预览功能，Uncap 是此功能的前端实现。

## 工作原理

1. 使用 [umijs](https://github.com/umijs/umi) 作为前端框架。
2. 使用 [monaco-editor](https://github.com/microsoft/monaco-editor) 进行文件内容预览。
3. 接口服务由 [cnpmcore](https://github.com/cnpm/cnpmcore) 提供，同时默认支持前端跨域调用。
4. Inspired by [ref](https://codesandbox.io/s/react-monaco-file-tree-ww9kis)

## 开发指南

```shell
# 使用你的首选的包管理工具进行依赖安装
$ npm i

# 启动本地开发环境
$ npm run dev

# 若有自定义部署需求，可执行构建打包，构建产物默认输出至 dist 目录。
$ npm run build
```

## 功能计划

- [x] 支持 semver 表达式
- [ ] 路径 url 映射
- [ ] 版本和发布列表
- [ ] 访问历史页
- [ ] 浅色主题
