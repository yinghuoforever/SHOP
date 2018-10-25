	/*
	* @Author: Administrator
	* @Date:   2018-08-19 16:14:31
	* @Last Modified by:   Administrator
	* @Last Modified time: 2018-10-05 11:24:10
	*/
// 登录验证
user.select()
function register(){
	var reg=true;
	if(user.value==''){
		error_tip.innerHTML='请输入账号'
		error_wrap.style.opacity='1'
		reg=false;
	}
	if(pwd.value==''){
		error_tip.innerHTML='请输入密码'
		error_wrap.style.opacity='1'
		reg=false;
	}
	if(pwd.value==' '){
		error_tip.innerHTML='密码不能有空格'
		error_wrap.style.opacity='1'
		reg=false;
	}
	if(user.value=='' && pwd.value==''){
		error_tip.innerHTML='请输入账号和密码'
		error_wrap.style.opacity='1'
	}				
	return reg;
}

// 下拉菜单
$('#help_wrap').hover(function() {
	$('#hd_menu_list').show()
}, function() {
	$('#hd_menu_list').hide()
});
// 更多合作网站

$('#unfold').click(function(event) {
	$('#more_landing').toggle()
});
$('.chose').click(function(event) {
	if($(this).hasClass('chose-bg')){
		$(this).removeClass('chose-bg')
		$('#agreement_tips').hide()
	}
	else{
		$(this).addClass('chose-bg')
		$('#agreement_tips').show()
	}
});
