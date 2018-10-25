/*
* @Author: hp
* @Date:   2018-08-24 15:59:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-05 13:57:25
*/

// 用户名
$('#user').focus(function(event) {
	$('.usertip').animate({'left':'-60px'},300)
	$('.user_error').show().css('background','#e4e4e4')
	$('.user_error').html('4-20位字符，可由中文、英文、数字或符号“—”组成')
});
$('#user').blur(function(event) {
	if($('#user').val()==''){
		$('.user_error').show().css('background','#fff4d7')
		$('.user_error').html('用户名不能为空')
		$(this).parent().css('border-color','#ff3c3c')
	}
});
// 手机号
$('#number').focus(function(event) {
	$('.numbertip').animate({'left':'-60px'},300)
	$('.number_error').show().css('background','#e4e4e4')
	$('.number_error').html('请填写正确的手机号码，以便接收订单通知，找回密码等')
});
$('#number').blur(function(event) {
	if($('#number').val()==''){
		$('.number_error').show().css('background','#fff4d7')
		$('.number_error').html('格式错误')
		$(this).parent().css('border-color','#ff3c3c')
	}
});

// 验证码
$('#verification').focus(function(event) {
	$('.codetip').animate({'left':'-85px'},300)
	$('.code_error').show().css('background','#e4e4e4')
	$('.code_error').html('如无法接收验证码，请重启手机并确认手机短信未被拦截！4G用户请关闭4G网络进行接收')
});
$('#verification').blur(function(event) {
	$('.code_error').hide()
});

// 设置密码
$('#pwd').focus(function(event) {
	$('.pwdtip').animate({'left':'-75px'},300)
	$('.pwd_error').show().css('background','#e4e4e4')
	$('.pwd_error').html('6-20个大小写英文字母、符号或数字的组合')
});
$('#pwd').blur(function(event) {
	if($('#pwd').val()==''){
		$('.pwd_error').show().css('background','#fff4d7')
		$('.pwd_error').html('密码不能为空')
		$(this).parent().css('border-color','#ff3c3c')
	}
});

// 确认密码
$('#confirm').focus(function(event) {
	$('.confirmtip').animate({'left':'-75px'},300)
	$('.confirm_error').show().css('background','#e4e4e4')
	$('.confirm_error').html('请再次输入密码')
});
$('#help_wrap').hover(function() {
	$('#hd_menu_list').show()
}, function() {
	$('#hd_menu_list').hide()
});