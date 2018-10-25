/*
* @Author: Administrator
* @Date:   2018-09-24 16:52:25
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-06 09:22:39
*/
$('.classify li').hover(function() {
	$(this).css('border-color','#e5e5e5')
	$(this).siblings().css('border-color','transparent')
	$(this).children('.details').show()
}, function() {
	$(this).css('border-color','transparent')
	$(this).children('.details').hide()
});
$('.brand-btn').click(function(event) {
	$(this).parent().hide()
	$(this).parent().parent().children('ul').css('height','211px')
	$(this).parent().siblings().show()
});
$('.multi-choice').click(function(event) {
	$(this).parent().hide()
	$(this).parent().parent().children('ul').eq(0).hide()
	$(this).parent().parent().children('.check_box').show()
	$(this).parent().parent().children('.guide_btn').show()
});
$('.more').click(function(event) {
	$(this).hide()
	$('.close-btn-fix').css('opacity','1')
	$(this).parent().parent().children('ul').css('height','86px')
	$(this).parent().parent().children('.guide_btn').show()
});
$('.btn-more').click(function(event) {
	$(this).hide()
	$(this).parent().children('.close-btn-fix').css('opacity','1')
	$(this).parent().parent().children('ul').css('height','95px')
});
$('.close-btn-fix').click(function(event) {
	$(this).css('opacity','0')
	$(this).parent().children('.btn-more').show()
});
$('.guide_btn .cancel').click(function(event) {
	$(this).parent().hide()
	$(this).parent().parent().children('ul').eq(0).show()
	$(this).parent().parent().children('.check_box').hide()
	$(this).parent().parent().children('.guide_btn').hide()
	$(this).parent().parent().children('.guide_choice').show()
});
$('.brand_list li').hover(function() {
	$(this).children('span').show()
}, function() {
	$(this).children('span').hide()
});
$('.cencel-brand').click(function(event) {
	$('.all_brand').hide()
	$(this).parent().parent().children('ul').css('height','105px')
});
$('.cencel-fix').click(function(event) {
	$(this).parent().parent().children('ul').css('height','34px')
});
$('.close-btn-fix').click(function(event) {
	$(this).parent().parent().children('ul').css('height','34px')
	$(this).css('opacity','0')
	$('.more').show()
});
$('.close-brand').click(function(event) {
	$('.all_brand').hide()
	$(this).parent().parent().parent().children('.guide_btn').hide()
	$(this).parent().parent().parent().children('ul').css('height','105px')
});
$('main .item_box').hover(function(){
	$(this).children('.item_fix').show()
	$(this).siblings().children('.item_fix').hide()
}, function() {
	$(this).children('.item_fix').hide()
});	
$('.check-in li').hover(function() {
	$(this).children('span').eq(0).css('background-position','-64px -58px')
	$(this).siblings().children('span').eq(0).css('background-position','-64px -70px')
}, function() {

});
$('.check-in li').click(function(event) {
	$(this).children('span').eq(0).css('background-position','-76px -58px')
	$(this).parent().parent().parent().children('.guide_btn').children('.confirm').css({'background':'#ff5c4d','color':'#fff'})
});

$(function(){		
	$(".add_n").click(function(){
		var n = $(this).parent().children('input')
		n.val(parseInt(n.val())+1)
		if(n.val()>=2){
			$(this).parent().children('.reduce_n').css('background-position', '-63px -13px')	
		}			
	})	
	$(".reduce_n").click(function(){
		var n = $(this).parent().children('input')
		if(n.val()>=2){
			n.val(parseInt(n.val())-1)	
		}
		if(n.val()<=1)
			$(this).css('background-position', '-46px -14px')	
	})	
	console.log(n.val())	
})
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
$('.search_select_adress').hover(function() {
	$('.boxfix').show()
}, function() {
	
});
$('.boxfix').mouseleave(function(event) {
	$(this).hide()
});
$('.between').click(function(event) {
	$('.price_range').show()
});
$('.range_wrap li').hover(function() {
	var n1=$(this).children('span').children('.num-one').html()
	var n2=$(this).children('span').children('.num-two').html()
	$('.range-list').children('input').eq(0).val(n1)
	$('.range-list').children('input').eq(1).val(n2)
	$(this).children('p').hide()
	$(this).children('b').show()
}, function() {
	$(this).children('p').show()
	$(this).children('b').hide()
});	
$('.price_range').mouseleave(function(event) {
	$('.price_range').hide()
});
$('.clear').click(function(event) {
	$('.range-list').children('input').val('')
});
$('.pricefix').hover(function() {
	$('.tent_to').show()
}, function() {
	$('.tent_to').hide()
});
$('.paging_all span').click(function(event) {
	$(this).addClass('pagfix')
	$(this).siblings().removeClass('pagfix')
});
$('.nochange li').hover(function() {
	$(this).css('border-color','#dddddd')
	$(this).children('div').show()
}, function() {
	$(this).css('border-color','transparent')
	$(this).children('div').hide()
});
