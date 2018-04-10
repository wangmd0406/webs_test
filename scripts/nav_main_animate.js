// JavaScript Document
window.onload=function(){
	var coninter=document.querySelector('.container');
	var buttons=document.querySelector('.con_buttons').getElementsByTagName('span');
	var next=document.getElementById('next');
	var prev=document.getElementById('prev');
	var list=document.querySelector('.list');
	var index=1;
	
	function animate(offset){
		var oldOffset=parseInt(list.style.left);
		list.style.left=oldOffset+offset+'px';
		
		
	}
	function activeButtons(){
		for(var i=0;i<buttons.length;i++){
			buttons[i].className='';
		}
		buttons[index-1].className='active';
		
	}
	prev.onclick=function(){
		if(parseInt(list.style.left)===0){
			list.style.left=-4680+'px';
		}
		else{
			animate(936);
		}
		if(index===1){
			index=6;
		}
		else{
			index--;
		}
		activeButtons();
	};
	var nextAnimated=next.onclick=function(){
		if(parseInt(list.style.left)===(-4680)){
			list.style.left=0;
		}
		else{
			animate(-936);
		}
		
		if(index===6){
			index=1;
		}
		else{
			index++;
		}
		activeButtons();
	};
	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			var myIndex=this.getAttribute('index');
			var offset=(myIndex-index)*-936;
			index=myIndex;
			animate(offset);
			activeButtons();
		};
	}
	var animated=setInterval(nextAnimated,3000);
	coninter.onmouseover=function(){
		clearInterval(animated);
	};
	coninter.onmouseout=function(){
		animated=setInterval(nextAnimated,3000);
	};
};