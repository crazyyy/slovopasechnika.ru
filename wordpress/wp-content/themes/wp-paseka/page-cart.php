<?php /* Template Name: Cart Page */ get_header(); ?>

  <div id="content">
    <div class="cart">
      <div class="cart-wrapper">
        <div class="cart-general">
          <div class="cart-general__ul-block">
            <ul class="cart-general__ul-block__ul">
              <li class="cart_step_active">Корзина</li>
              <li class="cart_step2">Контактные данные и способ получения</li>
            </ul>
          </div>
          <div class="cart-general__cart-block1">
            <table class="cart-general__cart-block1__table">
              <tbody>
                <tr>
                  <th class="cart-general__cart-block1__table__th">
                  </th>
                </tr>
                <tr class="cart-general__cart-block1__table__th__tr-head">
                  <td class="cart-general__cart-block1__table__th__td1">Выберите сорт мёда</td>
                  <td class="cart-general__cart-block1__table__th__td2">Количество баночек без деревянной коробочки</td>
                  <td class="cart-general__cart-block1__table__th__td3">Количество баночек (по 1 в деревянной коробочке)</td>
                  <td class="cart-general__cart-block1__table__th__td4"> Количество баночек (по 3 в деревянной коробочке)</td>
                  <td class="cart-general__cart-block1__table__th__td6"></td>
                </tr>

                <?php $postes = get_field('products'); if( $postes ): ?>
                  <?php foreach( $postes as $p ): ?>
                    <tr class="cart-general__cart-block1__table__tr">
                      <td class="cart-general__cart-block1__table__tr__td1"><span><?php echo get_the_title( $p->ID ); ?>, <?php the_field('weight', $p->ID); ?> gr</span></td>
                      <td class="cart-general__cart-block1__table__tr__td2">x
                        <input id="product-<?php echo $p->ID; ?>_1" type="number" data-price="<?php the_field('price', $p->ID); ?>" class="cart-general__cart-block1__table__imput" value=""> <span>по <?php the_field('price', $p->ID); ?> €</span>
                      </td>
                      <td class="cart-general__cart-block1__table__tr__td3">
                        x
                        <input id="product-<?php echo $p->ID; ?>_2" type="number" data-price="<?php the_field('price_2', $p->ID); ?>" class="cart-general__cart-block1__table__imput"> <span>по <?php the_field('price_2', $p->ID); ?> €</span>
                      </td>
                      <td class="cart-general__cart-block1__table__tr__td4">
                        x
                        <input id="product-<?php echo $p->ID; ?>_3" type="number" data-price="<?php the_field('price_3', $p->ID); ?>" class="cart-general__cart-block1__table__imput"> <span>по <?php the_field('price_3', $p->ID); ?> €</span>
                      </td>
                      <td class="cart-general__cart-block1__table__tr__td5">
                        <img class="active-elevent _clear_cart_line" src="<?php echo get_template_directory_uri(); ?>/img/close_cart.png" alt="">
                      </td>
                    </tr>
                  <?php endforeach; ?>
                <?php endif; ?>

              </tbody>
            </table>
          </div>
          <div class="cart-general__cart-result-wrapper">
            <div class="cart-general__cart-result">
              <div class="left">
                Хотите лучшую цену? Позвоните нам +7 (812) 407-11-43
                <p class="_cart_special">
                  <label style="display: inline-block;" class="" for="i-wonna-gift">
                    <input type="checkbox" class="checkbox" id="i-wonna-gift">
                    <span class="text">Сделать уникальный набор из 3х разных сортов <br>мёда в деревянной подарочной упаковке</span>
                  </label>
                </p>
                <p class="_cart_summ">Сумма: <span class="_buy_summ">0 €.</span></p>
                <p class="_cart_next cart_hidden" style="margin-right: 127px; font-family: DendaNewC;">Нажмите кнопку</p>
                <span class="_cart_arrow cart_hidden"></span>
                <a href="http://slovopasechnika.ru/cart#" class="_buy_next active-element">Продолжить</a>
              </div>
              <div class="right">
                <p>Как выглядит подарочная коробка</p>
                <div class="cart-general__cart-result-img-block">
                  <div class="thumb"><img src="<?php echo get_template_directory_uri(); ?>/img/cart_img_small1.png" data-large_photo="<?php echo get_template_directory_uri(); ?>/img/fotos/bigg.jpg" alt="">
                    <div class="state-icon"></div>
                  </div>
                  <div class="thumb"><img src="<?php echo get_template_directory_uri(); ?>/img/cart_img_small3.png" data-large_photo="<?php echo get_template_directory_uri(); ?>/img/fotos/IMG_4442_2с.jpg" alt="">
                    <div class="state-icon"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-general__cart-block2">
            <div class="cart-general__cart-block2-tel">
              <input class="_finish_tel" placeholder=" контактный телефон" type="text">
            </div>
            <div class="cart-general__cart-block2-email">
              <input class="_finish_email" placeholder=" e-mail" type="text">
            </div>
          </div>
          <div class="cart-general__cart-block3">
            <div class="cart-general__cart-block3__checkbox">
              <div class="cart-general__cart-block3__checkbox-first">
                <label for="first">доставка в пункт выдачи в Вашем городe </label>
                <input type="checkbox" class="checkbox" id="first">
              </div>
              <div class="cart-general__cart-block3__checkbox-second">
                <label for="second">доставка курьером по вашему адресу </label>
                <label for="second">
                  <input type="checkbox" class="checkbox" id="second">
                </label>
              </div>
            </div>
            <div class="cart-general__cart-block3-finish">
              <a class="_finish_buy" href="#">Завершить</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style type="text/css">
    ._letter_top,
    .head-content__bottom-line-left__buy,
    .how-we-do-title {
      display: none;
    }

    .head-content__bottom-line-left {
      height: 185px;
    }
    </style>
    <style type="text/css">
    .only_main,
    .head-content__bottom-line-left__text,
    ._buy {
      display: none;
    }
    </style>
  </div>
<?php get_footer(); ?>
