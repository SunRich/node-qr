---
layout: README
title: 二维码服务
date: 2017-05-15
modifiedOn: 2017-05-15
---
## 开发环境
1. 开启服务
```
npm run start
```

## docker部署

### 配置docker信息
config-default.sh
```bash
#!/bin/bash
imageName=node-qr
containerName=node-qr
```
### 构建镜像
```bash
./build.sh
```

## 服务功能
### 获取普通二维码
  - 请求 `get $host/?url=&size=`
  - 参数
    1. url(string):需要转换成二维码的URL地址
    2. size(int):二维码大小
  - 请求示例: `get $host/?url=http://www.kaoyaya.com&size=200`
  - 响应:  
  ![qrimge](./qr.png)
### 获取带logo二维码
  - 请求 `get $host/logo?url=&size=`
  - 参数
    1. url(string):需要转换成二维码的URL地址
    2. size(int):二维码大小
  - 请求示例: `get $host/logo?url=http://www.kaoyaya.com&size=200`
  - 响应:  
  ![qrimge](./qrlogo.png)
