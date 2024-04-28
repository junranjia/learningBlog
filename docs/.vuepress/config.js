module.exports = {
	//设置标题
  	title: 'JJR 的中文博客',
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
                text: 'JJR的学习博客', 
                items: [
                    { text: 'Github', link: '待添加' },
                ]
            }
        ],
        //输出侧边栏
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
          ]
    },

    //添加github仓库
    base: '/learningBlog/'



}

