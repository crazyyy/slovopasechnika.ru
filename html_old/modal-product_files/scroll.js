$(document).ready(function(){$("._scollable").click(function(event){event.preventDefault();var dest=0;if($(this.hash).offset().top>$(document).height()-$(window).height()){dest=$(document).height()-$(window).height()-50;}else{dest=$(this.hash).offset().top-50;}$('html,body').animate({scrollTop:dest},1000,'swing');});});