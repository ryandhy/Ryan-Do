// //轮播图
// 	class Banner {
// 		constructor(obj) {
// 			this.box = obj.box;
// 			this.btnLeft = obj.btnLeft;
// 			this.btnRight = obj.btnRight;
// 			this.oLi = obj.oLi;
// 			this.time = obj.time;
// 			this.index = 0;
// 			this.autoPlay();
// 			this.bindEvent();
// 		}
		
// 		// 自动播放
// 		autoPlay() {
// 			// console.log(this);
// 			this.time = setInterval(() => {
// 				this.index++;
// 				if (this.index > 5) {
// 					this.index = 0;
// 				}
// 				this.changeImg(this.index);
// 			}, 1000)
// 		}
		
// 		// 事件
// 		bindEvent() {
// 			let that = this;
// 			// 点击右箭头
// 			this.btnRight.click(() => {
// 				clearInterval(this.time);
// 				this.index++;
// 				if (this.index > 5) {
// 					this.index = 0;
// 				}
// 				this.changeImg(this.index);
// 			});
// 			// 点击左箭头
// 			this.btnLeft.click(() => {
// 				clearInterval(this.time);
// 				console.log(this);
// 				this.index--;
// 				if (this.index < 0) {
// 					this.index = 5;
// 				}
// 				this.changeImg(this.index);
// 			});
			
// 			// 点击豆豆
// 			// this.oLi.click(function () {
// 			// 	that.changeImg($(this).index())
// 			// });
			
// 			// 鼠标移入事件
// 			that.box.mouseover(function () {
// 				clearInterval(that.time);
// 			});
			
// 			// 鼠标移出事件
// 			that.box.mouseout(function () {
// 				that.autoPlay();
// 			});
// 		}
// 		// 改变图片和豆豆的颜色
// 		changeImg(ord) {
// 			this.box.css({
// 				'backgroundImage': 'url(img/' + ord + '.jpg)'
// 			});
// 			// this.oLi.css({
// 			// 	'textDecoration': 'overline',
// 			// 	'fontWeight': 'bold'
// 			// });
// 			this.oLi.removeClass('active');
// 			this.oLi.eq(ord).addClass('active');
// 		}
// 	}
// 	let obj = {
// 		box: $('.banner'),
// 		btnLeft: $('#btnLeft'),
// 		btnRight: $('#btnRight'),
// 		oLi: $('.tabs li'),
// 		time: null
// 	}
// 	let b = new Banner(obj);


$.fn.slide = function(){
    let slideEle = $(this);

    let slideContent = slideEle.find('.slide-content');
    // let slideNavLi = slideEle.find('.slide-nav li');
	let slideNavLi = $(".tabs").find('.slide-nav li');
    let slideWidth = slideEle.width(); //显示窗口宽度
    let timer = null;   //定时器
    let time = 2000;    //轮播图切换事件(毫秒)
    let index = 0;  //当前索引值
    let oldLength = slideEle.find('.slide-item').length;    //item初始长度
    let length = oldLength*2;   //item复制后的长度 

    init();
 
    //初始化
    function init(){
        //将item复制一份加入到原item的后面，形成:原1、原2、原3、原4、...原末、复1、复2、复3、复4...复末,并定位到复1项
        index = oldLength;
        slideContent.append(slideContent.html()).css({width:slideWidth*length,left:-slideWidth*index});

        //鼠标悬浮事件
        slideEle.hover(function(){  //移除定时任务
            clearInterval(timer);
        },function(){   //添加定时任务    
            setTimer();
        });

        //按钮点击事件
        slideEle.find('.prev').click(function(){
            if(!slideContent.is(':animated')){
                index--;
                change();
            }

        }).end()
        .find('.next').click(function(){
            if(!slideContent.is(':animated')){
                index++;
                change();
            }   
        });

        //导航点点击事件委托
        // slideNavLi.click(function(event){
        //     index = $(event.target).index()+oldLength;
        //     change();
        // });

        setTimer();
    }
    //设置定时器
    function setTimer(){
		clearInterval(timer);
        timer = setInterval(function(){
            index++;
            change();
        },time);
    }

    function change(){
        changeSlide();
        changeNav();
    }

    //轮播图切换
    function changeSlide(){
        slideContent.animate({left:-slideWidth*index},500,function(){
            //原1、原2、原3、原4、...原末、复1、复2、复3、复4...复末
            if(index <= 0){ 
                //当定位到原1时，在回调函数中将slideContent瞬间定位到复1
                index = oldLength;
                slideContent.css({left:-slideWidth*index});

            }
            if(index >=length-1){
                //当定位到复末时，在回调中将slideContent瞬间定位到原末
                index = oldLength-1;
                slideContent.css({left:-slideWidth*index}); 
            }
        });
    }
    //导航点切换
    function changeNav(){
        slideNavLi.removeClass('active').eq(index%oldLength).addClass('active');
    }
}
