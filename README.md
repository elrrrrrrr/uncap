# 🍾 Uncap

[中文版本](./README.zh-CN.md)
[🚀 Live Example](https://uncap.elrrrrrrr.cloud/cnpmcore@3.x)

> Uncap: A missing UI for npmmirror's online pkg viewer.

![screenshot](https://github.com/elrrrrrrr/uncap/blob/main/uncap.png)

* 🏗️ Independently deployable
* 🛠️ Easy to integrate in project
* 💪🏻 Powerful file parsing performance
* 🎯 Any semver expression

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/elrrrrrrr/uncap/tree/main)

## Introduction

[npmmirror](https://npmmirror.com/) provides a powerful online preview feature for NPM artifacts. Uncap is the frontend implementation of this feature.

## Principles

1. Use [umijs](https://github.com/umijs/umi) as the frontend framework.
2. Use [monaco-editor](https://github.com/microsoft/monaco-editor) for file content preview.
3. Interface services are provided by [cnpmcore](https://github.com/cnpm/cnpmcore) , which also supports cross-domain calls by default.
4. Inspired by [ref](https://codesandbox.io/s/react-monaco-file-tree-ww9kis)

## Development Guide

```shell
# Use your preferred package management tool for dependency installation
$ npm i

# Launch the local development environment
$ npm run dev

# If there is a custom deployment requirement
# you can perform the build and package.
# The build output defaults to the dist directory.

$ npm run build
```

## Roadmap
- [x] Support for semver expressions
- [ ] Path URL mapping
- [ ] Version and release list
- [ ] Access history page
- [ ] Light theme
