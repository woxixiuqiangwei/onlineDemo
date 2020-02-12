// new Vue({
	// 	el:'.spike_wrapper',
	// 	data:{
	// 		demo:spikeData.data
	// 	}
	// })
	// ————————————————————————————————————————————
	let bannerDataStr='';
	bannerData.forEach(function(val){
		bannerDataStr+=`
			<div class="swiper-slide">
				<img src="${val.src}" alt="">
			</div>
		`
	});
	$('.swiper1 .swiper-wrapper').html(bannerDataStr);

	let supermarketStr='';
	for(let i=0;i<supermarketData.length;i++){
		supermarketStr+=`
		<div class="swiper-slide">
			<ul class='list_box'>`;
			for(let j=0;j<supermarketData[i].page.length;j++){
				supermarketStr+=`
				<li>
					<a href="">
						<img src="${supermarketData[i].page[j].src}" alt="">
						<span>${supermarketData[i].page[j].title}</span>
					</a>
				</li>`
			}			
		supermarketStr+=`	
			</ul>
		</div>`;		 	
	}
	$('.swiper2 .swiper-wrapper').html(supermarketStr);

	let spikeDataStr='';
	for(let i=0;i<spikeData.data.length;i++){
		spikeDataStr+=`
		<div class="swiper-slide">
		<ul>`;
		for(let j=0;j<spikeData.data[i].list.length;j++){
			spikeDataStr+=`
			<li>
			<img src="${spikeData.data[i].list[j].img}" alt="">
			<span class="price">
			<i>¥</i>${spikeData.data[i].list[j].price}
			</span>
			<span class="old_price">
			<i>¥</i>${spikeData.data[i].list[j].old_price}
			</span>
			</li>`
		}			
		spikeDataStr+=`	</ul>
		</div>`;		 	
	}
	$('.spike_swiper .swiper-wrapper').html(spikeDataStr);
	// ————————————————————————————————————————————
	// let result={};
	// for(let i=1;i<=spikeData.count;i++){
	// 	result['spikeData'+i]="";
	// 	result['spikeData'+i]+=`
	// 		<div class="swiper-slide">
	// 			<ul>`;
	// 	spikeData['data'+i].forEach((val,index)=>{
	// 		result['spikeData'+i]+=`
	// 		<li>
	// 			<img src="${val.img}" alt="">
	// 			<span class="price">
	// 				<i>¥</i>${val.price}
	// 			</span>
	// 			<span class="old_price">
	// 				<i>¥</i>${val.old_price}
	// 			</span>
	// 		</li>`;		 		
	// 	})
	// 	result['spikeData'+i]+=`	
	// 			</ul>
	//  		</div>`;	
	// }	
	// let r=result['spikeData'+1]+result['spikeData'+2];
	// $('.spike_swiper .swiper-wrapper').html(r);
	// for(let i=1;i<=spikeData.count;i++){
	// 	$('.spike_swiper .swiper-slide:eq('+(i-1)+') ul').html(result['spikeData'+(i)]);
	// }

	


	document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
	window.onresize=()=>{
		document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
	}
	var mySwiper = new Swiper ('.swiper1', {
	    loop: true, // 循环模式选项
	    // 如果需要分页器
	    pagination: {
	    	el: '.swiper-pagination',
	    	clickable :true,
	    	
	    },
	    autoplay: {
	    	delay: 2000,
	    	stopOnLastSlide: true,
	    	disableOnInteraction: false,
	    }
	}) 
	var mySwiper2 = new Swiper ('.swiper2', {
	    loop: true, // 循环模式选项
	    // 如果需要分页器
	    pagination: {
	    	el: '.swiper-pagination',
	    	clickable :true,
	    	
	    }
	}) 
	var spike_swiper = new Swiper ('.spike_swiper', {
	    loop: true, // 循环模式选项
	    // 如果需要分页器
	    pagination: {
	    	el: '.swiper-pagination',
	    	clickable :true,
	    	
	    }
	}) 
	$(document).scroll(function(){
		var scrollTop=$(this).scrollTop();
		if(scrollTop>150){
			$('header').addClass('bgColor');
		}
		else{
			$('header').removeClass('bgColor');
		}
		
	})