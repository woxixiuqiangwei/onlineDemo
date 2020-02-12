		const mySwiper = new Swiper ('.swiper1', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: true, // 循环模式选项	
		    autoplay: {
		    	disableOnInteraction: false,
		    },
		    // 如果需要分页器
		    pagination: {
		    	el: '.swiper-pagination',
		    	clickable :true,
		    },	    
		    // 如果需要前进后退按钮
		    navigation: {
		    	nextEl: '.swiper-button-next',
		    	prevEl: '.swiper-button-prev',
		    },
		})  
		const mySwiper2 = new Swiper ('.swiper2', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: true, // 循环模式选项	
		    autoplay: {
		    	disableOnInteraction: false,
		    },
		    // 如果需要分页器
		    pagination: {
		    	el: '.swiper-pagination',
		    	clickable :true,
		    },	    
		    // // 如果需要前进后退按钮
		    navigation: {
		    	nextEl: '.swiper-button-next',
		    	prevEl: '.swiper-button-prev',
		    },
		})  
		const mySwiper3 = new Swiper ('.swiper3', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: true, // 循环模式选项	
		    autoplay: {
		    	disableOnInteraction: false,
		    },
		    // 如果需要分页器
		    // pagination: {
		    // 	el: '.swiper-pagination',
		    // 	clickable :true,
		    // },	    
		    // // 如果需要前进后退按钮
		    navigation: {
		    	nextEl: '.swiper-button-next',
		    	prevEl: '.swiper-button-prev',
		    },
		})  
		const mySwiper4 = new Swiper ('.swiper4', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: true, // 循环模式选项	
		    autoplay: {
		    	disableOnInteraction: false,
		    },
		    pagination: {
		    	el: '.swiper-pagination',
		    	clickable :true,
		    },
		})  
		const findSwiper = new Swiper ('.find_swiper', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: true, // 循环模式选项	
		    // autoplay: {
		    // 	disableOnInteraction: false,
		    // },
		    // 如果需要分页器
		    pagination: {
		    	el: '.swiper-pagination',
		    	clickable :true,
		    },	    
		    // // 如果需要前进后退按钮
		    navigation: {
		    	nextEl: '.swiper-button-next',
		    	prevEl: '.swiper-button-prev',
		    },
		}) 
		const channelSwiper = new Swiper ('.channels_swiper', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: true, // 循环模式选项		    
		    // // 如果需要前进后退按钮
		    navigation: {
		    	nextEl: '.swiper-button-next',
		    	prevEl: '.swiper-button-prev',
		    },
		}) 
		//鼠标滑过pagination控制swiper切换
		for(let i=0;i<mySwiper.pagination.bullets.length;i++){
			mySwiper.pagination.bullets[i].onmouseover=function(){
				this.click();
			};
		} 