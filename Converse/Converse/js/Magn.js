class Magn{
	constructor(newSmallBox,newBigBox,newMark) {
		this.oSmallBox = newSmallBox;
		this.oBigBox = newBigBox;
		this.oMark = newMark;
	}
	
	onmouseover(){
		let that = this;
		this.oSmallBox.onmouseover = function(){
			that.oBigBox.style.display = "block";
			that.oMark.style.display = "block";
		}
	}
	
	onmouseout(){
		let that = this;
		this.oSmallBox.onmouseout = function(){
			that.oBigBox.style.display = "none";
			that.oMark.style.display = "none";
		}
	}
	
	onmousemove(){
		let that = this;
		this.oSmallBox.onmousemove = function(evt){
			let e = evt || event;
			let left = e.pageX-that.oSmallBox.offsetLeft-that.oMark.offsetWidth/2;
			let top = e.pageY-that.oSmallBox.offsetTop-that.oMark.offsetHeight/2;
			
			if(left<0){
				left = 0;
			}
			let maxLeft = that.oSmallBox.offsetWidth-that.oMark.offsetWidth;
			if(left>maxLeft){
				left = maxLeft;
			}
			
			if(top<0){
				top = 0;
			}
			let maxTop = that.oSmallBox.offsetHeight-that.oMark.offsetHeight;
			if(top>maxTop){
				top = maxTop;
			}
			
			that.oMark.style.left = left + "px";
			that.oMark.style.top = top + "px";
			
			let x = that.oBigBox.offsetWidth*left/that.oMark.offsetWidth;
			let y = that.oBigBox.offsetHeight*top/that.oMark.offsetHeight;
			
			that.oBigBox.style.backgroundPositionX = -x + "px";
			that.oBigBox.style.backgroundPositionY = -y + "px";
		}
	}
}

let oSmallBox = document.getElementsByClassName("smallbox")[0];
let oBigBox = document.getElementsByClassName("bigbox")[0];
let oMark = document.getElementsByClassName("mark")[0];

let m = new Magn(oSmallBox,oBigBox,oMark);
m.onmouseover();
m.onmouseout();
m.onmousemove();