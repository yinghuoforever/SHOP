/*
* @Author: Administrator
* @Date:   2018-09-13 19:32:36
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-25 20:15:42
*/
var num=0
$('.hide_box li').mouseenter(function(event) {
	var src=$(this).children('img').attr('src')
	$('.imgs-wrap').children('img').attr('src',src)
	$(this).addClass('current')
	$(this).siblings().removeClass('current')
});
$('.imgs-wrap').hover(function() {
	var src=$(this).children('img').attr('src')
	$('.enlargement').show()
	$('.enlargement').children('img').attr('src',src)
	$('.imgs-wrap').mousemove(function(e) {
		$('.magnifying').css({'left':e.pageX-185+'px','top':e.pageY-330+'px'}) 
	});

}, function() {
	$('.enlargement').hide()
});
$('.change_left').click(function(event) {
	num--
	if(num<=0) num=0
	$('.hide_box').children('ul').animate({'left':-67*num+'px'},500)
});
$('.change_right').click(function(event) {
	num++
	console.log(num)
	for(var i=0;i<$('.hide_box li').length;i++){
		if(num>=$('.hide_box li').length-5) num=$('.hide_box li').length-5
	}
	$('.hide_box').children('ul').animate({'left':-67*num+'px'},500)
});
$('.item_list').hover(function() {
	$(this).addClass('in')	
	$(this).siblings().removeClass('in')
}, function() {
	$(this).removeClass('in')
});
$('.item_list').click(function(event) {
	var src=$(this).children('a').children('span').children('img').attr('src')
	console.log(src)
	$(this).addClass('in')
	$(this).addClass('color-in')	
	$(this).siblings().removeClass('in')
	$(this).siblings().removeClass('color-in')
	$(this).children('b').addClass('in')
	$(this).siblings().children('b').removeClass('in')
	$('.imgs-wrap').children('img').attr('src',src)
});
$('.comment_type ul').children('li').click(function(event) {
	$(this).addClass('active-on')
	console.log('点击查看：'+$(this).index())
	$('.all_comment>div').eq($(this).index()).addClass('wrap-on')
	$('.all_comment>div').eq($(this).index()).siblings().removeClass('wrap-on')
	$(this).siblings().removeClass('active-on')
	$(this).children('i').addClass('cheked-on')
	$(this).siblings().children('i').removeClass('cheked-on')
});
$('.tabbox li').click(function(event) {
	var index=$(this).index()
	$(this).addClass('un')
	$(this).siblings().removeClass('un')
	if(index==1){
		$('.des_info').hide()
		$('.des_box').hide()
		$('.des_word').hide()
	}
	if(index==2){
		$('.des_info').hide()
		$('.des_box').hide()
	}
	if(index==3){
		$('.des_word').show()
		$('.des_info').hide()
		$('.des_box').hide()
	}
	if(index==0){
		$('.des_info').show()
		$('.des_box').show()
		$('.des_word').show()
	}
});
$('.discount .right').click(function(event) {
	$('.promotion').show()
});
$('.msg').children('i').click(function(event) {
	console.log(1)
	$(this).parent().parent().hide()
});

$(function(){	
	var t = $("#product_amount");	
	$(".add_num").click(function(){
		t.val(parseInt(t.val())+1)
		if(t.val()>=2){
			$('.reduce_num').css('background-position', '-124px -73px')	
		}		
		// setTotal();	
	})	
	$(".reduce_num").click(function(){
		if(t.val()>=2){
			t.val(parseInt(t.val())-1)	
		}
		if(t.val()<=1)
			$('.reduce_num').css('background-position', '-148px -73px')	
		// setTotal();	
	})	
	console.log(t.val())
	// function setTotal(){		
	// 	$("#total").html((parseInt(t.val())*3.95).toFixed(2));	
	// }	
	// setTotal();
})
