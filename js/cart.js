/*
* @Author: Administrator
* @Date:   2018-09-15 16:11:41
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-12 00:01:44
*/
var num=0;
$('.move_left').click(function(event) {
	num--
	if(num<=0) num=0
	$('.like_item').children('ul').animate({'left':-1040*num+'px'},500)

});
$('.move_right').click(function(event) {
	num++
	if(num>=2) num=2		
	$('.like_item').children('ul').animate({'left':-1040*num+'px'},500)
});
$('.view_control_tip').children('span').click(function(event) {
	if($('.preview').hasClass('onshow'))
		$('.preview').removeClass('onshow')
	else
		$('.preview').addClass('onshow')
});
$('.more_tit').click(function(event) {
	$(this).parent().children('.prop_dialog_inner').toggle()
});
$('.preview').children('span').eq(0).click(function(event) {
	num--
	if(num<=0) num=0
	$('.preview_list').animate({'left':-95*num+'px'},500)
});
$('.closefix').click(function(event) {
	$(this).parent().parent().hide()
});
$('.preview').children('span').eq(1).click(function(event) {
	console.log($('.preview li').length)
	num++
	if(num>=$('.preview li').length-11) num=$('.preview li').length-11
	$('.preview_list').animate({'left':-95*num+'px'},500)
});
$('.cash_tit').hover(function() {
	console.log($(this).index())
	$(this).children('.cash_box').slideDown()
}, function() {
	$(this).children('.cash_box').slideUp()
});

$(window).scroll(function(event) {
	var wh=$(window).scrollTop()
	if(wh>=$('.pay_tools_bar').offset().top){
		$('.pay_tools_bar_fixed').hide()
	}else{
		$('.pay_tools_bar_fixed').show()
	}	
});
$('.adress').click(function(event) {
	$('.adress_box').show()
});
$('.adress_box li').click(function(event) {
	$(this).addClass('current')
	$(this).siblings().removeClass('current')
	$('.adress_box>div').eq($(this).index()).show()
	$('.adress_box>div').eq($(this).index()).siblings('div').hide()
	$('.collect_box').eq($(this).index()).addClass('current')
	$('.collect_box').eq($(this).index()).siblings().removeClass('current')
});
$('.adress_box dd').click(function(event) {
	$(this).addClass('on')
	$(this).siblings().removeClass('on')
	$(this).parent().siblings().children('dd').removeClass('on')
});
$('.close').click(function(event) {
	$(this).parent().hide()
	$('.control_btn').animate({'right':'0px'},300)
});
$('.control_btn a').hover(function() {
	$(this).children('em').css('display','inline-block')
	$(this).children('em').stop().animate({'left':'-58px'},300)
	$(this).siblings().children('em').css('display','none')
	$(this).siblings().children('em').stop().animate({'left':'0px'})
}, function() {
	$(this).children('em').css('display','none')
	$(this).children('em').stop().animate({'left':'0px'},300)
});
$('.control_btn a').click(function(event) {
	$(this).parent().animate({'right':'287px'},300)
	$('.control_item>div').eq($(this).index()).animate({'right':'0px'},300)
});
$('.control_btn a').eq(3).click(function(event) {
	
});
$('.del_all').click(function(event) {
	$('.cup').show()
});
$('.cancel').click(function(event) {
	$('.cup').hide()
});
$('.del_confirm').click(function(event) {
	$('.collect_box ul').children('li').remove()
	$('.cup').hide()
});
$('.preview_list li').hover(function() {
	$(this).children('.prod_txt').stop().animate({'height':'75px'}, 300)
}, function() {
	$(this).children('.prod_txt').stop().animate({'height':'0px'}, 300)
});
$('.dels').click(function(event) {
	var t=$(this).parent().parent().parent().parent().parent()
	t.remove()
});
// 全选
$('.check-all').click(function(event) {
	if($(this).hasClass('checkfix')){
		$('.check').removeClass('checkfix')
	}
	else
		$('.check').addClass('checkfix')
});
$('.check-list').click(function(event) {
	if($(this).hasClass('checkfix')){
		$(this).removeClass('checkfix')
	}
	else{
		$(this).addClass('checkfix')
	}		
});
$('.shop-check').click(function(event) {
	if($(this).hasClass('checkfix')){
		$(this).removeClass('checkfix')
		$(this).parent().parent().parent().children('ul').children('li').children('.list_bottom').children('.pro_item').children('.check').removeClass('checkfix')
	}
	else{
		$(this).addClass('checkfix')
		$(this).parent().parent().parent().children('ul').children('li').children('.list_bottom').children('.pro_item').children('.check').addClass('checkfix')
	}		
});
// 批量删除
$('.del_by_query').click(function(event) {
	$('.cart_list_one>li').each(function(){
		if($(this).find('span[class*="check-list"]').hasClass('checkfix')){
			$(this).remove()
			console.log('长度'+$(this).length)
			if($(this).length<=0){
				$(this).parent().parent().remove()
			}
		}
	})
	// if($('.check-list').hasClass('checkfix')){
	// 	$('.check-list').parent().parent().parent().remove()
});
$(function(){			
	$(".addfix").click(function(){
		var t = $(this).parent().children('input')
		t.val(parseInt(t.val())+1)		
		setTotal();	
	})	
	$(".reducefix").click(function(){
		var t = $(this).parent().children('input')
		if(t.val()>=2){
			t.val(parseInt(t.val())-1)	
		}		
		setTotal();	
	})	
	function setTotal(){
		var sum=0;
		var s=0
		var w=0
		$('.cart_list_one>li').each(function() {
			var num=parseInt($(this).find('input[class*=pro_amount]').val())
			console.log('商品数量：'+num)
			var price=parseFloat($(this).find('p[class*=prices]').text());
			console.log('单价：'+price)
			var weight=parseInt($(this).find('span[class*=weight]').val());
			s=num*price
			sum+=num*price
			w=num*weight
	
			$(this).children('.list_bottom').children('.pro_item').children('.pro_detalis').children('.amount').children('.item_a_money').html(s.toFixed(2));
			$(this).children('.list_bottom').children('.pro_item').children('.pro_detalis').children('.amount').children('.item_a_weight').children('.weight').html(w.toFixed(2));
		});		
		$('.item_a_money').html
		$(".price-total-all").html(sum.toFixed(2));
		$(".all_up").html(sum.toFixed(2));	
	}
	setTotal();
})
$('.prop_dialog_inner li').click(function(event) {
	console.log(88)
	$(this).parent().parent().parent().children('.btn_box').children('.unable').addClass('btnfix')
	$(this).addClass('ye')
	$(this).siblings().removeClass('ye')
	$(this).children('span').addClass('ye')
	$(this).siblings().children('span').removeClass('ye')
});
