$(function(){
		var _w = document.documentElement.clientWidth;
		var _fontsize = (_w / 640) * 20;
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = 'body{font-size:' + _fontsize + 'px}';
		document.getElementsByTagName('head').item(0).appendChild(style);
		 
	})();
	$(function(){
		$(".cirle").click(function(){
			$(".cirle").find("img").css("background-color","#fff")
			var indx=$(this).parents("li").find(".shopCarts");
			$(".cirle").find("img").attr("src","images/icons/more.png");
			$(this).find("img").attr("src","images/icons/morea.png"); 
			if($(indx).hasClass("hide")){
				$(".shopCarts").addClass("hide");
	 			$(indx).removeClass("hide");
	 		}else{
	 			$(indx).addClass("hide");
	 			$(".cirle").find("img").attr("src","images/icons/more.png");
	 		}
		});
	});
$(document).ready(function(){
	touch.on('#home2', 'tap', function(ev){
			 $('#home2').attr('class','home1');
			 $('#store1').attr('class','store1');
			 $('#nations1').attr('class','nations1');
			 $('#account1').attr('class','account1');
		 });
		 touch.on('#store1', 'tap', function(ev){
			 $('#home2').attr('class','home1');
			 $('#store1').attr('class','store2');
			 $('#nations1').attr('class','nations1');
			 $('#account1').attr('class','account1');
			 
		 });
		 touch.on('#nations1', 'tap', function(ev){
			 $('#home2').attr('class','home1');
			 $('#store1').attr('class','store1');
			 $('#nations1').attr('class','nations2');
			 $('#account1').attr('class','account1');
			 
		 });
		 touch.on('#account1', 'tap', function(ev){
			 $('#home2').attr('class','home1');
			 $('#store1').attr('class','store1');
			 $('#nations1').attr('class','nations1');
			 $('#account1').attr('class','account2');
			 
		 });
		 touch.on('#menuNav ul li', 'tap', function(ev){
			$("#menuNav ul li").removeClass('choseM');
			$(this).addClass('choseM');
		 });
		touch.on('#menus', 'tap', function(ev){
			  $(".leftMenu").removeClass("hide");
			  $(".leftMenu").removeClass("choses");
			 
		 });
		 touch.on('#colse', 'tap', function(ev){
			  $(".leftMenu").addClass("choses");
			  
			 
		 });
	});