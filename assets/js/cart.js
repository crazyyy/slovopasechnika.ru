var disable = 1;

$(document).on('change', '._cart_special', function(){
	$('._cart_summ').toggleClass('cart_hidden');
	$('._cart_next').toggleClass('cart_hidden');
	$('._cart_arrow').toggleClass('cart_hidden');
	return false;
});
$(function() {
    $('.thumb').PhotoEnlarger({'max_width': 700});
});
$(function() {
    dest=$('#content').offset().top-50;
	$('html,body').animate({scrollTop:dest}, 1000,'swing');

	var summ = 0;
	$('.cart-general__cart-block1__table input').each(function(){
		if ($(this).val() != '') {
			if ($(this).val() < 0) {
				$(this).val(0);
			}
			summ = summ + ($(this).val() * $(this).attr('data-price'));
		}
	});
	$('._buy_summ').text(summ + ' руб.');
});

$(document).on('click', '._buy_next', function(){
	$('.cart-general__cart-block1').hide();
	$('.cart-general__cart-block2').show();
	$('.cart-general__cart-block3').show();
	$('.cart-general__cart-result-wrapper').hide();
	$('.cart_step_active').removeClass('cart_step_active');
	$('.cart_step2').addClass('cart_step_active');

	dest=$('#content').offset().top-50;
	$('html,body').animate({scrollTop:dest}, 1000,'swing');
	
	return false;
});

$(document).on('change', '.cart-general__cart-block1__table input', function(){
	var summ = 0;

	$('.cart-general__cart-block1__table input').each(function(){
		if ($(this).val() != '') {
			if ($(this).val() < 0) {
				$(this).val(0);
			}
			summ = summ + ($(this).val() * $(this).attr('data-price'));
		}
	});
	$('._buy_summ').text(summ + ' руб.');

	return false;
});

$(document).on('click', '._clear_cart_line', function(){
	$(this).closest('tr').find('input').val('');

	var summ = 0;

	$('.cart-general__cart-block1__table input').each(function(){
		if ($(this).val() != '') {
			if ($(this).val() < 0) {
				$(this).val(0);
			}
			summ = summ + ($(this).val() * $(this).attr('data-price'));
		}
	});
	$('._buy_summ').text(summ + ' руб.');

	return false;
});
$(document).on('change', '#first', function(){
	if ($(this).prop('checked') == true) {
		$('#second').prop('checked',false);
	}
});
$(document).on('change', '#second', function(){
	if ($(this).prop('checked') == true) {
		$('#first').prop('checked',false);
	}
});

$(document).on('click', '._finish_buy', function(){
    if ($('._finish_tel').val() == '') {
        alert('Необходимо указать номер телефона');
        return false;
    }
    if ($('._finish_email').val() == '') {
        alert('Необходимо указать email');
        return false;
    }

    if ($('#first').prop('checked') == false && $('#second').prop('checked') == false) {
    	alert('Выберите способ доставки');
    	return false;
    }


    items = '{';
    if ($('#first').prop('checked') == true) {
		items += '"dost":"1"';
	}

	if ($('#second').prop('checked') == true) {
		items += '"dost":"2"';
	}

    $('.cart-general__cart-block1__table input').each(function(){
		if ($(this).val() != '') {
			items += ', "'+ $(this).attr('id') +'":"'+ $(this).val() +'"';
		}
	});

	if ($('#i-wonna-gift').prop('checked') == true) {
		items += ',"special":"1"';
	}
    
    

	items += '}';
	console.log(items);
    $.ajax({
        type: 'GET',
        url: '/sendData',
        data: {data: $.parseJSON(items), type: 'cart', phone: $('._finish_tel').val(), email: $('._finish_email').val()},
        success: function(response){
//            alert('Спасибо за заказ. Наш менеджер свяжется с вами в ближайшее время.');
            $('#thanks').jmodal();
            $('.cart-general__cart-block1__table').find('input').val('');
            $('._buy_summ').text('0 руб.');
            $('._cart_summ').show();
            $('._cart_next').hide();
            $('._cart_arrow').hide();
            $('.cart-general__cart-block1').show();
            $('.cart-general__cart-result-wrapper').show();
            $('.cart-general__cart-block2').hide();
            $('.cart-general__cart-block3').hide();
            $('#special-cart').prop('checked', false);
            $('#first').prop('checked', false);
            $('#second').prop('checked', false);
            $('._finish_tel').val('');
            $('._finish_email').val('');
        },
        error: function(jqXHR) {
            alert(jqXHR.responseText);
        }
    });
    return false;
});