webpackJsonp([9],{"/mDy":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("yRQG"),i=s.n(a),o={name:"othersCircle",data:function(){return{isBg:!1,isShowMore:!1,friendsList:null,nowIndex:null,isShowPop:!1,avator:null,userName:null,weChat:null,nickName:null,showImg:!1,images:[],nowImgindex:0,myName:sessionStorage.getItem("myName")}},methods:{onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1},400)},showMore:function(t){this.nowIndex===t?this.nowIndex=null:this.nowIndex=t},goUserInfo:function(t,e){t.nickName&&t.name?(sessionStorage.setItem("nowChatUser",t.name),sessionStorage.setItem("nowUserAvator",t.avator),t.nickName?sessionStorage.setItem("nowChatNickname",t.nickName):sessionStorage.setItem("nowChatNickname",""),sessionStorage.setItem("nowChatNum",t.wechatNum),sessionStorage.setItem("nowUserSex",t.sex),sessionStorage.setItem("nowUserArea",t.area),this.$router.push("/userInfo")):this.goMyInfo()},goInfo:function(){sessionStorage.setItem("nowChatUser",this.userName),sessionStorage.setItem("nowUserAvator",this.avator),this.nickName?sessionStorage.setItem("nowChatNickname",this.nickName):sessionStorage.setItem("nowChatNickname",""),sessionStorage.setItem("nowChatNum",this.weChat),sessionStorage.setItem("nowUserSex",this.sex),sessionStorage.setItem("nowUserArea",this.area),this.$router.push("/userInfo")},goMyInfo:function(){var t=sessionStorage.getItem("myName");sessionStorage.setItem("nowChatUser",t),sessionStorage.setItem("nowUserAvator","http://img2.imgtn.bdimg.com/it/u=3363472252,3522967664&fm=26&gp=0.jpg"),sessionStorage.setItem("nowChatNickname",""),sessionStorage.setItem("nowChatNum","Maple_Story"),sessionStorage.setItem("nowUserSex","男"),sessionStorage.setItem("nowUserArea","中国 浙江"),this.$router.push("/userInfo")},goTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0,this.isLoading=!0,this.nowIndex=null,this.onRefresh()},showPopup:function(){this.isShowPop=!0},showImgs:function(t,e){this.images=t,this.showImg=!0,this.nowImgindex=e}},mounted:function(){this.friendsList=i.a.data},activated:function(){var t=this;this.avator=sessionStorage.getItem("nowUserAvator"),sessionStorage.getItem("nowChatNickname")&&(this.nickName=sessionStorage.getItem("nowChatNickname")),this.userName=sessionStorage.getItem("nowChatUser"),this.weChat=sessionStorage.getItem("nowChatNum"),this.sex=sessionStorage.getItem("nowUserSex"),this.area=sessionStorage.getItem("nowUserArea"),window.onscroll=function(){t.nowIndex=null;var e=document.documentElement.scrollTop||document.body.scrollTop;t.isBg=e>240}},deactivated:function(){window.onscroll=null,this.nowIndex=null,this.nickName=null,this.isBg=!1},beforeRouteLeave:function(t,e,s){if(this.nowIndex=null,this.isShowPop){this.isShowPop=!1;var a=document.documentElement.scrollTop||document.body.scrollTop;document.documentElement.scrollTop=document.body.scrollTop=a,this.$router.go(1)}else this.showImg?(this.showImg=!1,this.$router.go(1)):s()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"friendsCircle"}},[a("div",{staticClass:"top",on:{click:t.showPopup}},[a("div",{staticClass:"fixed",class:t.isBg?"bg":"",on:{click:function(e){return e.stopPropagation(),t.goTop(e)}}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!t.isBg,expression:"!isBg"}],staticClass:"left",attrs:{src:s("J8MK"),alt:""},on:{click:function(e){return e.stopPropagation(),t.$router.go(-1)}}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.isBg,expression:"isBg"}],staticClass:"left",attrs:{src:s("Rb/D"),alt:""},on:{click:function(e){return e.stopPropagation(),t.$router.go(-1)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isBg,expression:"isBg"}],staticClass:"pyq"},[t._v(t._s(t.nickName||t.userName))])]),t._v(" "),a("div",{staticClass:"myInfo"},[a("p",[t._v(t._s(t.userName))]),t._v(" "),a("img",{attrs:{src:t.avator,alt:""},on:{click:function(e){return e.stopPropagation(),t.goInfo(e)}}})])]),t._v(" "),t._l(t.friendsList,function(e,s){return a("div",{key:s,staticClass:"list",on:{click:function(e){t.nowIndex=null}}},[a("img",{staticClass:"avator",attrs:{src:e.avator},on:{click:function(a){return a.stopPropagation(),t.goUserInfo(e,s)}}}),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"name",on:{click:function(a){return a.stopPropagation(),t.goUserInfo(e,s)}}},[t._v(t._s(e.nickName||e.name||t.myName))]),t._v(" "),a("p",{staticClass:"say"},[t._v(t._s(e.say))]),t._v(" "),e.attached_image?a("p",{staticClass:"attached_image"},t._l(e.attached_image,function(s,i){return a("img",{class:e.attached_image.length>1?"styleImg":"",attrs:{src:s,alt:""},on:{click:function(s){return t.showImgs(e.attached_image,i)}}})}),0):t._e(),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(e.create_time))]),t._v(" "),a("span",{staticClass:"more",on:{click:function(e){return e.stopPropagation(),t.showMore(s)}}}),t._v(" "),a("ul",{staticClass:"moreList",class:s===t.nowIndex?"showMore":""},[t._m(0,!0),t._v(" "),t._m(1,!0)])])])}),t._v(" "),a("van-popup",{model:{value:t.isShowPop,callback:function(e){t.isShowPop=e},expression:"isShowPop"}},[t._v("赞这个相册封面")]),t._v(" "),a("van-image-preview",{attrs:{images:t.images,"show-index":!1,"show-indicators":!0,duration:.2,"start-position":t.nowImgindex},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("img",{attrs:{src:s("wP8P"),alt:""}}),this._v("\n\t\t\t\t\t赞\n\t\t\t\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("img",{attrs:{src:s("e1pu"),alt:""}}),this._v("\n\t\t\t\t\t评论\n\t\t\t\t")])}]};var m=s("VU/8")(o,n,!1,function(t){s("mX72")},"data-v-7fa251c5",null);e.default=m.exports},e1pu:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACR0lEQVR4Xu1Z4TkDQRB9rwJUgA6oABWgAlRAB+gg6YAKUAEqkA6kBKlgfC/uYr+VhF17udx3M39vb3fmzZuZ3Rmi58Ke2w8HwBnQcwQ8BHpOAE+CHgIeAj1HwEOg5wTIrwJmtgPgGsAJgM2WgPwA8AjgluQ4R4esEDCzQwAPLRoe2yogTkm+pIKQDEDl+bc1Mr62WSDspzIhB4A7AGcB0hMAo1TkC63fA7AR7HVP8jxl7xwA3gEo/msR6q0AYGYCQGysZUxyt2kALDjglaTyQWtiZor7g1oBkklOTVqsQ8zMAXAGfCPgIeA5wJOgVwEvg61dAr7Kst8D/CLkN0G/CvtbwB9DFQL+GvTnsPcDknocSYu9IeIdIW+JxT3B5C5syYeTmWkipa7wrEu9ijKoUdRxYIheYwMAGkyEMlnWLjez2e0tExQZfwUgfI4/kdSo7s+SkwR14PMfTxiSlJIzqbym/9XTLy1HqeOxZACqShBPh5YZskVyyo6GjU+eCkmnLAAqY24qCoajqXlAXJC8a9B4jeYGJKVPsmQDEHhUVA7jULF5GWgyjUszU7KKaT+ckztSjFD+GdUMS/mxXvsvABYdaGaa1W8H3xUy8dBSM/0sr+UYuuifpgBQVQhZEJ+fFa8lDW+aAfHUNtR9bYz/VxL8zRtmpswfJ8i1Mr5pAOJSuXbGNw2ArqfK0kqGPy5EvzFoVd8bSYKrUr7EOQ5ACRS7vIczoMveK6G7M6AEil3ewxnQZe+V0N0ZUALFLu/hDOiy90ro/glX/0JQAEQyAwAAAABJRU5ErkJggg=="},mX72:function(t,e){},wP8P:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEGElEQVR4Xu1Z7XEUMQyVKiBUAKkAUgGhAqACQgUkFZBUQKgAUgGkAkIFJBUQKgAqEPOCzBifvJa96z3mdj1zfxLZKz09fVhmWvjihdtPKwArAxaOwBoCCyfAmgTXEFhDYOEIrCGwcAKsVWCyEBCRx0T0hIieJ6y6JiL8Lpn5p4dxIrJHRM+ICGfiF68rPQtnjl6jARCRQyJ6T0QPHdp8IqITZr61ZEUEZ7w1QLTEcQbOwpnNqxkA9RIMTz3uUeaUmc9iQRF5Q0Snns0GI1542ZWe3wSAGv/ZoGeN/qDwU93QCmT4Hs4CCCazhpSqBsBh/KXGPL6LWEaIPMooEeI4jfMgfkNEiPmQOyCH8+4Z590BWsuEFgDOieh1osAvIsLfzy0FNLZB75dOilwgHCyPqgOOiQi/FIgLZj5yfuNOrAoANeSbYfwhMxezsoggX3zIeBDHAsgjT2LTqgN2pCCABfi7a9UCAOVTLx54jA/aqOJfM9q9YmZ8w7UyZ6HcuhNzLQA/NK6DgtWUw0YRQTgg68frHTOD1lVLRDacwsxuu9yCWu+R+eNV5f2IBUiOqbEfWrJ4hgXuMKgBAAqjSfm7apCucmulsIig/D2Itp0xs6unqAEgpe0XZkZJ2voSESQ9tOFhzQLANTMfbN36PzllFgBQX9Gx/Y8hIIkjcEdAX1JcNSEAuqdJcL8lcRW1qhDI9CZdkiAyN8pgvJpKV4V9RdFMSb3vbYndDIAmIoKrJ+7pYd0y835Ry44CIoLONL6Kd22ENvIAEbkz7tQ4iMhGaSaiqm6yigHKgrTm4qaGhqj6KjoGEL0UwfsIzbC+44rupT82tQBgseCKmcPdfoxd7r0i8tEYxlR5vwkAZUFad/Hn2UIhQ/0bZs7NFbLAVjNAAcCHrKsopjKjZnQlCmTuJNjWdC9pAkBBsEIB+QA1uDgbKBlq/V8vPuhF4riHqLvxSc9tBkBBsOYDXUAYML6q7E0NADyBUEhnfpOCoBkfQ5R09I6ZIaZRrvcGi1WjGKAs6AqCeh4Zf3Ljm6tAiqT244j7dD43igkDtMfs0DWHLOWa0QwIHxgYUjaBMIfxkzFgahDmMn5yAAo9ApiAPmFwZD2n8V0AiEBAQxTP6QJRsu2qiKC3wNwxrfOTxfykZXAowWjpskoktm2AoMb/M3HS80eXuiE9J0uCmc4tVyIhjme0E2UMntqsEVZX47uFQAxGgQnhFch6z+tu/CwARM0SPFzzOHo8psMr1f/w/64hYDRM1t0hFWt6bvMaPFsSzCkkItbzehCf1fjZQsBggnWVrp7mtHo93jdrCCTJMQZhK8ZvjQFR64zHlr3eU6St9QFTULT3GVsLgd6Gec9fAfAitatyKwN21bNeu1YGeJHaVbmVAbvqWa9dvwF2raNQMlU+BwAAAABJRU5ErkJggg=="},yRQG:function(t,e){t.exports={data:[{name:"白展堂",nickName:"武林外传-白展堂",wechatNum:"A1-112233",area:"七侠镇",sex:"男",avator:"https://f12.baidu.com/it/u=2194439150,3295143257&fm=173&app=49&f=JPEG?w=640&h=966&s=D77014C7100B3EFC52A9E0B303001049&access=215967316",say:"演技派？！说我是演技派？！！这不是骂人嘛！！！我是偶像派的！！！",attached_image:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563182180560&di=4d187a6c6dbf69d0c0578621578b281b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F24%2F20170824221120_wFnHt.jpeg"],create_time:"刚刚"},{avator:"http://img2.imgtn.bdimg.com/it/u=3363472252,3522967664&fm=26&gp=0.jpg",say:"从来不跌倒不算光彩，每次跌倒后能再站起来，才是最大的荣耀。",attached_image:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567676454322&di=fbef3f571ccfec83a9cc0ad41f923d4d&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20160331%2Ftooopen_sy_157948668912.jpg"],create_time:"2分钟前"},{name:"佟湘玉",nickName:"武林外传-佟湘玉",wechatNum:"A2-223344",area:"七侠镇",sex:"女",avator:"https://f12.baidu.com/it/u=3738454361,32927518&fm=173&app=49&f=JPEG?w=640&h=964&s=DFB004C6C013ABD4446DF8B103003002&access=215967316",say:"同福客栈，你梦中的豪华港湾（快速）本店正在推出月末大酬宾活动，凭贵宾金卡可以享受八至五折优惠，具体事宜请来人来函，以及来而无往非礼也之洽谈。",attached_image:["https://f11.baidu.com/it/u=1634501506,4225364451&fm=173&app=49&f=JPEG?w=640&h=384&s=2280B945C6C9294D4C95E9B90300A013&access=215967316","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563185536702&di=3b13c0f0f996bfb73d61b1c8e9bc146d&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fbmiddle%2F4c063903t53cb679186a2","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563182697074&di=115f6227620d833a4e58cbf2a5bce5f7&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2FGCXtlp%3DgNKvayZXQD0g3DZmk%3D3StCPr6%3DBwtC33bkpN4Y1549593680564.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563182743562&di=4791df335dc0abc951795f7cac43717d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190208%2F9e18e5392d234fcca8a96ddcee4d90e2.jpeg","https://f11.baidu.com/it/u=3625114156,1836835356&fm=173&app=49&f=JPEG?w=640&h=425&s=FE1A0CC7D4F397D01426ED2C0300B059&access=215967316","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563182575374&di=917d96a7e3aa621d2723f20bf1500ca3&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw627h423%2F20180211%2Fbeb8-fyrkuxt6058229.jpg"],create_time:"3分钟前"},{name:"李秀莲",nickName:"武林外传-李大嘴",wechatNum:"A6-456456",area:"七侠镇",sex:"男",avator:"https://f12.baidu.com/it/u=2353674779,2123082453&fm=173&app=49&f=JPEG?w=510&h=768&s=B61814CF8443B15D4025FCAB03007013&access=215967316",say:"自从在同福客栈见了你，就像那春风吹进心窝里，我要轻轻地告诉你，不要把我忘记",attached_image:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563183509862&di=27e10f156b12cf086fe5d9a83055df0b&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160113%2Fmp54234979_1452650407456_17.gif"],create_time:"10分钟前"},{name:"郭芙蓉",nickName:"武林外传-郭芙蓉",wechatNum:"A3-556677",area:"七侠镇",sex:"女",avator:"https://f11.baidu.com/it/u=1466336011,2521607316&fm=173&app=49&f=JPEG?w=510&h=768&s=F660D54ECC38AE5552E224320300D052&access=215967316",attached_image:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563778461&di=d3af9199cdbfc4c928a41bea1095631f&imgtype=jpg&er=1&src=http%3A%2F%2Fpinglun.youth.cn%2Fhlyh%2F201102%2FW020110223505283167426.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563183776108&di=f44042ed48df9b53965310d1c2a4861d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F24%2F20170124205248_ehBCW.gif","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3463488074,3385413726&fm=26&gp=0.jpg"],say:"世界如此美妙，我却如此暴躁，这样不好，不好！",create_time:"12分钟前"},{name:"吕轻侯——关中大侠",nickName:"武林外传-吕轻侯",wechatNum:"A4-889900",area:"七侠镇",sex:"男",avator:"https://f11.baidu.com/it/u=946456372,829316578&fm=173&app=49&f=JPEG?w=510&h=768&s=B73455CF845291D4D4AC6C3B03008013&access=215967316",say:"天生我才必有有用，千金难买爷高兴~~",attached_image:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563185096907&di=82962d0543055180de5161634a15e6b9&imgtype=0&src=http%3A%2F%2Fwww.lovehhy.net%2Flib%2Fimg%2F8492294%2F1242980_1621359621.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563780061&di=81e9326f3b2aedbb96e587ac3e8cb5ad&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F06%2F20170806131329_rGutR.thumb.700_0.jpeg"],create_time:"1小时前"},{name:"alive 爱默生",say:"生活赋予我们一种巨大的和无限高贵的礼品，这就是青春：充满着力量，充满着期待志愿，充满着求知和斗争的志向，充满着希望信心和青春。",create_time:"5小时前",wechatNum:"A13-555666",area:"印度",sex:"男",avator:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561442615598&di=10b5dd78ee1836106506a82638423a9e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fcd56ca327c1354f49585f1f7935e388782202d61d5f2b-TH2AiZ_fw658"},{name:"斯里兰卡",say:"世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。",create_time:"昨天",wechatNum:"A11-111222",nickName:"名人-斯里兰卡",area:"印度",sex:"男",avator:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3762095652,4288929885&fm=26&gp=0.jpg"},{name:"约翰·洛克",say:"人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。",create_time:"昨天",wechatNum:"A12-333444",nickName:"名人-洛克",area:"英国",sex:"男",avator:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561442615600&di=ea7581291a951a19a166b1e8ad0fbc6d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fsoft%2F6%2F571%2FcepyVKtIjudo6.jpg"}]}}});
//# sourceMappingURL=9.5c0031af0a1146e7b978.js.map