document.onreadystatechange=function(){
			var state=document.readyState;
			if(state==='complete'){
				$('.loading').fadeOut();
			}
};
$(document).ready(function(){
	//登录、注册选项卡切换
	$('.form_log_btn_span').css('color','red');
	$('.form_log_btn_span').css('border-bottom-color','red');
	$('.form_log_btn').click(function(){
		$('.form_log').addClass('form_active');
		$('.form_reg').removeClass('form_active');
		$('.form_log_btn_span').css('color','red');
		$('.form_log_btn_span').css('border-bottom-color','red');
		$('.form_reg_btn_span').css('color','#6b6b6b');
		$('.form_reg_btn_span').css('border-bottom-color','#6b6b6b');
	});
	$('.form_reg_btn').click(function(){
		$('.form_reg').addClass('form_active');
		$('.form_log').removeClass('form_active');
		$('.form_reg_btn_span').css('color','red');
		$('.form_reg_btn_span').css('border-bottom-color','red');
		$('.form_log_btn_span').css('color','#6b6b6b');
		$('.form_log_btn_span').css('border-bottom-color','#6b6b6b');
	});
	
	//登录选项
		var userNum=$('#num').val();
		//$('#num_prompt').append(userNum);//追加内容
		//$('#num_prompt').html(userNum);
		
		var userPas=$('#pas').val();
		// $('#pas_prompt').html(userPas);
		
		$('#num').blur(function(){//失去焦点是触发事件
			userNum = $('#num').val();
			if($.trim(userNum)===''){
				$('#num_prompt').html("请输入正确的邮箱或手机号");
				$('#num').val('');
				
			}
			else{
				$('#num_prompt').html('');
			}
		});
		$('#num').focus(function(){
			
		});
		$('#pas').blur(function(){
			userPas=$('#pas').val();
			if($.trim(userPas)==='' || $.trim(userPas).length<6){
				$('#pas_prompt').html("请输入6-16位密码，区分大小写，不能使用空格！");
				$('#pas').val('');
			}
			else{
				$('#pas_prompt').html('');
			}
		});
	//click登录时
	$('.log_btn').click(function(){
		if($.trim(userNum)==='' && $.trim(userPas)===''){
			$('#num_prompt').html("请输入正确的邮箱或手机号");
			$('#pas_prompt').html("请输入6-16位密码，区分大小写，不能使用空格！");
		}
		else if($.trim(userNum)===''){
			$('#num_prompt').html("请输入正确的邮箱或手机号");
		}
		else if($.trim(userPas)===''){
			$('#pas_prompt').html("请输入6-16位密码，区分大小写，不能使用空格！");
		}
		else{
			$('#num_prompt').html('');
			$('#pas_prompt').html('');
			if(userNum==='wangmd' && userPas==='123456'){
				$('.login').fadeOut();
				$('.panel_zhezhao').fadeOut();
			}
		}
	});
});