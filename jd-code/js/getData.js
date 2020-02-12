// 	各个函数内应该是调对应的接口得到返回的数据，在某个时刻执行对应的函数
function get_banner_JSONData(){
	let {data}=banner_JSONData;
	let str='';
	for(let i=0;i<data.length;i++){
		let item=data[i];
		str+=`
			<div class="swiper-slide">
				<a href="">
					<img src="${item.img}" alt="">
				</a>
			</div>
		`;
	}
	$('.banner_mid .swiper1 .swiper-wrapper').html(str);
}
get_banner_JSONData();

function get_menuList_JSONData(){
	let {data}=menuList_JSONData;
	let str='';
	for(let i=0;i<data.length;i++){
		let item=data[i];
		if(item.id==1 || item.id==2){
			str+=`
			<li>
				<a href="${item.href}" class='colorRed fontBold'>${item.name}</a>
			</li>`;
		}
		else{
			str+=`
			<li>
				<a href="${item.href}">${item.name}</a>
			</li>`;
		}
		
	}
	$('#logo .searchBar_bottom>ul').html(str);
}
get_menuList_JSONData();

function get_category_JSONData(){
	let {data}=category_JSONData;
	let str='';
	for(let i=0;i<data.length;i++){
		let item=data[i];
		str+=`
			<li>
				<a href="">${item.title}</a>
				<div class="cate_pop">
					<div class="cate_pop_left">
						<ul class="cate_item">`;
					for(let j=0;j<item.subTitle.length;j++){
						let val=item.subTitle[j];
						str+=`
							<li>
								<a href="">
									${val}&nbsp;
									<i class='fa fa-angle-right'></i>
								</a>
							</li>
						`;
					}
					str+=`</ul>`;
		for(let j=0;j<item.list.length;j++){
			let val=item.list[j];
			str+=`<div class="itemBox">
					<div>
						<a href="">
							${val.title}&nbsp;
							<i class='fa fa-angle-right'></i>
						</a>`;
						str+='<ul>';
				for(let k=0;k<val.item.length;k++){
					let value=val.item[k];
					str+=`
						<li>
							<a href="">${value.itemName}</a>
						</li>`;
				}
				str+='</ul>';
				str+=`
					</div>
				</div>`;					
		}
				str+='</div>';
				str+=`
									<div class="cate_pop_right">
										<div>
											<a href="">
												<img src="https://img12.360buyimg.com/vclist/s83x35_jfs/t1/59149/30/6380/3749/5d438e05Eaf28a961/15d67b12d4cf885d.jpg.webp" alt="">
											</a>
											<a href="">
												<img src="https://img30.360buyimg.com/vclist/s83x35_jfs/t1/45878/3/6652/15329/5d438e3dEae78d499/30b140b7cfc8013f.jpg.webp" alt="">
											</a>
											<a href="">
												<img src="https://img12.360buyimg.com/vclist/s83x35_jfs/t1/59149/30/6380/3749/5d438e05Eaf28a961/15d67b12d4cf885d.jpg.webp" alt="">
											</a>
											<a href="">
												<img src="https://img30.360buyimg.com/vclist/s83x35_jfs/t1/45878/3/6652/15329/5d438e3dEae78d499/30b140b7cfc8013f.jpg.webp" alt="">
											</a>
											<a href="">
												<img src="https://img12.360buyimg.com/vclist/s83x35_jfs/t1/59149/30/6380/3749/5d438e05Eaf28a961/15d67b12d4cf885d.jpg.webp" alt="">
											</a>
											<a href="">
												<img src="https://img30.360buyimg.com/vclist/s83x35_jfs/t1/45878/3/6652/15329/5d438e3dEae78d499/30b140b7cfc8013f.jpg.webp" alt="">
											</a>
											<a href="">
												<img src="https://img12.360buyimg.com/vclist/s83x35_jfs/t1/59149/30/6380/3749/5d438e05Eaf28a961/15d67b12d4cf885d.jpg.webp" alt="">
											</a>
											<a href="">
												<img src="https://img30.360buyimg.com/vclist/s83x35_jfs/t1/45878/3/6652/15329/5d438e3dEae78d499/30b140b7cfc8013f.jpg.webp" alt="">
											</a>
										</div>
										<div>
											<a href="">
												<img src="https://img10.360buyimg.com/vclist/s168x134_jfs/t1/54866/8/13832/14402/5da6844aEc38d088b/b020f050d636c7da.jpg.webp" alt="">
											</a>
											<a href="">
												<img src="https://img10.360buyimg.com/vclist/s168x134_jfs/t1/54866/8/13832/14402/5da6844aEc38d088b/b020f050d636c7da.jpg.webp" alt="">
											</a>
										</div>
									</div>
				`;
			str+='</div>';
		str+='</li>';
	}
	$('#banner .banner_left>ul').html(str);
}
get_category_JSONData();

function get_spike_JSONData(){
	let {data}=spike_JSONData;
	let str='';
	for(let i=0;i<data.length;i++){
		str+=`
		<div class="swiper-slide">`;
			for(let j=0;j<data[i].list.length;j++){
				let item=data[i].list[j];
				str+=`
				<div class='list_item' title='${item.title}'>
					<img src="${item.img}" alt="">
					<h6 class='item_name' >${item.title}</h6>
					<div class="list_price">
						<span class="real_price">
							<i>¥</i>${item.realPrice}
						</span>
						<span class="old_price">
							<i>¥</i>${item.oldPrice}
						</span>
					</div>
				</div>`;
			}			
		str+=`	
		</div>`;		 	
	}
	$('#spike .swiper3 .swiper-wrapper').html(str);
}
get_spike_JSONData();

function get_activity_JSONData(){
	let {data}=activity_JSONData;
	let str='';
	for(let i=0;i<data.length;i++){
		let item=data[i];
		str+=`
		<a href="">
			<div class="lazyimg_loaded">
				<img src="${item.img}" alt="">
			</div>		
		</a>`;		 	
	}
	$('#activity_floor .activity_floor_skus').html(str);

	let {bottomData}=activity_JSONData;
	str='';
	for(let i=0;i<bottomData.length;i++){
		let item=bottomData[i];
		str+=`
		<a href="">
			<div class="lazyimg_loaded">
				<img src="${item.img}" alt="">
			</div>		
		</a>`;		 	
	}
	$('#activity_floor .activity_floor_bottom').html(str);
}
get_activity_JSONData();

function get_channels_JSONData(){
	let {data:{imgList}}=channels_JSONData;
	let str='';
	for(let i=0;i<imgList.length;i++){
		str+=`
		<div class="swiper-slide">
			<div class="bottom">`;
				if(imgList[i].bigImgList){
					str+=`
						<div class="big_img">
					`;
						for(let j=0;j<imgList[i].bigImgList.length;j++){
							let item=imgList[i].bigImgList[j];
							str+=`	<a href="">
										<img src="${item.img}" alt="">
									</a>`
						}	
					str+=`</div>`;
				}

				for(let j=0;j<imgList[i].list.length;j++){
					let item=imgList[i].list[j];
					str+=`
						<a href="">
							<div class='item_title'>
								<span class='item_title_main'>${item.imgTitle}</span>
								<span class='item_title_aside'>${item.imgDesc}</span>			
							</div>
							<div class="item_img">
								<img src="${item.img[0]}" alt="">
							</div>
							<div class="item_img">
								<img src="${item.img[1]}" alt="">
							</div>
						</a>
					`
				}	

		str+=`
			</div>		
		</div>`;		 	
	}
	$('#channels .channels_swiper .swiper-wrapper').html(str);
}
get_channels_JSONData();

//获取 为你推荐 数据 （json） 
$.get('./json/recommend_more_list.json',function(res){
		let str='';
		let no_marginRight='';
		let is_none;
		res.forEach((val,index)=>{				
			if((index+1) % 5==0){
				no_marginRight='no_marginRight';
			}
			else{
				no_marginRight='';
			}
			if(!val.price_plus){
				is_none='none';
			}
			else{
				is_none='';
			}
			str+=`
			<li class='more_item ${no_marginRight}'>
				<a href="" title='${val.name}'>
					<div class="more_img_box">
						<img src="${val.img}" alt="">
					</div>
					<div class="more_info">
						<p>
							<i class="more_info_self">自营</i>
							${val.name}
						</p>
						<span class="price">
							<i>¥</i>
							${val.price}
						</span>
						<span class="price_plus ${is_none} ${val.test}" >
							${val.price_plus}
						</span>
					</div>
					<div class="item_hover">
						<div class='item_hover_btn'>
							<i></i>
							<span title=''>
								<i class='fa fa-location-arrow'></i>
								找相似
							</span>
						</div>
						<span class='item_hover_close' title='不喜欢'>
							<i class='fa fa-close'></i>
						</span>
					</div>
				</a>
			</li>
			`
		})
		$('.more_inner>ul').html(str);
})

function get_footerTop_JSONData(){
	let {data}=footerTop_JSONData;
	let str='';
	for(let i=0;i<data.length;i++){
		let item=data[i];
		str+=`
			<li>
				<span class='footer_service_img'></span>
				<p>${item.title}</p>
			</li>`;
	} 
	$('footer .footer_top>ul').html(str);
}
get_footerTop_JSONData();

function get_footerMenu_JSONData(){
	let {data}=footerMenu_JSONData;
	let str='';
	for(let i=0;i<data.length;i++){
		let item=data[i];
		str+=`
			<div class="footer_help">
				<h5>${item.title}</h5>
				<ul class='help_list'>`;
		for(let j=0;j<item.list.length;j++){
			let val=item.list[j];
			str+=`	<li>
						<a href="">${val}</a>
					</li>`;
		}
		str+=`
			</ul>
		</div>`;
	}
	str+=`
			<div class="help_cover">
				<h5>京东自营覆盖区县</h5>	
				<p>
					京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。
				</p>
				<div class='help_go_details'>
					<a href="" class=''>
						查看详情 <i class='fa fa-angle-right'></i>
					</a>
				</div>	
			</div>`;
	$('footer .footer_middle').html(str);
}
get_footerMenu_JSONData();

function get_footerLink_JSONData(){
	let {data}=footerLink_JSONData;
	let str='';
	for(let i=0;i<data.length;i++){
		let item=data[i];
		str+=`
			<li>
				<a href="${item.href}">${item.title}</a>
			</li>
		`;
	}
	$('footer .footer_bottom>ul').html(str);
}
get_footerLink_JSONData()