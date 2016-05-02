/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


/* for service garrlery */
$(function(){
				$(".dark-background").click(function(){
                    $(".dark-background").fadeOut();
                    $(".large-image-area").fadeOut();
					$("#newSrc").attr("src","");
					
                });	
				$("img").click(function(){
					var imgSrc =   $(this).attr("src");
					$(".dark-background").fadeIn();
					$(".large-image-area").fadeIn();
					$("#newSrc").attr("src",imgSrc);
				
				});
				
				
				
				
			});
			