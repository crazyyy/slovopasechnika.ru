$(document).ready(function(){$(window).scroll(function(e){if($(window).scrollTop()>14){$('.header').addClass('fixed');}else{$('.header').removeClass('fixed');}});});$(function(){$('.selected').click(function(e){var list=$(this).parent().find('.options');list.toggle();e.preventDefault();});$(document).bind('click',function(e){var clicked=$(e.target);if(!clicked.parents().hasClass('menu'))$('.options').hide();});});$(function(){$('a[data-modal]').on('click',function(){var id=$(this).data('modal');$('#'+id).jmodal();return false;});});$(function(){$('.altay-detail__left-colunm__small-img img').on('click',function(){var src=$(this).attr('src');src=src.replace(".jpg","_big.jpg");$('.altay-detail__left-colunm__big-img').find('img').attr('src',src);return false;});$('.grech-detail__left-colunm__small-img img').on('click',function(){var src=$(this).attr('src');src=src.replace(".jpg","_big.jpg");$('.grech-detail__left-colunm__big-img').find('img').attr('src',src);return false;});$('.dyagil-detail__left-colunm__small-img img').on('click',function(){var src=$(this).attr('src');src=src.replace(".jpg","_big.jpg");$('.dyagil-detail__left-colunm__big-img').find('img').attr('src',src);return false;});$('.design-block__left-column__img-block-small img').on('click',function(){var src=$(this).attr('src');src=src.replace(".jpg","_big.jpg");$('.design-block__left-column__img-big').attr('src',src);return false;});});$(document).on('click','._call_me_send',function(){if($('#phones_0').val()==''){alert('Необходимо указать номер телефона');return false;}$.ajax({type:'GET',url:'/sendData',data:{type:'call-me',phone:$('#phones_0').val()},success:function(response){$('#phones_0').val('');$('#call-me-button').prop('checked',false);$.jmodal.close();$('#thanks').jmodal();},error:function(jqXHR){alert(jqXHR.responseText);}});return false;});$(document).on('click','._letter_top_link',function(){if($('._letter_top_email').val()==''){alert('Необходимо указать email');return false;}$.ajax({type:'GET',url:'/sendData',data:{type:'letter-top',email:$('._letter_top_email').val()},success:function(response){$('._letter_top_email').val('');$.jmodal.close();$('#thanks').jmodal();},error:function(jqXHR){alert(jqXHR.responseText);}});return false;});$(document).on('click','._subscribe_link',function(){if($('._subscribe_text').val()==''){alert('Необходимо указать email');return false;}$.ajax({type:'GET',url:'/sendData',data:{type:'subscribe',email:$('._subscribe_text').val()},success:function(response){$('._subscribe_text').val('');$.jmodal.close();$('#thanks').jmodal();},error:function(jqXHR){alert(jqXHR.responseText);}});return false;});$(document).on('click','._super_call',function(){if($('#phones_1').val()==''){alert('Необходимо указать номер телефона');return false;}if($('._super_call_email').val()==''){alert('Необходимо указать email');return false;}$.ajax({type:'GET',url:'/sendData',data:{type:'super',phone:$('#phones_1').val(),email:$('._super_call_email').val()},success:function(response){$('._super_call_email').val('');$('#phones_1').val('');$.jmodal.close();$('#thanks').jmodal();},error:function(jqXHR){alert(jqXHR.responseText);}});return false;});$(document).on('click','._wooden_call',function(){if($('#phones_2').val()==''){alert('Необходимо указать номер телефона');return false;}if($('._wooden_call_email').val()==''){alert('Необходимо указать email');return false;}$.ajax({type:'GET',url:'/sendData',data:{type:'wooden',phone:$('#phones_2').val(),email:$('._wooden_call_email').val()},success:function(response){$('._wooden_call_email').val('');$('#phones_2').val('');$('#wooden-call-me-button').prop('checked',false);$.jmodal.close();$('#thanks').jmodal();},error:function(jqXHR){alert(jqXHR.responseText);}});return false;});