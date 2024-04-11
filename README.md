# electron-vue

## Project Build

```
npm install 
yarn run server:build
yarn run electron:bulid
```

## 原 repository
 https://github.com/vksir/electron-vue-example
 
运行报错 `Error: error:0308010C:digital envelope routines::unsupported`

package.json 中修改 `electron:build`=
`SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service electron:build`