
	$('.Suspension_img').hover(function(){
		$('#fade_img_cancel').prop({'checked':false});
	})
	// 浏览器滚动条事件
	$(document).scroll(function(){
		let a=$(this).scrollTop();
		let flag=0;
		if(a>=670){
			$('.searchBox_fix').slideDown();
		}
		else{
			$('.searchBox_fix').slideUp();
		}
		if(a>=688 && a<=956){
			$('.a_spike').css({'color':"red",'fontWeight':'bold'});
		}
		else{
			$('.a_spike').css({'color':"#333",'fontWeight':'normal'});
		}
		if(a>=960){
			$('.gotoTop').css({'display':'flex'});
			$('.gotoFankui>span').css({'display':'block'});			
		}
		else{
			$('.gotoTop').css({'display':'none'});
			$('.gotoFankui>span').css({'display':'none'});				
		}
		if(a>685){
			$('.elevator').addClass('fixed');
			if(flag===0){
				flag=1;
				$('.header_fixed').fadeIn();
			}					
		}
		else{
			$('.elevator').removeClass('fixed');
		}
		if(a>=960 && a<=1572){
			$('.elevator_img').find('img').attr('src','https://m.360buyimg.com/babel/jfs/t1/97131/8/8269/6715/5e02fbd8Ec6ff5eee/a379e58cf2e04385.png')
		}
		else{
			$('.elevator_img').find('img').attr('src','https://m.360buyimg.com/babel/jfs/t1/88294/34/8258/27978/5e02fbd5E31764eb9/366f8c47ba15dc8a.gif')
		}
		if(a>1572 && a<=2272){
			$('.a_characteristic').css({'color':"red",'fontWeight':'bold'});
		}
		else{
			$('.a_characteristic').css({'color':"#333",'fontWeight':'normal'});
		}
		if(a>2272 && a<=3128){
			$('.a_channel_gruond').css({'color':"red",'fontWeight':'bold'});
		}
		else{
			$('.a_channel_gruond').css({'color':"#333",'fontWeight':'normal'});
		}
		if(a>=3130){
			$('.a_recommend').css({'color':"red",'fontWeight':'bold'});
			$('.recommend_tab_wapper').addClass('fix');
			$('.elevator.fixed').css({'transform':'translateY(60px)'});
		}
		else{
			$('.a_recommend').css({'color':"#333",'fontWeight':'normal'});
			$('.recommend_tab_wapper').removeClass('fix');
			$('.elevator.fixed').css({'transform':'translateY(0)'});
		}
	}) 
	$('.elevator_img').hover(function(){
		$(this).find('img').attr('src','https://m.360buyimg.com/babel/jfs/t1/97131/8/8269/6715/5e02fbd8Ec6ff5eee/a379e58cf2e04385.png')
	},function(){
		$(this).find('img').attr('src','https://m.360buyimg.com/babel/jfs/t1/88294/34/8258/27978/5e02fbd5E31764eb9/366f8c47ba15dc8a.gif')
	})   

	// 排行榜tab切换
	function getRankData(list){
		for(let i=1;i<5;i++){
			$('.rank_NO'+i+'>img').prop('src',rankData[list][i-1].img);
												// rankData.data[index].list[i].img
			$('.rank_NO'+i+'>.item_name').text(rankData[list][i-1].name);
		}
	}
	$('.rank .title_list li:first-child>a').css({'color':'red'});
	getRankData("list1");
	$('.rank .title_list li').hover(function(){
		let num=$(this).index()+1;
		getRankData('list'+num);
		$(this).children('a').css({'color':'red'}).parent().siblings().children('a').css({'color':'#999'});
	})

	$('.gotoTop').click(()=>{
		let timer=null;
		let a=$(document).scrollTop();
		clearInterval(timer);	
		timer=setInterval(()=>{
			a-=83;
			if(a<=0){
				clearInterval(timer);
			}
			$(document).scrollTop(a);
		},10)
	})
	// document.oncontextmenu = ()=>{
	//     return false;
	// }
	// document.onselectstart = ()=>{
 //    	return false;
	// }



	$('.clickTop').click(function(e){
		let place=$(this).attr('place');	
		// let bodyScrollTop=document.documentElement.scrollTop;
		let scrollTop=$('#'+place).offset().top-60;
		$('html,body').animate({scrollTop: scrollTop}, 200);
		//document.documentElement.animate([
            //{ scrollTop: bodyScrollTop}, 
            //{ scrollTop: scrollTop }
        //], { 
            //duration: 200,
            //iterations: 1
        //});
		e.preventDefault();
	})