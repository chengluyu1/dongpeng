///小方块
    $(".column_Piece .box").each(function () {
        $(this).find("dl").bind("mouseover", function () {
            $(this).stop().animate({ "margin-top": "-167px" }, 500);
            $(this).parent().siblings().addClass("on") ;
        })
        $(this).find("dl").bind("mouseleave", function () {
            $(this).stop().animate({ "margin-top": "0" }, 500);
            $(this).parent().siblings().removeClass("on") ;
        })
    });
//工程客户
	$(".h-case dd").each(function (i, item) {
		if (Number(i + 1) % 3 == 0) {
			$(this).addClass("end");
		}
	});
	  $(".h-case dd").bind("mouseover",function(){
	         $(this).find(".txt").stop().animate({height:120},200);
			 $(this).find(".txt").addClass("on");
	  })
	  $(".h-case dd").bind("mouseleave",function(){
	         $(this).find(".txt").stop().animate({height:30},200);
			 $(this).find(".txt").removeClass("on");
	  })
//家庭装修
	  $(".h-family li").bind("mouseover",function(){
		  var w2=$(this).find("img").width();
		  var h2=$(this).find("img").height();
	      $(this).find("img").stop().animate({width:w2+20,height:h2+20},200);
	  })
	  $(".h-family li").bind("mouseleave",function(){
		  $(this).find("img").attr("style","");
	  })

////
