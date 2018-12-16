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
                        <input id="product-<?php echo $p->ID; ?>_1" type="number" data-price="<?php the_field('price', $p->ID); ?>" data-name="<?php echo get_the_title( $p->ID ); ?> (Без коробки)" class="cart-general__cart-block1__table__imput" value=""> <span>по <?php the_field('price', $p->ID); ?> €</span>
                      </td>
                      <td class="cart-general__cart-block1__table__tr__td3">
                        x
                        <input id="product-<?php echo $p->ID; ?>_2" type="number" data-price="<?php the_field('price_2', $p->ID); ?>" data-name="<?php echo get_the_title( $p->ID ); ?> (По 1 в коробке)" class="cart-general__cart-block1__table__imput"> <span>по <?php the_field('price_2', $p->ID); ?> €</span>
                      </td>
                      <td class="cart-general__cart-block1__table__tr__td4">
                        x
                        <input id="product-<?php echo $p->ID; ?>_3" type="number" data-price="<?php the_field('price_3', $p->ID); ?>" data-name="<?php echo get_the_title( $p->ID ); ?> (По 3 в коробке)" class="cart-general__cart-block1__table__imput"> <span>по <?php the_field('price_3', $p->ID); ?> €</span>
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
                <a href="#" class="_buy_next active-element">Продолжить</a>
              </div>
              <div class="right">
                <p>Как выглядит подарочная коробка</p>
                <div class="cart-general__cart-result-img-block">

                <?php if( have_rows('preview') ): while ( have_rows('preview') ) : the_row(); ?>
                  <?php $image = get_sub_field('image'); if( !empty($image) ): ?>
                    <div class="thumb">
                      <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" data-large_photo="<?php echo $image['url']; ?>" />
                      <div class="state-icon"></div>
                    </div>
                  <?php endif; ?>
                <?php endwhile; endif; ?>

                </div>
              </div>
            </div>
          </div>
          <?php echo do_shortcode('[contact-form-7 id="29" title="BuyForm"]'); ?>
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
