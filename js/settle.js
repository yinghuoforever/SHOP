/*
* @Author: Administrator
* @Date:   2018-09-08 14:51:04
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-05 16:45:27
*/
$('.new_adress').click(function(event) {
	$('.new_adress_wrap').show();
});
$('.close').click(function(event) {
	$('.new_adress_wrap').hide();
});
$('#saveConsigneeTitleDiv').click(function(event) {
	if($('#name').val()==''){		
		$('#name_errtip').show()
	}
	if($('#phone').val()==''){		
		$('#phone_errtip').show()
	}
	if($('#adress_all').val()==''){		
		$('#adressAll_errtip').show()
	}

	var lis=$('<li></li>');
	lis.html(`<div class="company">
				<span></span>
				<span>公司</span>
			  </div>
				<p>${$('#name').val()}<span>${$('#phone').val()}</span></p>
				<p>广东 深圳市 南山区 </p>
				<p>广东 深圳市 南山区 </p>
				<span></span>`)

	$('.info_box ul').append(lis)
});
$('.info_box li').click(function(event) {
	console.log($(this).index())
	$(this).css('border-color','red')
	$(this).siblings().css('border-color','#e5e5e5')
	$(this).children('span').addClass('subtip')
	$(this).siblings().children('span').removeClass('subtip')
});
$('.pay_list p').click(function(event) {
	$(this).children('span').addClass('pay_bg')
	$(this).siblings().children('span').removeClass('pay_bg')
});
$('.consignee-tag-chose').hover(function() {
	$(this).css({'color':'#ff4d57','border-color':'#ff4d57'})
}, function() {
	$(this).css({'color':'#666','border-color':'#ccc'})
});
$('.set_default').click(function(event) {
	$(this).children('i').stop().animate({'left':'21px'},100)
	$(this).css('background-color','#ff4d57')
});