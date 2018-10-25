/*
* @Author: Administrator
* @Date:   2018-10-06 12:29:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-06 17:59:55
*/
$('.order_list_items').hover(function() {
	$(this).parent().parent().children('dt').children('i').css('background-position','7px -32px')
}, function() {
	$(this).parent().parent().children('dt').children('i').css('background-position','7px -13px')
});
$('.lo_box').hover(function() {
	$(this).children('.lo_box_tit').show()
}, function() {
	$(this).children('.lo_box_tit').hide()
});
$('.order_people').hover(function() {
	$(this).children('.people_info').show()
}, function() {
	$(this).children('.people_info').hide()
});
$('.product_img').mouseenter(function(event) {
	$(this).parent().parent().addClass('puv_morefix')
	$(this).parent().animate({'width':'272px'},200)
	$(this).parent().children('p').show()
});
$('.puv_more').mouseleave(function(event) {
	$(this).removeClass('puv_morefix')
	$(this).children().animate({'width':'80px'},200)
	$(this).children().children('p').hide()
});
$('.tit_tab>div').click(function(event) {
	$('.order_tab').toggle()
});
$('.order_cancels').click(function(event) {
	$(this).parent().children('.order_cancel_box').show()
});
$('.close_window').click(function(event) {
	$(this).parent().parent().hide()
});
$('.no_remove').click(function(event) {
	$(this).parent().parent().hide()
});
$('.can').click(function(event) {
	
});