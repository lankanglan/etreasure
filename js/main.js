;(function(){
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
		$(".sharebtn").click(function(){
			 $(".share").removeClass("hide");
			 $(this).css("color","#6f1c23");
		});
		$(".cancelbtn").click(function(){
			 $(".share").addClass("hide");
			 $(".sharebtn").css("color","#898989");
		});
		

	});

$(document).ready(function(){
	touch.on('#home1', 'tap', function(ev){
			 $('#home1').attr('class','home1');
			 $('#store1').attr('class','store1');
			 $('#nations1').attr('class','nations1');
			 $('#account1').attr('class','account1');
			 
		 });
		 touch.on('#store1', 'tap', function(ev){
			 $('#home1').attr('class','home2');
			 $('#store1').attr('class','store2');
			 $('#nations1').attr('class','nations1');
			 $('#account1').attr('class','account1');
			 
		 });
		 touch.on('#nations1', 'tap', function(ev){
			 $('#home1').attr('class','home2');
			 $('#store1').attr('class','store1');
			 $('#nations1').attr('class','nations2');
			 $('#account1').attr('class','account1');
			 
		 });
		 touch.on('#account1', 'tap', function(ev){
			 $('#home1').attr('class','home2');
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
			  	 $(".leftMenu").addClass("leftMenubg");	 
		 });
		 touch.on('#colse', 'tap', function(ev){
			  $(".leftMenu").addClass("choses");
			   $(".leftMenu").removeClass("leftMenubg");
			    });
		 touch.on('#favor', 'tap', function(ev){
			  $(this).toggleClass('favora');
		 });
		 touch.on('#vote', 'tap', function(ev){
			  $(this).toggleClass('votea');
		 });

		 touch.on('.adds', 'tap', function(ev){
			  var nu = $(this).parents("p").find(".nubs").val();
			  var nuit = parseInt(nu)+1;
			  $(this).parents("p").find(".nubs").val(nuit);
		 });
		 touch.on('.subt', 'tap', function(ev){
			  var nu = $(this).parents("p").find(".nubs").val();
			  if(parseInt(nu)>0){
				  var nuit = parseInt(nu)-1;
				  $(this).parents("p").find(".nubs").val(nuit);
			  }
		 });
		 touch.on('#buts', 'tap', function(ev){
			  $(this).css("background-color","#666666");
			  $(this).css("border","1px solid #666666");
		 });
		 touch.on('#addToc', 'tap', function(ev){
		 	$(this).css("color","#6f1c23");
		 	  $(".cartnub").css("display","block");
			  var nu = $(".cartnub").text();
			  var nuit = parseInt(nu)+1;
			  $(".cartnub").text(nuit);
		 });

	 touch.on('#guan', 'tap', function(ev){
		var parents = $(this).parents(".popup");
		 $(parents).remove();
	});


	});