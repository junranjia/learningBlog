module.exports = {
	//设置标题
  	title: 'Lawrence的中文博客',
  	description: '主要是一些JJR的个人博客',

 	//设置主题为vuepress-theme-reco
  	theme: 'reco',
	
	//设置语言
  	locales: {
    '/': {
      lang: 'zh-CN'
    	}
  	},

	//开启目录结构
	themeConfig: {
    subSidebar: 'auto'
  	},

  //设置主题格式
    themeConfig: {
    	//输出标题栏
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'Lawrence的个人主页', 
                items: [
                    { text: 'Github', link: '待添加' },
                ]
            }
        ],
        //输出侧边栏
        sidebar: [
            {
                title: '主页（待更改）',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "主页（待更改）", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/',
              collapsable: false, // 不折叠
              children: [
                { title: "第一篇博客", path: "/handbook/blog1-" },
                { title: "第二篇博客", path: "/handbook/blog2-" }
              ],
            }
          ]
    },

    //添加访问前缀
    base: '/learningBlog/'



}

