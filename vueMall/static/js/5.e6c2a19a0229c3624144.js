webpackJsonp([5],{AhoD:function(e,t){e.exports={statusCode:"200",msg:"success",data:[{id:1,username:"大黑",face:"https://ae01.alicdn.com/kf/H9ff0d7df391845419515db553c5a9858I.jpg",date:"2019-04-21 13:40",spec:"规格: XL",grade:1,rate:5,content:"好看，可以，不愧是专业的，才拿到手上就研究了半天才装上",img:["https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg","https://ae01.alicdn.com/kf/HTB1sL7hTjDpK1RjSZFrq6y78VXaw.jpg","https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2018-12-28/1083f3db90334f86e3fc3586b4472914.mp4"}]},{id:2,username:"romance",face:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579496192579&di=4d89dcc719d0af1aa3ff6a233abb69ff&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F03%2F20141003094945_TAEXT.thumb.224_0.jpeg",date:"2019-05-21 15:12",spec:"规格: L",grade:1,rate:5,content:"很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！",img:["http://p5.so.qhimgs1.com/t014195b8105ceb7477.jpg","http://p2.so.qhimgs1.com/t01388cbc6f6e7c38fc.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4"}]},{id:3,username:"走路带土",face:"https://ae01.alicdn.com/kf/H1ba4109e1530443cbda86e9f680341b5u.jpg",date:"2019-08-01 16:30",spec:"规格: M",grade:1,rate:4,content:"好评，看图",img:["https://ae01.alicdn.com/kf/H8c5c948ea4e5457fbd9cbccff69b35f4V.jpg","https://ae01.alicdn.com/kf/H9ad91d6973c24ae2acc1f2b9fc6ce86ca.png"],video:[]},{id:4,username:"◢▂ωēη楺cì客▂◣",face:"https://ae01.alicdn.com/kf/Hb2df5ea3e9384c19a49f658dd9ad05c3P.jpg",date:"2019-09-12 10:45",spec:"规格: XS",grade:4,rate:4,content:"系统默认好评",img:[],video:[]},{id:5,username:"日暮途穷￠",face:"http://p0.so.qhimgs1.com/t01e449cc9ff9b3c417.jpg",date:"2019-10-12 12:45",spec:"规格: XS",grade:1,rate:3,content:"一般般吧",img:[],video:[]},{id:6,username:"累却坚持i",face:"https://ae01.alicdn.com/kf/H79daa9c29eea4215a1fe4305f23272769.jpg",date:"2019-11-11 08:45",spec:"规格: L",grade:2,rate:2,content:"质量不是很好，建议大家再多多选择~~~~~~~",img:[],video:[]},{id:7,username:"一场梦而已丶",face:"https://ae01.alicdn.com/kf/H67023f42dbad4663be91979a3de04421o.jpg",date:"2019-11-11 19:45",spec:"规格: M",grade:4,rate:4,content:"系统默认好评",img:[],video:[]},{id:8,username:"丶sdk丶",face:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=13392530,2374827479&fm=26&gp=0.jpg",date:"2019-11-12 19:45",spec:"规格: XXL",grade:2,rate:1,content:"3000亿白马股出事！A股频演“监狱风云”，高管竟成“高危职业”？",img:["https://pics2.baidu.com/feed/5243fbf2b2119313d0f3ef2c47f3b2d293238dce.jpeg?token=3fdc25816a30eb91e9e3c9fa9e8d1698&s=0AAA742311CEC4E94A5D21DB000080B1","https://pics3.baidu.com/feed/0b46f21fbe096b63a368642028f83941eaf8ac99.jpeg?token=3bf0389aa5187b841896dfd1f109f23b&s=6902881A9BDC60C85A7591D90300C0B2"],video:[]}]}},M0ZT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("AhoD"),c=a.n(n),i={name:"comments",data:function(){return{nowComments:[],commentData:c.a.data,headerBg:!1,showBigImg:!1,imgIndex:0,images:[],grade:[{id:0,name:"全部"},{id:1,name:"好评"},{id:2,name:"差评"},{id:3,name:"有图"},{id:4,name:"追加"}],currentGrade:0}},methods:{selectGrade:function(e){this.currentGrade=e;var t=c.a.data;0!==e?(t=3===e?c.a.data.filter(function(e){return e.img.length>0}):c.a.data.filter(function(t){return t.grade===e}),this.commentData=t):this.commentData=t},lookImg:function(e,t){"avator"===t?(this.imgIndex=0,this.images=[e]):(this.images=e,this.imgIndex=t),this.showBigImg=!0},onChange:function(e){this.index=e+1}},filters:{filterCount:function(e){return(0===e?c.a.data.filter(function(t){return t.grade!==e}):3===e?c.a.data.filter(function(e){return e.img.length>0}):c.a.data.filter(function(t){return t.grade===e})).length}},activated:function(){var e=this;document.documentElement.scrollTop=document.body.scrollTop=0,this.selectGrade(0),window.onscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;e.headerBg=t>130}},deactivated:function(){this.headerBg=!1,this.currentGrade=0,window.onscroll=null},beforeRouteLeave:function(e,t,a){this.showBigImg?(this.showBigImg=!1,a(!1)):a()}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"comments"}},[a("header",{class:{on:e.headerBg}},[a("i",{staticClass:"iconfont icon-back",on:{click:function(t){return e.$router.go(-1)}}}),e._v(" "),a("span",[e._v("商品评论")])]),e._v(" "),a("div",{staticClass:"label"},e._l(e.grade,function(t,n){return a("span",{class:{on:e.currentGrade===n},on:{click:function(t){return e.selectGrade(n)}}},[e._v("\n\t\t\t"+e._s(t.name)+" ("+e._s(e._f("filterCount")(t.id))+")\n\t\t")])}),0),e._v(" "),e._l(e.commentData,function(t,n){return a("div",{key:n,staticClass:"box"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:t.face,alt:""},on:{click:function(a){return e.lookImg(t.face,"avator")}}})]),e._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"name"},[e._v("\n\t\t\t\t"+e._s(t.username)+"\n\t\t\t\t"),a("span",[e._v(e._s(t.date))])]),e._v(" "),a("div",{staticClass:"spec"},[e._v("\n\t\t\t\t"+e._s(t.spec)+"\n\t\t\t")]),e._v(" "),a("div",{staticClass:"rate"},[a("van-rate",{attrs:{readonly:""},model:{value:t.rate,callback:function(a){e.$set(t,"rate",a)},expression:"val.rate"}})],1),e._v(" "),a("div",{staticClass:"content"},[e._v("\n\t\t\t\t"+e._s(t.content)+"\n\t\t\t")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.img.length>0,expression:"val.img.length>0"}],staticClass:"imgBox"},e._l(t.img,function(n,c){return a("img",{attrs:{src:n},on:{click:function(a){return e.lookImg(t.img,c)}}})}),0)])])}),e._v(" "),a("van-divider",{directives:[{name:"show",rawName:"v-show",value:e.commentData.length>6,expression:"commentData.length>6"}],style:{borderColor:"#aaa",marginTop:".46rem"}},[e._v("到底啦")]),e._v(" "),a("van-image-preview",{attrs:{images:e.images,"start-position":e.imgIndex},model:{value:e.showBigImg,callback:function(t){e.showBigImg=t},expression:"showBigImg"}})],2)},staticRenderFns:[]};var o=a("C7Lr")(i,s,!1,function(e){a("meEh")},"data-v-8bad951a",null);t.default=o.exports},meEh:function(e,t){}});
//# sourceMappingURL=5.e6c2a19a0229c3624144.js.map