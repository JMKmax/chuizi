var aLi = document.querySelectorAll('.header .header-nav li');
var aBox = document.querySelectorAll('.header .header-item>li');
for(var i = 0;i<aLi.length;i++){
	aLi[i].index = i;
	aLi[i].onmouseover = function(){
		for(var j = 0; j<aBox.length;j++){
			aBox[j].style.display = 'none';
		}
		aBox[this.index].style.display = 'block';
	}
	aLi[i].onmouseout = function(){
		aBox[this.index].style.display = 'none';
	}
	
}