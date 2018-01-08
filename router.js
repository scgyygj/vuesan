var router=new VueRouter({
    routes:[
        {
            path:'/',
            component:Main,
            children:[
                {
                    path:'',
                    components:{
                        Left:Left ,//名字，组件名
                        Right:Right
                    }
                }
            ]
        },
        {
            path:'/query',
            component:Query,
        }


    ]
})