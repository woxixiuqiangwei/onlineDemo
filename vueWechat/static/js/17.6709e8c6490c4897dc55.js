webpackJsonp([17],{"1rN3":function(t,a){t.exports={data:[{letter:"A",list:[{name:"艾尔·霍福德",wechatNum:"Al Horford",area:"多米尼加共和国",avator:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3460168533,1868340771&fm=26&gp=0.jpg"},{name:"安东尼·戴维斯",wechatNum:"Anthony Davis",area:"美国 伊利诺伊州 芝加哥",avator:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561108922451&di=6f4e28dfcd2fd61f68dce202e6c4d376&imgtype=0&src=http%3A%2F%2Fimg.xinxic.com%2Fimg%2Fe11edfd130c3d5b3.jpg"}]},{letter:"B",list:[{name:"本·西蒙斯",wechatNum:"Ben Simmons",area:"澳大利亚 墨尔本",avator:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561108866355&di=67f20843f3f6a84982c33df91957a0d0&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160613%2Fee6fe79971c14b78839d4322a486f520_th.jpg"},{name:"布雷克·格里芬",wechatNum:"Blake Griffin",area:"美国 俄克拉何马州 俄克拉荷马城",avator:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561108922453&di=53ee1f8a77f8ed391e0399ccc07cf8c1&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180802%2F01%2F1533143125-gQhFCIlHcM.jpg"}]},{letter:"D",list:[{name:"德马库斯·考辛斯",wechatNum:"DeMarcus Cousins",area:"美国 阿拉巴马州 莫比尔",avator:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2396606254,1392918776&fm=26&gp=0.jpg"}]},{letter:"G",list:[{name:"戈登·海沃德",wechatNum:"Gordon Hayward",area:"美国 印第安纳州 印第安纳波利斯",avator:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561109599608&di=2344965de9b5534ef66e40b2ccd2e272&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2018%2F04%2F240950148406.jpg"}]},{letter:"J",list:[{name:"加里·克拉克",wechatNum:"Gary Clark",area:"美国 北卡罗来纳州 克莱顿",avator:"~img/images/addressBook/user1.jpg"}]}]}},ScrI:function(t,a){},qCxR:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("kItg"),i=(s("1rN3"),{name:"addressBook",data:function(){return{addressBookTop:0,friends:"",indexList:["↑","☆","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"]}},methods:{goTop:function(){document.documentElement.scrollTop=document.body.scrollTop=0},closeHeaderPop:function(){this.$refs.weHeader.isShow=!1},demo:function(){return this.timeOutEvent=setTimeout(function(){console.log(1)},500),!1},touchEnd:function(){return clearTimeout(this.timeOutEvent),!1}},mounted:function(){for(var t=this,a=document.querySelectorAll(".adBook-user"),s=0;s<a.length;s++)a[s].onclick=function(){if(!t.$refs.weHeader.isShow){var a=this.children[1].innerHTML,s=this.getAttribute("wechatNum"),e=this.getAttribute("area"),i=this.children[0].getAttribute("src"),c=this.children[1].getAttribute("realName"),r=this.children[1].getAttribute("say"),o=this.children[1].getAttribute("chatTime"),d=this.children[1].getAttribute("sex");sessionStorage.setItem("nowChatNum",s),e&&sessionStorage.setItem("nowUserArea",e),r&&sessionStorage.setItem("nowCuserSay",r),c?(sessionStorage.setItem("nowChatUser",c),sessionStorage.setItem("nowChatNickname",a)):sessionStorage.setItem("nowChatUser",a),o&&sessionStorage.setItem("nowChatTime",o),sessionStorage.setItem("nowUserAvator",i),sessionStorage.setItem("nowUserSex",d),t.$router.push("userInfo")}}},activated:function(){this.closeHeaderPop(),document.documentElement.scrollTop=document.body.scrollTop=this.addressTop},beforeRouteEnter:function(t,a,s){"addressBook"===t.name?(sessionStorage.removeItem("nowChatUser"),sessionStorage.removeItem("nowUserAvator"),sessionStorage.removeItem("nowUserArea"),sessionStorage.removeItem("nowCuserSay"),sessionStorage.removeItem("nowChatNickname"),sessionStorage.removeItem("nowChatNum"),sessionStorage.removeItem("nowChatTime"),sessionStorage.removeItem("nowUserSex"),s()):s()},beforeRouteLeave:function(t,a,s){var e=this;this.addressTop=document.documentElement.scrollTop||document.body.scrollTop,this.$refs.weHeader.isShow?(this.closeHeaderPop(),setTimeout(function(){document.documentElement.scrollTop=document.body.scrollTop=e.addressTop,s(!1)})):s()},components:{weHeader:e.a}}),c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"addressBook"},on:{click:t.closeHeaderPop,touchmove:function(a){return t.$refs.weHeader.isShow&&a.preventDefault()}}},[s("van-index-bar",{attrs:{"index-list":t.indexList}},[s("van-index-anchor",{staticClass:"none",attrs:{index:"↑"},nativeOn:{click:function(a){return t.goTop(a)}}}),t._v(" "),s("we-header",{ref:"weHeader",attrs:{title:"通讯录"}}),t._v(" "),s("ul",{staticClass:"addressTop"},[s("li",{on:{click:function(a){return t.$router.push("/newFriends")}}},[s("span",{staticClass:"newFriend"}),t._v(" "),s("div",[t._v("新的朋友")])]),t._v(" "),s("li",{on:{click:function(a){return t.$router.push("/groupChat")}}},[s("span",{staticClass:"users"}),t._v(" "),s("div",[t._v("群聊")])]),t._v(" "),s("li",{on:{click:function(a){return t.$router.push("/label")}}},[s("span",{staticClass:"label"}),t._v(" "),s("div",[t._v("标签")])]),t._v(" "),s("li",{on:{click:function(a){return t.$router.push("/publicNum")}}},[s("span",{staticClass:"publicNum"}),t._v(" "),s("div",[t._v("公众号")])])]),t._v(" "),s("van-index-anchor",{staticClass:"none",attrs:{index:"☆"}}),t._v(" "),s("van-index-anchor",{attrs:{index:"A"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 波士顿",wechatNum:"A13-123456"}},[s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561442615598&di=10b5dd78ee1836106506a82638423a9e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fcd56ca327c1354f49585f1f7935e388782202d61d5f2b-TH2AiZ_fw658",alt:""}}),t._v(" "),s("p",{attrs:{say:"1.~/生活赋予我们一种巨大的和无限高贵的礼品，这就是青春：充满着力量，充满着期待志愿，充满着求知和斗争的志向，充满着希望信心和青春。",chatTime:"2018年1月1日 10:21",sex:"男"}},[t._v("alive 爱默生")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"多米尼加共和国",wechatNum:"Al Horford"}},[s("img",{attrs:{src:"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=309434434fa98226accc2375ebebd264/cb8065380cd791234c8d2242a1345982b2b78093.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("艾尔·霍福德")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"美国 伊利诺伊州 芝加哥",wechatNum:"Anthony Davis"}},[s("img",{attrs:{src:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=14f1887564061d95694b3f6a1a9d61b4/e4dde71190ef76c61a1f0a669716fdfaae5167aa.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("安东尼·戴维斯")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"B"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"澳大利亚 墨尔本",wechatNum:"Ben Simmons"}},[s("img",{attrs:{src:"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=a8d661b060600c33e474d69a7b253a6a/5243fbf2b211931373cb5d146e380cd790238d8e.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("本·西蒙斯")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"美国 俄克拉何马州 俄克拉荷马城",wechatNum:"Blake Griffin"}},[s("img",{attrs:{src:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=99977eaef71f4134f43a0d2c4476feaf/b999a9014c086e06221cdc0608087bf40bd1cbc3.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("布雷克·格里芬")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"D"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 阿拉巴马州 莫比尔",wechatNum:"DeMarcus Cousins"}},[s("img",{attrs:{src:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=adff00c9de88d43fe4a499a01c77b97e/43a7d933c895d143fcb7439f7bf082025baf074c.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("德马库斯·考辛斯")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"美国",wechatNum:"D_Jorden"}},[s("img",{attrs:{src:"https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=c824e3e6093b5bb5aada28ac57babe5c/c83d70cf3bc79f3d18cc067db0a1cd11728b294a.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("德安德烈·乔丹")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"G"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 印第安纳州 印第安纳波利斯",wechatNum:"Gordon Hayward"}},[s("img",{attrs:{src:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=57c7ad28b5389b502cf2e800e45c8eb8/ac4bd11373f082023bb9260947fbfbedab641bd8.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("戈登·海沃德")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"美国 路易斯安那州 哈维",wechatNum:"Greg Monroe"}},[s("img",{attrs:{src:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=16295757bf4543a9e116f29e7f7ee1e7/b17eca8065380cd734132b4ea944ad3459828100.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("格雷格·门罗")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"J"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"加拿大 安大略省 基奇纳",wechatNum:"Jamal Murray"}},[s("img",{attrs:{src:"https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=446516b49fdda144ce0464e0d3debbc7/0ff41bd5ad6eddc41968065c31dbb6fd5366338d.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("贾马尔·穆雷")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"K"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 华盛顿 哥伦比亚特区",wechatNum:"Kevin Durant"}},[s("img",{attrs:{src:"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=d1e9334de2c4b7452099bf44ae957572/11385343fbf2b21148af302ac38065380dd78ed5.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("凯文·杜兰特")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"美国 加利福尼亚州 河边市 ",wechatNum:"Kawhi Leonard"}},[s("img",{attrs:{src:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=0c808e495382b2b7b392319650c4a08a/dcc451da81cb39db1b39711bda160924aa183085.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("科怀·伦纳德")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"L"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 俄亥俄州 阿克伦",wechatNum:"LeBron James"}},[s("img",{attrs:{src:"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7712abf8e8cd7b89fd6132d16e4d29c2/1b4c510fd9f9d72ac34cbb2fda2a2834349bbbdc.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("勒布朗·詹姆斯")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"美国 加利福尼亚州 长滩",wechatNum:"Russell Westbrook"}},[s("img",{attrs:{src:"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=b4753f23b0315c60579863bdecd8a076/b8014a90f603738dfdfc9f14bf1bb051f819ec56.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("拉塞尔·维斯布鲁克")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"M"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 印第安纳州 印第安纳波利斯",wechatNum:"Mike Conley"}},[s("img",{attrs:{src:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3980593605,1315443819&fm=58",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("迈克·康利")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"美国 宾夕法尼亚州 费城",wechatNum:"Markieff Morris"}},[s("img",{attrs:{src:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D50%2C0%2C539%2C356%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=0311c99911d8bc3ed2475c8abfbe9632/6609c93d70cf3bc7f0adb14fd900baa1cc112ae7.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("马基夫·莫里斯")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"印度",wechatNum:"A11-123456"}},[s("img",{attrs:{src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3762095652,4288929885&fm=26&gp=0.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男",realName:"斯里兰卡",say:"世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。",chatTime:"5月13日 19:21"}},[t._v("名人-斯里兰卡")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"英国",wechatNum:"A11-123456"}},[s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561442615600&di=ea7581291a951a19a166b1e8ad0fbc6d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fsoft%2F6%2F571%2FcepyVKtIjudo6.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男",realName:"约翰·洛克",say:"1.~/人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。",chatTime:"5月13日 19:21"}},[t._v("名人-洛克")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"N"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"塞尔维 亚松博尔",wechatNum:"Nikola Jokic"}},[s("img",{attrs:{src:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1214087979,4229679237&fm=58",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("尼古拉·约基奇")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"美国 马萨诸塞州 黑弗里尔",wechatNum:"Noah Vonleh"}},[s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562652509&di=89e91937f9b4ae005fa6e734b8ce5246&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Fsports%2Fpics%2Fhv1%2F19%2F27%2F1637%2F106452829.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("诺阿·冯莱")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"O"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 密苏里州 圣路易斯",wechatNum:"Otto Porter"}},[s("img",{attrs:{src:"https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=17e3a35043540923be646b2cf331ba6c/b21bb051f8198618ac28b2f740ed2e738bd4e652.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("奥托·波特")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"英国 伦敦",wechatNum:"OG Anunoby"}},[s("img",{attrs:{src:"https://cms-bucket.nosdn.127.net/sports/basketball/nba/player/1000000118.jpg?imageView&quality=100&thumbnail=65y85",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("OG·阿奴诺比")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"P"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 密苏里州 圣路易斯",wechatNum:"Patrick McCaw"}},[s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562057817502&di=20c2ce3c30d5a99677909b37a7325244&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20190528%2F20190528185643_b7882553351257e015a00847a1577b6a_2_mwpm_03201609.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("帕特里克·麦考")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"Q"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 华盛顿州 奇兰",wechatNum:"Joe Harris"}},[s("img",{attrs:{src:"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=01f7130fd7f9d72a0369184fb5434351/64380cd7912397ddbaffef345782b2b7d0a2877f.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("乔·哈里斯")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"美国 马里兰州 海厄茨维尔",wechatNum:"Quinn Cook"}},[s("img",{attrs:{src:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=30ba4b6fad44ad343ab28fd5b1cb6791/d4628535e5dde7113176aa74abefce1b9c166188.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("奎因·库克")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"R"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"中国 上海",wechatNum:"wxid_qa5sd2314sdaw1sd"}},[s("img",{attrs:{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1265953457,2908351700&fm=26&gp=0.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"女"}},[t._v("Ross Tallnama")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"S"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 新泽西 内瓦克",wechatNum:"Shaquille O'Neal"}},[s("img",{attrs:{src:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=cdf2c77911d5ad6ebef46cb8e0a252be/83025aafa40f4bfbe40462e9094f78f0f63618b2.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("沙奎尔·奥尼尔")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"T"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"中国 北京",wechatNum:"ph_sunshine"}},[s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562744747&di=108416fd0940e8481f857b122c2fecda&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F27%2F20150727102707_PNjcL.thumb.700_0.jpeg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"女"}},[t._v("T1")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"W"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 马里兰州 上马尔伯勒",wechatNum:"Victor Oladipo"}},[s("img",{attrs:{src:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C5%2C750%2C495%3Bc0%3Dbaike92%2C5%2C5%2C92%2C30/sign=ac14dca45182b2b7b3d063840c9de7da/b8389b504fc2d5628865944def1190ef76c66c24.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("维克多·奥拉迪波")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"Y"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"中国 上海市 徐汇区",wechatNum:"Yao Ming"}},[s("img",{attrs:{src:"https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=6a9d2b2782d4b31ce4319ce9e6bf4c1a/622762d0f703918f809c0dae583d269759eec400.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("姚明")])]),t._v(" "),s("div",{staticClass:"adBook-user",attrs:{area:"希腊 雅典",wechatNum:"Giannis Antetokounmpo"}},[s("img",{attrs:{src:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2662246967,1705979247&fm=58",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("扬尼斯·阿德托昆博")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"Z"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"美国 华盛顿州 博塞尔",wechatNum:"Zach LaVine"}},[s("img",{attrs:{src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2455025698,699907600&fm=58",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("扎克·拉文")])])]),t._v(" "),s("van-index-anchor",{attrs:{index:"#"}}),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{wechatNum:"wxid_qa5sd23b4sdaw1sd"}},[s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562744767&di=2ef9cb3b663810cb089479371ac2aff8&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F17%2F20151017131527_RPsiB.thumb.700_0.jpeg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"女"}},[t._v("12345")])])]),t._v(" "),s("div",[s("div",{staticClass:"adBook-user",attrs:{area:"浙江 温州",wechatNum:"wxid_qa5sd23123sa21a"}},[s("img",{attrs:{src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1567404097&di=0baf34ae24908e8a48294b06cff8a96d&src=http://img.sccnn.com/bimg/337/23662.jpg",alt:""}}),t._v(" "),s("p",{attrs:{sex:"男"}},[t._v("∥★●■")])])]),t._v(" "),s("p",{staticClass:"userCount"},[t._v("43位联系人")])],1)],1)},staticRenderFns:[]};var r=s("VU/8")(i,c,!1,function(t){s("ScrI")},"data-v-00930aa1",null);a.default=r.exports}});
//# sourceMappingURL=17.6709e8c6490c4897dc55.js.map