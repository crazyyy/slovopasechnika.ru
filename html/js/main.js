$(document).ready(function(){$(window).scroll(function(e){$(window).scrollTop()>14?$(".header").addClass("fixed"):$(".header").removeClass("fixed")})}),$(function(){$(".selected").click(function(e){var l=$(this).parent().find(".options");l.toggle(),e.preventDefault()}),$(document).bind("click",function(e){var l=$(e.target);l.parents().hasClass("menu")||$(".options").hide()})}),$(function(){$("a[data-modal]").on("click",function(){var e=$(this).data("modal");return $("#"+e).jmodal(),!1})}),$(function(){$(".altay-detail__left-colunm__small-img img").on("click",function(){var e=$(this).attr("src");return e=e.replace(".jpg","_big.jpg"),$(".altay-detail__left-colunm__big-img").find("img").attr("src",e),!1}),$(".grech-detail__left-colunm__small-img img").on("click",function(){var e=$(this).attr("src");return e=e.replace(".jpg","_big.jpg"),$(".grech-detail__left-colunm__big-img").find("img").attr("src",e),!1}),$(".dyagil-detail__left-colunm__small-img img").on("click",function(){var e=$(this).attr("src");return e=e.replace(".jpg","_big.jpg"),$(".dyagil-detail__left-colunm__big-img").find("img").attr("src",e),!1}),$(".design-block__left-column__img-block-small img").on("click",function(){var e=$(this).attr("src");return e=e.replace(".jpg","_big.jpg"),$(".design-block__left-column__img-big").attr("src",e),!1})}),$(document).on("click","._call_me_send",function(){return""==$("#phones_0").val()?(alert("Необходимо указать номер телефона"),!1):($.ajax({type:"GET",url:"/sendData",data:{type:"call-me",phone:$("#phones_0").val()},success:function(e){$("#phones_0").val(""),$("#call-me-button").prop("checked",!1),$.jmodal.close(),$("#thanks").jmodal()},error:function(e){alert(e.responseText)}}),!1)}),$(document).on("click","._letter_top_link",function(){return""==$("._letter_top_email").val()?(alert("Необходимо указать email"),!1):($.ajax({type:"GET",url:"/sendData",data:{type:"letter-top",email:$("._letter_top_email").val()},success:function(e){$("._letter_top_email").val(""),$.jmodal.close(),$("#thanks").jmodal()},error:function(e){alert(e.responseText)}}),!1)}),$(document).on("click","._subscribe_link",function(){return""==$("._subscribe_text").val()?(alert("Необходимо указать email"),!1):($.ajax({type:"GET",url:"/sendData",data:{type:"subscribe",email:$("._subscribe_text").val()},success:function(e){$("._subscribe_text").val(""),$.jmodal.close(),$("#thanks").jmodal()},error:function(e){alert(e.responseText)}}),!1)}),$(document).on("click","._super_call",function(){return""==$("#phones_1").val()?(alert("Необходимо указать номер телефона"),!1):""==$("._super_call_email").val()?(alert("Необходимо указать email"),!1):($.ajax({type:"GET",url:"/sendData",data:{type:"super",phone:$("#phones_1").val(),email:$("._super_call_email").val()},success:function(e){$("._super_call_email").val(""),$("#phones_1").val(""),$.jmodal.close(),$("#thanks").jmodal()},error:function(e){alert(e.responseText)}}),!1)}),$(document).on("click","._wooden_call",function(){return""==$("#phones_2").val()?(alert("Необходимо указать номер телефона"),!1):""==$("._wooden_call_email").val()?(alert("Необходимо указать email"),!1):($.ajax({type:"GET",url:"/sendData",data:{type:"wooden",phone:$("#phones_2").val(),email:$("._wooden_call_email").val()},success:function(e){$("._wooden_call_email").val(""),$("#phones_2").val(""),$("#wooden-call-me-button").prop("checked",!1),$.jmodal.close(),$("#thanks").jmodal()},error:function(e){alert(e.responseText)}}),!1)});
//# sourceMappingURL=maps/main.js.map