function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
function getScrollLeft(){
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
}

hadleScroll();
handCarousel();
handleCar();


function hadleScroll(){
	var oTop1 = document.querySelector('.top .top1');
	var oTop2 = document.querySelector('.top .top2');
	var oTop3 = document.querySelector('.top .top3');
	var oTop2Nav = document.querySelector('.top2 .content .nav');
	var oImg3 = document.querySelectorAll('.main .picture img')[2];


	window.onscroll = function(){
		if(getScrollTop() >=100){
			// oTop1.style.height = 0 + 'px';
			animateTop(oTop1,{height:0});
			oTop1.style.overflow = 'hidden';
			animateTop(oTop2,{top:0});
			//oTop2.style.top = 0 + 'px';
			// oTop3.style.height = 40 + 'px';

			animateTop(oTop3,{height:40});
			// animateTop(oTop3,{top:40});
			//oTop3.style.top = 40 + 'px';
			// oTop2.style.position = 'fixed';

		}else{
			// oTop1.style.height= 100 + 'px';
			animateTop(oTop1,{height:100});
			oTop1.style.overflow = 'visible';
			animateTop(oTop3,{height:0});
			animateTop(oTop2,{top:100});
			// oTop3.style.height = 0;
			// oTop2.style.top = 100 + 'px';
		}

		if(getScrollTop() >=110){
			oTop2Nav.style.paddingLeft = '162px';		
		}else{
			oTop2Nav.style.paddingLeft = 0;		
		}

		// if(oImg3.offsetTop < 0){
		// 	oTop2.style.backgroundColor = '#fff';

		// }
		if(getScrollTop() >=2600){
			oTop2.style.backgroundColor = '#fff';
			oTop3.style.backgroundColor = '#fff';
			oTop2.style.boxShadow = '0px 2px 3px rgba(200,200,200,0.9)';
			oTop3.style.boxShadow = '0px 2px 3px rgba(200,200,200,0.9)';
		}else{
			oTop2.style.backgroundColor = '#212750';
			oTop3.style.backgroundColor = '#212750';
			oTop2.style.boxShadow = '0px 2px 3px rgba(0,0,0,0.3)';
			oTop3.style.boxShadow = '0px 2px 3px rgba(0,0,0,0.3)';
			
		}
		console.log(getScrollTop());
	}
}


function handCarousel(){
	new Carousel({
		id:'carousel1',
		img:['images/shurufa1.jpg',
			'images/shurufa2.jpg',
			'images/shurufa3.jpg',
			],
		width:282,
		height:568,
		playDuration:3000,
	});

	new Carousel({
		id:'carousel2',
		img:['images/gengduoshengji1-1.jpg',
			'images/gengduoshengji1-2.jpg',
			'images/gengduoshengji1-3.jpg',
			],
		width:282,
		height:568,
		playDuration:3000,
	});

	new Carousel({
		id:'carousel3',
		img:['images/gengduoshengji3-1.png',
			'images/gengduoshengji3-2.jpg',
			],
		width:282,
		height:568,
		playDuration:3000,
	});
}


function handleCar(){
	var oCar = document.querySelector('.top1 .content .top1-shop .car')
	var oCarList = document.querySelector('.shop-list');
	var hideCarTimer = 0;

	oCar.onmouseenter = oCarList.onmouseenter = function(){
		oCarList.style.display = 'block';
		clearTimeout(hideTimer);
	}
	oCar.onmouseleave = oCarList.onmouseleave = function(){
		hideTimer = setTimeout(hide,500);
	}
	// oCarList.onmouseenter = function(){
		
	// 	oCarList.style.display = 'block';
	// 	clearTimeout(hideTimer);
	// }
	// oCarList.onmouseleave = function(){
	// 	hideTimer = setTimeout(hide,500);
	// }
	function hide(){
		oCarList.style.display = 'none';
	}
}