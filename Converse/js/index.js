$(function(){
	// let obj = JSON.parse(localStorage.getItem("data"));
	// $(".cart-icon").html(obj.num);
	
	if(localStorage.getItem("user") != null){
		$("header #tel-name").html("欢迎您,"+localStorage.getItem("user"));
		//退出账户
		$("header #logout").click(function(){
			$(location).attr("href", "index.html");
			localStorage.clear();
		});
	}
	if(localStorage.getItem("user") == null){
		let oHeaderRight = document.getElementsByClassName("header_right")[0];
		oHeaderRight.innerHTML = `
			<span class="login">登录</span>
			<span class="nbsp">&nbsp;/&nbsp;</span>
			<span class="reg">注册</span>
			<div class="reg-icon"></div>
			<a href="cart.html"><span class="cart">购物车</span></a>
			<div class="cart-icon">0</div>
			<div class="chat-icon"></div>
			<div class="search-icon"></div>
			<div class="help-icon"></div>
			<span class="point point1"></span>
			<span class="point point2"></span>
			<span class="point point3"></span>
		`;
	}
	
	$(".header_slide_bottom").load("header_nav.html"); // 加载男的女的儿童
	$(".header_nav").load("header_nav.html", function(){ // 加载男的女的儿童
	//滑过男的
		$("._man").mouseover(function(){
			$(".man").stop().slideDown();
		});
		$("._man").mouseout(function(){
			$(".man").stop().slideUp();
		});
		$(".man").mouseover(function(){
			$(this).stop().slideDown();
		});
		$(".man").mouseout(function(){
			$(this).stop().slideUp();
		});
	//滑过女的
		$("._woman").mouseover(function(){
			$(".woman").stop().slideDown();
		});
		$("._woman").mouseout(function(){
			$(".woman").stop().slideUp();
		});
		$(".woman").mouseover(function(){
			$(this).stop().slideDown();
		});
		$(".woman").mouseout(function(){
			$(this).stop().slideUp();
		});
	//滑过儿童
		$("._child").mouseover(function(){
			$(".child").stop().slideDown();
		});
		$("._child").mouseout(function(){
			$(".child").stop().slideUp();
		});
		$(".child").mouseover(function(){
			$(this).stop().slideDown();
		});
		$(".child").mouseout(function(){
			$(this).stop().slideUp();
		});
	});
	
	$('.slide').slide(); // 轮播图
	
	$(".login").click(function(){ // 点击登录
		$(".header_slide_reg").slideUp();
		$(".header_right .point2").hide();
		$(".header_right .point3").hide();
		$(".header_search").hide();
		$(".header_right .point1").toggle();
		$(".header_right .point1").css({zIndex:"1"});
		$(".header_slide_login").slideToggle();
		
		// $("._man").mouseover(function(){
		// 	$(".man").stop().slideUp();
		// });
		// $("._woman").mouseover(function(){
		// 	$(".woman").stop().slideUp();
		// });
		// $("._child").mouseover(function(){
		// 	$(".child").stop().slideUp();
		// });
		// $(".header_nav").slideToggle();
	}); 
	$(".reg").click(function(){ // 点击注册
		$(".header_slide_login").slideUp();
		$(".header_right .point1").hide();
		$(".header_right .point3").hide();
		$(".header_search").hide();
		$(".header_right .point2").toggle();
		$(".header_right .point2").css({zIndex:"1"});
		$(".header_slide_reg").slideToggle();
		
		// $("._man").mouseover(function(){
		// 	$(".man").stop().slideUp();
		// });
		// $("._woman").mouseover(function(){
		// 	$(".woman").stop().slideUp();
		// });
		// $("._child").mouseover(function(){
		// 	$(".child").stop().slideUp();
		// });
		// $(".header_nav").slideToggle();
	});
	$(".reg-icon").click(function(){ // 点击注册图标
		$(".header_slide_login").slideUp();
		$(".header_right .point1").hide();
		$(".header_right .point3").hide();
		$(".header_search").hide();
		$(".header_right .point2").toggle();
		$(".header_right .point2").css({zIndex:"1"});
		$(".header_slide_reg").slideToggle();
		
		// $("._man").mouseover(function(){
		// 	$(".man").stop().slideUp();
		// });
		// $("._woman").mouseover(function(){
		// 	$(".woman").stop().slideUp();
		// });
		// $("._child").mouseover(function(){
		// 	$(".child").stop().slideUp();
		// });
		// $(".header_nav").slideToggle();
	});
	$(".search-icon").click(function(){ // 点击搜索图标
		$(".header_slide_login").slideUp();
		$(".header_slide_reg").slideUp();
		$(".header_right .point1").hide();
		$(".header_right .point2").hide();
		$(".header_right .point3").css({left:"505px"});
		$(".header_right .point3").toggle();
		$(".header_right .point3").css({zIndex:"1"});
		$(".header_search").slideToggle();
	});
	$(".search-main-btn .s2").click(function(){ // 点击搜索关闭图标
		$(".header_search").slideUp();
	});
	
	$(".select-box").mouseover(function(){ // 滑过显示
		$(".bir-day").hide();
		$(".bir-day").eq($(this).index()).show();
	});
	$(".select-box").mouseout(function(){ // 离开隐藏
		$(".bir-day").hide();
	});
	$(".bir-day li").click(function(){ // 点击确定年月日
		$(this).parent().prev().html($(this).html());
		$(".bir-day").hide();
	});
	
	$(".hotGoods-single").mouseover(function(){
		$(".goods-single").stop().hide();
		$(".goods-single").stop().fadeIn();
	});
	$(".hotGoods-single").mouseout(function(){
		$(".goods-single").stop().fadeIn();
	});
	
	$(".header_slide_login .login-slide-left a").click(function(){ // 点击还未注册 跳转注册
		$(".header_slide_login").slideUp();
		$(".header_slide_reg").slideDown();
	});
	
	//登录同意框状态	 按钮颜色 默认
	$(".login-slide .login-slide-right .check").addClass("check-choose");
	$(".click-login").css({color:"#fff",backgroundColor:"#000"});
	$(".click-login").mouseover(function(){
		$(this).css({color:"#000",backgroundColor:"#fff"});
		$(".click-login .s-c-login").css({backgroundPosition:"-39px -163px"});
	});
	$(".click-login").mouseout(function(){
		$(this).css({color:"#fff",backgroundColor:"#000"});
		$(".click-login .s-c-login").css({backgroundPosition:"-9px -163px"});
	});
	//点击登录同意框 按钮颜色变化
	$(".login-slide .login-slide-right .check").click(function(){
		if($(this).hasClass("check-choose")){ // 当前已经被选中->移除 变为未选中
			$(this).removeClass("check-choose");
			$(".click-login").css({color:"#fff", backgroundColor:"#ccc"});
			$(".click-login").mouseover(function(){
				$(this).css({color:"#fff",backgroundColor:"#ccc"});
				$(".click-login .s-c-login").css({backgroundPosition:"-9px -163px"});
			});
			$(".click-login").mouseout(function(){
				$(this).css({color:"#fff",backgroundColor:"#ccc"});
				$(".click-login .s-c-login").css({backgroundPosition:"-9px -163px"});
			});
		}else{ // 当前未被选中->添加 变为被选中
			$(this).addClass("check-choose");
			// $(".click-login").css({backgroundColor:"#000"});
			$(".click-login").css({color:"#fff", backgroundColor:"#000"});
			$(".click-login").mouseover(function(){
				$(this).css({color:"#000",backgroundColor:"#fff"});
				$(".click-login .s-c-login").css({backgroundPosition:"-39px -163px"});
			});
			$(".click-login").mouseout(function(){
				$(this).css({color:"#fff",backgroundColor:"#000"});
				$(".click-login .s-c-login").css({backgroundPosition:"-9px -163px"});
			});
		}
	});
	$(".login-slide .login-slide-right .check::before").click(function(){ // 事件冒泡
		return false;
	});
	
	//性别选择
	$(".reg-slide .reg-slide-right .sex").click(function(){
		if($(this).hasClass("sex-choose")){
			$(this).removeClass("sex-choose");
		}else{
			$(this).addClass("sex-choose");
			$(this).siblings().removeClass("sex-choose");
		}
	});
	$(".reg-slide .reg-slide-right .sex::before").click(function(){ // 事件冒泡
		return false;
	});
	
	//注册同意框状态 按钮颜色 默认
	// $(".reg-slide .reg-slide-right .check").addClass("check-choose");
	$(".click-reg").css({color:"#fff",backgroundColor:"#ccc"});
	$(".click-reg").mouseover(function(){
		$(this).css({color:"#fff",backgroundColor:"#ccc"});
		$(".click-reg .s-c-reg").css({backgroundPosition:"-9px -163px"});
	});
	$(".click-reg").mouseout(function(){
		$(this).css({color:"#fff",backgroundColor:"#ccc"});
		$(".click-reg .s-c-reg").css({backgroundPosition:"-9px -163px"});
	});
	
	//点击注册同意框 按钮颜色变化
	$(".reg-slide .reg-slide-right .check").click(function(){
		if($(this).hasClass("check-choose")){ // 当前已经被选中->移除 变为未选中
			$(this).removeClass("check-choose");
			$(".click-reg").css({color:"#fff", backgroundColor:"#ccc"});
			$(".click-reg").mouseover(function(){
				$(this).css({color:"#fff",backgroundColor:"#ccc"});
				$(".click-reg .s-c-reg").css({backgroundPosition:"-9px -163px"});
			});
			$(".click-reg").mouseout(function(){
				$(this).css({color:"#fff",backgroundColor:"#ccc"});
				$(".click-reg .s-c-reg").css({backgroundPosition:"-9px -163px"});
			});
		}else{ // 当前未被选中->添加 变为被选中
			$(this).addClass("check-choose");
			// $(".click-reg").css({backgroundColor:"#000"});
			$(".click-reg").css({color:"#fff", backgroundColor:"#000"});
			$(".click-reg").mouseover(function(){
				$(this).css({color:"#000",backgroundColor:"#fff"});
				$(".click-reg .s-c-reg").css({backgroundPosition:"-39px -163px"});
			});
			$(".click-reg").mouseout(function(){
				$(this).css({color:"#fff",backgroundColor:"#000"});
				$(".click-reg .s-c-reg").css({backgroundPosition:"-9px -163px"});
			});
		}
	});
	$(".reg-slide .reg-slide-right .check::before").click(function(){ // 事件冒泡
		return false;
	});
	
	// $(".select-box").click(function(){
	// 	$(".bir-day").hide();
	// 	// $(".bir-day").eq($(this).index()).show();
	// 	$(".bir-day").eq($(this).index()).css({display:"block"});
		
	// 	//点击其它地方隐藏已弹出
	// 	let that = $(this);
	// 	$(document).bind("click", function(e){
	// 		let tar = $(e.target);
	// 		if(tar.closest(that).length == 0){
	// 			$(".bir-day").hide();
	// 		}else{
	// 			$(".bir-day").eq(that.index()).show();
	// 		}
	// 	});
	// });
	
	
	//点击具体年月日并选中
	// $(".select-box .bir-day li").click(function(){
		
	// 	$(this).parent().hide()	
	// 	console.log($(this).parent('.bir-day.ul1').css('display'))
	// 	// $(this).parent('.reg-slide .reg-slide-right .bir-box .select-box .bir-day.ul1').hide();
	// })
	// $(".bir-day li").each(function(index, item){
	// 	$(this).click(function(){
	// 		console.log($(this));
	// 		$(this).parent().prev().html($(this).html());
	// 		// $(".reg-slide .reg-slide-right .bir-box .select-box .bir-day").attr("style", "display:none");
	// 		// $(".reg-slide .reg-slide-right .bir-box .select-box .bir-day").hide();
	// 		// $(this).parent().hide();
	// 		$(this).parent().attr("style", "display:none");
	// 		// $(this).parent().css({display:"none"});
	// 		$(this).parent().removeAttr("style");
	// 		// console.log($(this).html());
	// 		// console.log($(this));
	// 	});
	// });
	
	// $(".reg-slide .reg-slide-right .bir-box .select-box .bir-day li").click(function(){
	// 	$(this).parent().prev().html($(this).html());
	// 	$(".reg-slide .reg-slide-right .bir-box .select-box ul").hide();
	// });
	
	// $(".bir-day li").each(function(index, item){
	// 	$(this).click(function(){
	// 		// $(this).parent().hide();
	// 		// $(this).parent().css({display:"none"});
	// 		$(".bir-day").css({display:"none"});
	// 	});
	// });
	// $(".select-box .bir-day li").click(function(){
	// 	$(".bir-day").css({display:"none"});
	// });
	
	//点击一个显示 其它隐藏
	// $(".select-box1").click(function(){
	// 	$(".ul1").css({display:"block"});
	// 	$(".ul2").css({display:"none"});
	// 	$(".ul3").css({display:"none"});
	// });
	// $(".select-box2").click(function(){
	// 	$(".ul1").css({display:"none"});
	// 	$(".ul2").css({display:"block"});
	// 	$(".ul3").css({display:"none"});
	// });
	// $(".select-box3").click(function(){
	// 	$(".ul1").css({display:"none"});
	// 	$(".ul2").css({display:"none"});
	// 	$(".ul3").css({display:"block"});
	// });
	
	//广告条
	// let time = null;
	// time = setInterval(function(){
	// 	$("info-a").each(function(index, item){
	// 		if($(this).index == $("info").length){
	// 			$(this).index = 0;
	// 			$(this).css({transform:"translateX(-1000px)"});
	// 		}
	// 	});
	// }, 1000);
});

//登录 手机号验证
$(".login-slide .login-slide-right .cell").blur(function(){
	if(!(/^1[3456789]\d{9}$/.test($(".login-slide .login-slide-right .cell").val())) && !(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test($(".login-slide .login-slide-right .cell").val()))){
		$(".login-slide .login-slide-right .cell").css({color:"#f00"});
		$(".login-slide .login-slide-right .cell-error").css({color:"#f00",display:"block"});
		$(".login-slide .login-slide-right .cell-error").html("请输入有效的电子邮箱/手机号码!");
	}else{
		$(".login-slide .login-slide-right .cell").css({color:"#000"});
		$(".login-slide .login-slide-right .cell-error").html("&nbsp;");
	}
});
//登录 密码验证
$(".login-slide .login-slide-right .pwd").blur(function(){
	if(!(/^.{6,12}$/.test($(".login-slide .login-slide-right .pwd").val()))){
		$(".login-slide .login-slide-right .pwd").css({color:"#f00"});
		$(".login-slide .login-slide-right .pwd-error").css({color:"#f00",display:"block"});
		$(".login-slide .login-slide-right .pwd-error").html("密码必须在6-12个字符之间!");
	}else{
		$(".login-slide .login-slide-right .pwd").css({color:"#000"});
		$(".login-slide .login-slide-right .pwd-error").html("&nbsp;");
	}
});

//注册 手机号码验证
$(".reg-slide .cell-phone").blur(function(){
	if(!(/^1[3456789]\d{9}$/.test($(".reg-slide .cell-phone").val()))){
		$(".reg-slide .cell-phone").css({color:"#f00"});
		$(".reg-slide .cell-error").css({color:"#f00",display:"block"});
		$(".reg-slide .cell-error").html("请输入11位有效中国手机号码!");
	}else{
		$(".reg-slide .cell-phone").css({color:"#000"});
		$(".reg-slide .cell-error").html("&nbsp;");
	}
});
//注册 密码验证
$(".reg-slide .cell-pwd").blur(function(){
	if(!(/^.{6,12}$/.test($(".reg-slide .cell-pwd").val()))){
		$(".reg-slide .cell-pwd").css({color:"#f00"});
		$(".reg-slide .pwd-error").css({color:"#f00",display:"block"});
		$(".reg-slide .pwd-error").html("密码为6-12位字符!");
	}else{
		$(".reg-slide .cell-pwd").css({color:"#000"});
		$(".reg-slide .pwd-error").html("&nbsp;");
	}
});
//注册 邮箱验证
$(".reg-slide .cell-email").blur(function(){
	if(!(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test($(".reg-slide .cell-email").val()))){
		$(".reg-slide .cell-email").css({color:"#f00"});
		$(".reg-slide .email-error").css({color:"#f00",display:"block"});
		$(".reg-slide .email-error").html("请输入有效的电子邮箱地址!");
	}else{
		$(".reg-slide .cell-email").css({color:"#000"});
		$(".reg-slide .email-error").html("&nbsp;");
	}
});
//注册 确认密码验证
$(".reg-slide .cell-repwd").blur(function(){
	if(!($(this).val() == $(".reg-slide .cell-pwd").val())){
		$(".reg-slide .cell-repwd").css({color:"#f00"});
		$(".reg-slide .repwd-error").css({color:"#f00",display:"block"});
		$(".reg-slide .repwd-error").html("抱歉,两次输入的密码不匹配!");
	}else{
		$(".reg-slide .cell-repwd").css({color:"#000"});
		$(".reg-slide .repwd-error").html("&nbsp;");
	}
});
//注册 验证码验证
$(".reg-slide .cell-code").blur(function(){
	if($(this).val() == "" || !(/^.{6}$/.test($(this).val()))){
		$(".reg-slide .code-error").css({color:"#f00",display:"block"});
		$(".reg-slide .code-error").html("您填写的短信验证码有误,请重新输入!");
	}else if(/^.{6}$/.test($(this).val())){
		$(".reg-slide .code-error").css({display:"none"});
	}
});

//注册账户 添加数据库
$(".reg-slide .click-reg").click(function(){
	if($("._agree").hasClass("check-choose")){
		let $tel = $(".reg-slide .cell-phone").val(); // 手机号码
		let $pwd = $(".reg-slide .cell-pwd").val(); // 密码
		let $email = $(".reg-slide .cell-email").val(); // 邮箱
		let $sex = $(".reg-slide .sex-choose span").html(); // 性别
		let $year = $(".reg-slide .select-box1 span").html(); // 年
		let $month = $(".reg-slide .select-box2 span").html(); // 月
		let $date = $(".reg-slide .select-box3 span").html(); // 日
		let $birday = $year + '-' + $month + '-' + $date;

		if($tel=="" || $pwd=="" || $email=="" || $sex==""){
			alert("请输入完整信息注册!");
		}else{
			$.ajax({
				url:"php/reg.php",
				data:{
					tel:$tel,
					pwd:$pwd,
					email:$email,
					sex:$sex,
					birday:$birday
				},
				success:function(resText){
					if(resText == '1'){
						alert("用户已存在！");
						// $(".header_slide_reg").slideUp();
						// $(".header_slide_login").slideDown();
					}else if(resText == '0'){
						alert("注册成功！");
						$(".header_slide_reg").slideUp();
						$(".header_slide_login").slideDown();
					}
				},
				type:"post"
			});
		}
		
	}else{
		alert("您未勾选同意匡威隐私政策及使用规则!");
	}
});

//登录账户
$(".login-slide .click-login").click(function(){
	if($(".agree").hasClass("check-choose")){
		let $tel = $(".login-slide .cell").val(); // 手机号码
		let $pwd = $(".login-slide .pwd").val(); // 密码
		
		$.ajax({
			url:"php/login.php",
			data:{
				tel:$tel,
				pwd:$pwd
			},
			success:function(resText){
				if(resText.charAt(0) == '1'){
					// alert("登录成功！"); // 这里是登录成功页面
					$("header").load("header-login.html", function(){
						$("header #tel-name").html("欢迎您," + resText.substring(1, resText.length));
						$(".header_slide_login").slideUp();
						localStorage.setItem('user', resText.substring(1, resText.length));
						
						//退出账户
						$("header #logout").click(function(){
							localStorage.clear(); // 清除localstorage
							$(location).attr("href", "index.html");
						});
					});
				}else if(resText.charAt(0) == '0'){
					alert("用户不存在或密码错误！");
					$(".login-slide-right .cell").val("");
					$(".login-slide-right .pwd").val("");
				}
			},
			type:"post"
		});
	}else{
		alert("您未勾选同意匡威隐私政策及使用规则!");
	}
});