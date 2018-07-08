1.git初始化项目
  mkdir useHtmlApi
  git init
2.初始化npm项目环境
  npm init
3.提交第一个package.json添加到仓库(git add 可以一次提交多个文件)
  git add package.json
4.把文件提交到仓库
  git commit -m 'npm init'
5.git status 查看项目当前更改情况
6.git diff README.md查看更改了那些部分
  当git add README.md之后就可以发现下次git commit的提交就可以包括修改过的内容了
7.git reset --hard HEAD^
  git reset --hard HEAD^表示回退上一个版本
  git reset --hard HEAD^^表示回退上上个版本
8.git reset --hard 1094a
  回到固定的某个提交版本（如果找不到自己的版本编号了，可以使用git reflog查看每一次的命令）  
9.注意本地全局webpack和项目中的webpack版本是否一致。
  npx webpack --config webpack.config.js;将根据本地的webpack配置文件进行打包
10.webpack管理资源（loader的使用）
  webpack的配置文件的位置暂时不知道在哪里修改，然后就是寻找文件的位置在include中配置的，cssloader Ok
11.webpack配置多个入口文件，并且在output中通过变量输出对应的文件名到index.html中
12.开发环境的搭建
  首先在生产环境中加入source map有利于查找问题位置引入 devtool: 'inline-source-map'（还有不同等级的map）
  使用观察者模式，检查当文件发生改变自动编译输出（使用webpack --watch）唯一问题是浏览器无法热更新
  webpack-dev-server用来处理热更新npm 执行webpack-dev-server --open 然后在webpack配置文件中写入devServer要监听的文件（发现更新效率较低，等待时间较长）
13.与服务器合作
14.热更新,问题是和vue-cli比更新的速度还是非常慢，需要五秒左右，需要解决这个问题
15.与vue结合，输出模版。需要在插件中配置HtmlWebpackPlugin设置模版文件
16.解决每次打包时间过长的原因有三点，
  resolve需要重新打包的文件，减少loader时间
  将source-map的类型改为cheap类型大大减少打包时间
  model设置为开发者模式，可以减少一定的时间
  暂时不清楚是否有其他方法！！！！
17.vue的组件实现，es6的语法使用，以及重新加一个git分支，最后合成代码。
