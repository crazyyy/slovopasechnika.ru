$(document).ready(function(){$("._scollable").click(function(t){t.preventDefault();var e=0;e=$(this.hash).offset().top>$(document).height()-$(window).height()?$(document).height()-$(window).height()-50:$(this.hash).offset().top-50,$("html,body").animate({scrollTop:e},1e3,"swing")})});
//# sourceMappingURL=maps/scroll.js.map
