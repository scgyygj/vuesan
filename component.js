var Main=Vue.component("Main",{
    template:`
   <div>
    
    <div class="content">
    
    <div class="left">
       <router-view name="Left">    
</router-view>    
</div>

<div class="right">
<router-view name="Right"></router-view>
</div>

</div>
</div>
    `
});
// var Left=Vue.component("Left",{
//     data(){
//         return{
//            menu:[
//
//             ]
//         }
//     },
//     methods:{
//
//     },
//     computed:{
//       data(){
//           var arr=[];
//           for(var i in this.menu){
//               if(this.menu[i].pid==0){
//                   var obj=this.menu[i];
//                   arr.push(obj);
//               }else{
//                   for(var j in arr){
//                       if(this.menu[i].pid==arr[j].id){
//                          if(arr[j].child){
//                              arr[j].child.push(this.menu[i])
//                          }else{
//                               arr[j].child=[];
//                              arr[j].child.push(this.menu[i])
//
//                          }
//                       }
//                   }
//               }
//           }
//           console.log(arr);
//           return arr;
//       }
//     },
//     template:`
//       <div>
//          <ul style="padding-left: 20px">
//            <div v-for="item in data">
//            <li style="color: green;font-size: 20px">{{item.title}}</li>
//              <ul>
//                <li v-for="item1 in item.child" style="font-size:14px;padding-left: 25px;box-sizing: border-box">{{item1.title}}</li>
//              </ul>
//            </div>
//
//
//          </ul>
//       </div>
//     `,
//     created(){
//    fetch("./demo.txt").then(function (e) {
//        return e.json();
//    }).then(function (e) {
//        this.menu=e;
//        console.log(this.menu)
//    })
//     },
//     watch:{
//         $route(){
//            var num=this.$route.hash.slice(1);
//         var pos=document.querySelector("#a"+mum).offsetTop
//             var vm=this;
//             new TWEEN.Tween({ number: document.querySelector(".right") })
//                 .easing(TWEEN.Easing.Quadratic.Out)
//                 .to({ number: pos }, 500)
//                 .onUpdate(function () {
//                     document.querySelector(".right").scrollTop = this.number.toFixed(0)
//                 })
//                 .start()
//         }
//     }
// });
var Left = Vue.component("Left",{
    template:`
      <div>
         <ul style="padding-left: 20px">
         
         
           <div v-for="item in data">
           <li style="color: green;font-size: 20px;line-height: 40px;border-bottom: 1px solid #ccc"  ><router-link style="color: #629A9C" :to="'#'+item.id" :id="'#'+item.id">{{item.title}}</router-link></li>
             <ul>
               <li v-for="item1 in item.child" style="font-size:14px;padding-left: 25px;box-sizing: border-box;line-height: 40px"><router-link  style="color: #b2cae7" :to="'#'+item1.id" :id="'#'+item1.id">{{item1.title}}</router-link></li>
             </ul> 
           </div>
           
           
         </ul>
      </div>
    `,
    data(){
        return {
            menu:[
            ],

        }
    },
    computed:{
        data(){
            var arr=[];
            for(var i in this.menu){
                if(this.menu[i].pid==0){
                    var obj=this.menu[i];
                    arr.push(obj);
                }else{
                    for(var j in arr){
                        if(this.menu[i].pid==arr[j].id){
                            if(arr[j].child){
                                arr[j].child.push(this.menu[i])
                            }else{
                                arr[j].child=[];
                                arr[j].child.push(this.menu[i])

                            }
                        }
                    }
                }
            }
            console.log(arr);
            return arr;
        }
    },
    created(){
        fetch("./demo.txt").then(function(e){
            return e.json()
        }).then((e)=>{
            this.menu=e;
            console.log(this.menu)
        })
    },
    watch:{
        $route(){
            var num = this.$route.hash.slice(1);
            console.log(num);
            var pos = document.querySelector("#a"+num).offsetTop;
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ number:document.querySelector('.right').scrollTop})
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({number:pos}, 500)
                .onUpdate(function () {
                    document.querySelector('.right').scrollTop= this.number.toFixed(0)
                })
                .start()
            animate()
        }
    }
})
var Right=Vue.component("Right",{
    data(){
        return{
            data:""
        }
    },
    template:`
<div class="markdown-body">
    <div v-html="data">
    </div>
    
</div>
`,
    mounted(){
        fetch("./doc.txt").then(function (e) {
            return e.text();
        }).then((e)=>{
            this.data=e
        })
    }
})

var Query=Vue.component("Query",{
    template: `
   <div>
   query
   query
   query
   query
   query
   query
   query
   query
   
   </div>
   
    `
})