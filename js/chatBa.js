//聊聊吧
	ChatImg($("#chatImg").get(0));
	function ChatImg(oBallLeft){
		// let oBallLeft = document.getElementById("chatImg");
		oBallLeft.style.top = window.innerHeight/2 - oBallLeft.offsetHeight/2 - oBallLeft.offsetHeight + "px"; //初始位置
		
		let time = null;
		let _topLeft = null;
		window.onscroll = function(){
			let _top = document.body.scrollTop || document.documentElement.scrollTop;
			// console.log(_top);
			_topLeft = _top + window.innerHeight/2 - oBallLeft.offsetHeight/2 - oBallLeft.offsetHeight;
			startMove(oBallLeft, _topLeft);
		}
		
		function startMove(obj,target){
			clearInterval(time);
			time = setInterval(function(){
				let speed = (target-obj.offsetTop)/10;
				speed =  speed>0 ? Math.ceil(speed) : Math.floor(speed);//核心算法
				obj.style.top = obj.offsetTop + speed + "px";
				if(obj.offsetTop == Math.floor(target)){
					obj.offsetTop = Math.floor(target);
					clearInterval(time);
				}
			},20);
		}
	}