// JavaScript Document
$(function(){
		function prevent(e){
			e.preventDefault();
			};
			var menuNavs ,openFlag = true,popMenus = $(".popMenus"),menuContent; 			
			$(".menuNavs li").on("click",function(){
						var index = $(this).index();
                    	$(this).addClass("on").siblings().removeClass("on");
						$(".menuContent").eq(index).show().siblings().hide();
						var element =this;
						menuNavs.scrollToElement(element,500);
						menuContent.destroy();
						menuContent = new IScroll('.menuContents',{mouseWheel:true,preventDefault:false,useTransform:true});
				})
			$(".menuNavs li").eq(0).addClass("on");
			$(".menuContent").eq(0).show().siblings().hide();
			$(".showMenuBtn,.xmdq").on("click",function(){
									if($(this).hasClass("showMenu")){
											$(this).addClass("show");
										}
									popMenus.addClass("show");
									menuNavs = new IScroll('.menuNavs',{mouseWheel:true,preventDefault:false,useTransform:true});
									menuContent = new IScroll('.menuContents',{mouseWheel:true,preventDefault:false,useTransform:true});
									if(document.addEventListener){
										document.addEventListener('touchmove',prevent,false);	
										}
									else {
											document.attachEvent('ontouchmove',prevent);
										}
				});
			$(".closePopMenu").on("click",function(){
					if($(".showMenuBtn").hasClass("show")){
							$(".showMenuBtn").removeClass("show")
						}
					popMenus.removeClass("show");
					if(document.removeEventListener){
										document.removeEventListener('touchmove',prevent,false);	
										}
									else {
											document.detachEvent('ontouchmove',prevent);
										}	
				})	;
			$(window).on("load scroll",function(){
					var scrollT = $(window).scrollTop();
					popMenus.css({top:scrollT+'px'});
				})
	})