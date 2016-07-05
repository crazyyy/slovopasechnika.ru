"use strict";!function(n){n.fn.PhotoEnlarger=function(i){var t=this,e={max_width:null,max_width_container:null,caption_fadein_speed:500,caption_fadeout_speed:500,enlarge_speed:300,shrink_speed:300,add_caption_function:null};return t.options=n.extend(e,i),t.enlarge=function(i){var a=i.find("img:first"),o=n('<div class="thumb-large">'),d=n("<img>");d.attr("src",a.data("large_photo")),d.imagesLoaded().done(function(){var h=d[0].width,c=d[0].height,p=n('<div class="caption"><p></p></caption>'),s=n('<div class="state-icon">'),f=a.data("caption"),r=h,u=c;"undefined"!=typeof i.max_width&&"undefined"!=typeof i.max_height?(r=i.max_width,u=i.max_height):(null===t.options.max_width_container?r=i.parent().parent().width():t.options.max_width_container instanceof n&&(r=t.options.max_width_container.width()),h>r&&(u=c*(r/h)),null!==e.max_width&&(r=e.max_width),i.max_width=r,i.max_height=u,i.width=a[0].width,i.height=a[0].height),o.hide(),o.css({width:i.width,height:i.height}),o.append(d).append(s),i.append(o),o.show(),o.animate({width:r,height:u,marginLeft:-(r/4)},t.options.enlarge_speed,function(){"function"==typeof t.options.add_caption_function?t.options.add_caption_function(p,f,o,t):"undefined"!=typeof f&&""!==f&&(p.find("p:first").html(f),o.append(p),o.hover(function(){p.fadeIn(t.options.caption_fadein_speed)},function(){p.fadeOut(t.options.caption_fadeout_speed)})),d.click(function(){t.shrink(i)}),s.click(function(){t.shrink(i)})})})},t.shrink=function(n){var i=n.find(".thumb-large:first"),e=i.find(".caption:first"),a=function(){i.animate({width:n.width,height:n.height,marginLeft:0},t.options.shrink_speed,function(){i.remove()})};0===e.length?a():e.fadeOut(100,a)},t.each(function(){var i=n(this),e=i.find("img:first"),a=n('<div class="state-icon">'),o=e.data("large_photo"),d=new Image;return d.src=o,a.click(function(){t.enlarge(i)}),e.click(function(){t.enlarge(i)}),i.append(a),i})}}(jQuery);
//# sourceMappingURL=maps/jquery-photo-enlarger.js.map