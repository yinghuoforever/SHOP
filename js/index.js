/*
* @Author: Administrator
* @Date:   2018-08-23 00:14:59
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-25 20:21:43
*/


// 下拉菜单
$('.hello>li').hover(function() {
	$(this).children('ul').show()
}, function() {
	$(this).children('ul').hide()
});

// 图片轮播
var num=0;
var timer1;
function go(){
	num++;
	if(num>5){
		num=0;
	}
	$('#show_box').css('left',-1023*num+'px');
	$('#olist li').eq(num).addClass('current');
	$('#olist li').eq(num).siblings().removeClass('current')
}
function run(){
	timer1=setInterval(function(){
		go()
	},2000)
}
run()

$('#pic_show').hover(function() {
	clearInterval(timer1)
	$(this).children('span').show()
}, function() {
	run()
	$(this).children('span').hide()
});
$('ol li').click(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	num=$(this).index();
	$('#show_box').css('left',-1023*num+'px');
});
$('#pic_show span').eq(0).click(function(event) {
	num--;
	if(num<1){
		num=0;
	}
	$('#show_box').css('left',-1023*num+'px');
	$('#olist li').eq(num).addClass('current');
	$('#olist li').eq(num).siblings().removeClass('current')
});
$('#pic_show span').eq(1).click(function(event) {
	go()
});

 //看前部分图片 
var sum=0;
$('#left').click(function(event) {
	sum--;
	if(sum<=0){
		sum=0;
	}
   $('.dd').children('ul').animate({'left':-1023*sum+'px'},500)
});
// 看后后部分图片 
$('#right').click(function(event) {
	sum++;
	if(sum>=2){
		$('#right').css('display','none')
	}
   $('.dd').children('ul').animate({'left':-1023*sum+'px'},500)
})

// 头部左侧导航
var index;
$('.navs>ul').children('li').hover(function() {
	$(this).css('background','#fff');
	$(this).children('a').children('.navs_main').css('color','#666');
	$(this).siblings().css('background','none');
	$(this).children('a').children('.navs_main').siblings().css('color','#fff');

	$('.navs_content').eq($(this).index()).show();
	$('.navs_content').eq($(this).index()).siblings().hide()
}, function() {
	$('.navs_content').eq($(this).index()).hide()
	$(this).css('background','none');
	$(this).children('a').children('.navs_main').css('color','#fff');
});

// 无缝滚动
var m=0
setInterval(function(){
	m++;
	if(m>4) m=0;
	$('.list_wrod ul').stop().animate({'top': -26*m+'px'},300)	
},2000)

// 顶部固定导航
$(window).scroll(function(event) {
	var vh=$(window).scrollTop();
	if(vh>740){
		$('.search_fixed').slideDown();
	}else{
		$('.search_fixed').slideUp();
	}				
});


// 侧边栏
$(window).scroll(function(event) {
	var vh=$(window).scrollTop();
	if(vh>1510){
		$('.sidebar').css('display','block');
	}else{
		$('.sidebar').css('display','none');
	}				
});

$('.sidebar li').click(function(event) {
	var index=$(this).index();
	console.log(index)
	if(index==0){
		$('html,body').animate({'scrollTop':$('.center_con').offset().top-70});
	}
	if(index==1){
		$('html,body').animate({'scrollTop':$('.center_b').offset().top-70});
	}	
	if(index==2){
		$('html,body').animate({'scrollTop':$('.wrap_center').offset().top-70});
	}
	if(index==3){
		$('html,body').animate({'scrollTop':$('.beauty').offset().top-70});
	}
	if(index==4){
		$('html,body').animate({'scrollTop':$('.mother_and_child').offset().top-70});
	}
	if(index==5){
		$('html,body').animate({'scrollTop':$('.home').offset().top-70});
	}
	if(index==6){
		$('html,body').animate({'scrollTop':$('.phone').offset().top-70});
	}
	if(index==7){
		$('html,body').animate({'scrollTop':$('.main').offset().top-120});
	}
});

// 图片移动
$('.movefix').hover(function() {
	$(this).children('img').stop().animate({'left':'-5px'},300)
}, function() {
	$(this).children('img').stop().animate({'left':'0px'},300)
});
$('.fr a').hover(function() {
	$(this).children('img').stop().animate({'right':'7px'},300)
}, function() {
	$(this).children('img').stop().animate({'right':'1px'},300)	
});

$('.main li').hover(function() {
	$(this).css('border-color','#f66')
}, function() {
	$(this).siblings().css('border-color','transparent')
});

// 排行榜
$('.cur li').mouseenter(function(event) {
	$('.rank_box div').eq($(this).index()).addClass('show')
	$('.rank_box div').eq($(this).index()).siblings().removeClass('show')
	$(this).children('a').addClass('current')
	$(this).siblings().children('a').removeClass('current')
});
$('.sidebar_fix').hover(function() {
	$('.sidebar_right_bottom').show()
	$('.sidebar_right_bottom').stop().animate({'right':'0px'},300)
}, function() {
	$('.sidebar_right_bottom').hide()
	$('.sidebar_right_bottom').stop().animate({'right':'-34px'},300)
});
$('.sidebar_right_bottom span').hover(function() {
	$(this).children('i').stop().animate({'left':'-60px'},300)
	$(this).children('.qr').show()
}, function() {
	$(this).children('i').stop().animate({'left':'34px'},300)
	$(this).children('.qr').hide()
});
$('.close-adv').click(function(event) {
	$(this).parent().parent().hide()
});
$('.close-adv-top').click(function(event) {
	$('.top_adv_wrap').hide()
});
$('.top_header').mouseenter(function(event) {
	$('.index_topbanner').slideDown()
	$(this).slideUp()
});
$('.index_topbanner').mouseleave(function(event) {
	$(this).slideUp()
	$('.top_header').slideDown()
});

var s=0;
var timer2;
function go1(){
	s++;
	if(s>2){
		s=0;
	}
	$('.fresh_pic_change').css('left',-246*s+'px');
	$('.fresh_show_list em').eq(s).addClass('fresh_tip');
	$('.fresh_show_list em').eq(s).siblings().removeClass('fresh_tip')
	if(s==0){
		$('.fresh_caption').html('活色生鲜')
		$('.fresh_tit').html('59元选3件')
	}
	if(s==1){
		$('.fresh_caption').html('大闸蟹')
		$('.fresh_tit').html('第二件半价')
	}
	if(s==2){
		$('.fresh_caption').html('高品质牛排')
		$('.fresh_tit').html('爆款直降')
	}
}
function run2(){
	timer=setInterval(function(){
		go1()
	},2000)
}
run2()

$('.fresh_show').hover(function() {
	clearInterval(timer2)
}, function() {
	run2()
});
$('.fresh_show_list em').hover(function() {
	$(this).addClass('fresh_tip');
	$(this).siblings().removeClass('fresh_tip');
	s=$(this).index();
	$('.fresh_pic_change').css('left',-246*s+'px');
	if(s==0){
		$('.fresh_caption').html('活色生鲜')
		$('.fresh_tit').html('59元选3件')
	}
	if(s==1){
		$('.fresh_caption').html('大闸蟹')
		$('.fresh_tit').html('第二件半价')
	}
	if(s==2){
		$('.fresh_caption').html('高品质牛排')
		$('.fresh_tit').html('爆款直降')
	}
}, function() {
	
});
$('.return_top').click(function(event) {
	$('html,body').animate({'scrollTop':'0px'},1000)
});
$('.hd_qrcode').hover(function() {
	$('.hd_qrcode_bg').show()
}, function() {
	$('.hd_qrcode_bg').hide()
});
