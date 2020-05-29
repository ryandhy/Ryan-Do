$(function(){
	$("icon-left-plus").click(function(){
		let num=$(this).prev().html();//获取数量
		num++;
		$(this).prev().html(Number(num));
		let buynum = $(this).prev().html();//获取增加过后的数量
		let perice = $(this).parent().parent().parent().prev().html();
		
	
	
	})
})