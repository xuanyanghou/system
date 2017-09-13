1 babelrc 作用是把es6语法转换为es5的语法
2 editorconfig 编辑器的设置
3 eslintignore 忽略语法检查的目录文件
4 eslintrc 预先定义的规则 比如＝＝＝  if 后面有空格等规则
5 webpack 会把css打包到js文件中
6 devMiddleware express专门为webpack开发的中间键 作用强大 把编译好的文件放到内存进行访问
7 图标字体制作 网站icomoon.io  iconmoon app => import icons => 导入svg格式图片 => 选中导入的图标 => Generate font => download
8 chrome的插件jsonview 美观的展示json数据
9 eslintrc rules 是否想要分号 'semi': ['error', 'always'] 是否每行缩近 'indent': 0
10 单独使用new Vue() 不赋值时候会报错 可以在上面加一行 /* eslint-disable no-new*/
11 Can't resolve 'stylus-loader' 报错 
	解决：1.npm install stylus stylus-loader style-loader
		 2.webpack.base.conf.js的module加入{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' 
				}
		 3. resolve的extensions里加入了.styl extensions: ['', '.js', '.vue','.styl']
	解决2: 在package.json 文件中加入stylus-loader: "^2.1.1" 重新npm install
12 vue-loader 中插件postcss 搞定css兼容性问题
13 cli.im 网站可以生成(IP地址)url的二维码 然后用手机扫描 检测手机显示： 手机和电脑要链接同一个局域网
14 两个span标签放一起会有1px间隔，如何去掉：1 设置他们父元素font-size: 0   2 让两个span紧挨着
15 背景模糊iOS上可以实现： backdrop-filter: blur(10px)
16 sticky footers 设计： 如果页面内容不够长的时候，页脚块粘贴在视窗底部；如果内容足够长时候，页脚块会被内容向下推送
	<div class="wrapper clearfix">
		<div class="content"></div>
	</div>
	<div class="close"> </div>
	.clearfix
		display: inline-block
		&:after
			display: block
			content: '.'
			height: 0
			line-height: 0
			clear: both
    		visibility: hidden
    .wrapper
    	min-height: 100%
    	.content
    		padding-bottom: 50px
    .close
    	position: relative
		width: 32px
		height: 32px
		margin: -50px auto 0 auto
		clear: both
		font-size: 32px



