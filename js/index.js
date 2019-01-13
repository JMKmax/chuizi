handleShop();
handleContent();
function handleShop(){
	var oBox = document.querySelector('.top .user-box');
	var oBag = document.querySelector('.top .user .fa-shopping-bag');
	var oShop = document.querySelector('.top .user-box .shop');
	var oLoader = document.querySelector('.top .user-box .loader')
	var delayTime = 0;
	oBag.onmouseenter = function(){
		clearTimeout(delayTime);
		oLoader.style.display = 'block';
		oBox.style.border = '1px solid #000';
		pack(oBox,{height:296},true,function(){
			oLoader.style.display = 'none';
			oShop.style.display = 'block';
		})
	}
	oBag.onmouseleave = oBox.onmouseleave = function(){
		delayTime = setTimeout(function(){
			pack(oBox,{height:0},true,function(){
			oShop.style.display = 'none';
			oBox.style.border = 'none';
			})
		},500)	
	}
	oBox.onmouseenter = function(){
		clearTimeout(delayTime);
	}
}

function handleContent(){
	var oContent = document.querySelectorAll('.header .header-nav .header-nav-item');
	var oContentLink = document.querySelector('.header .header-content');
	var Timer = 0;
	for(var i = 0;i<oContent.length-3;i++){
		oContent[i].index = i;
		oContent[i].onmouseenter = function(){
			clearTimeout(Timer);
			oContentLink.style.borderTop = '1px solid #808080';
			pack(oContentLink,{height:275},true)
			loadDate(this.index)
		}
		oContent[i].onmouseleave = function(){
			Timer = setTimeout(function(){
				pack(oContentLink,{height:0},true,function(){
				oContentLink.style.borderTop = 'none';
				})
			},500)	
		}
	}
	oContentLink.onmouseenter = function(){
		clearTimeout(Timer);
	}
	oContentLink.onmouseleave = function(){
		Timer = setTimeout(function(){
			pack(oContentLink,{height:0},true,function(){
			oContentLink.style.borderTop = 'none';
			})
		},500)
	}
	function loadDate(index){
		var date = aContent[index];
		var html = '<ul>';
		for(var i = 0;i<date.length;i++){
			html+= '<li class="header-content-item">';
			html+= '	<a href="'+date[i].src+'">';
			html+= '		<img src="'+date[i].img+'" alt="">';
			html+= '		<p class="phone-nav-name">'+date[i].name+'</p>';
			html+= '		<p class="phone-nav-price">'+date[i].price+'<span>起</span></p>';
			html+= '	</a>';
			html+= '</li>';
		}
		html += '</ul>';
		oContentLink.innerHTML = html;
	}
}
