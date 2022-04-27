This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 开始

首先，克隆当前项目，用git clone 或者 download 下来也行

```bash
# 安装依赖
yarn 
# or
npm i
# 运行
npm run dev
# or
yarn dev
```

## 项目简介
- 一个在线壁纸的web端，图片资源主要是来时360壁纸接口，通过爬虫将图片的一些url爬取下来放在数据库中的，我将脚本放在了Nodejs文件夹下面了，大家可以看一下，如果想要看效果，可以进入nodejs目录下后，首先通过`yarn` 或者 `npm i`来安装依赖，然后运行`node 360bizhi.js` ,注意爬虫是基于Nodejs的，你本地开发环境必须安装有Nodejs 环境

## 项目技术
- 后台主要用的DCloud的云开发来写接口的(非常方便，环境都帮你搭建好的了，且对前端是很友好的，详细可以自己去了解一下`https://uniapp.dcloud.net.cn/uniCloud/cf-database.html#get-collection`)，然后前端这边通过云函数url来调用接口，前端这边主要是Nextjs + react-bootstrap + axios
## 更多....
 -   注： 其实整个项目用到的技术也是很基础的，因为我主要是用React技术栈，之前前端项目架构都是基于create-react-app和umijs来搭建的，后来发现作为React最火的一个框架Nextjs居然没用过，所有自己就去官网学了一下，顺便做个项目来实践一下(盆友们，学一门技术最好是自己去实践做一些demo，这样上手是最快的！),因为项目还没完善的，后期也会慢慢去完善的。

- 最后感谢大家，如果我这个项目对你起到帮助，麻烦大家给个star ，谢谢
    

## Deploy on Vercel



## 项目预览
- https://lance-bizhi-next-pr706hkx3-lance-yang.vercel.app/
