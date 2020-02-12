      
  var mySwiper = new Swiper ('.swiper-container', {
  
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    autoplay:true,
   
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        

  window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    var a=document.getElementsByClassName('a');
    if(scrollTop>80){
      header.classList.add('highLight');
      // a[0].style.display='none';
      // a[1].style.display='none';
    }
    else{
      header.classList.remove('highLight');
      // a[0].style.display='flex';
      // a[1].style.display='block';
    }
  }