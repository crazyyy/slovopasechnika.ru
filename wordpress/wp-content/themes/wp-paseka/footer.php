  <!-- content -->
  <div class="contacts">
    <div class="contacts-wrapper">
      <div class="contacts-title">
        Контакты
      </div>
      <div class="contacts-block">
        <div style="margin-top: 9px;"><span class="icon-tel"></span>
          <p>+7 (812) 407-11-43</p>
        </div>
        <div><span class="icon-mail"></span>
          <p>zakaz@slovopasechnika.ru</p>
        </div>
        <div><span class="icon-home"></span>
          <p>Санкт-Петербург, Гельсингфорсская, 3</p>
        </div>
      </div>
      <div class="contacts-block2">
        <p>ООО «Фабрика Настроения»</p>
        <p>Юридический адрес: 194044, СПб, ул. Гельсингфорсская, 3</p>
        <p>Фактический адрес: 194100 Большой Сампсониевский д. 77/7</p>
        <p>ОГРН 1157847358570</p>
        <p>ИНН 7802546478</p>
        <p>КПП 780201001</p>
        <p>р/с 40702810200010000083</p>
        <p>БИК: 044030813</p>
        <p>К/счет: 30101810900000000813</p>
      </div>
      <div class="contacts-footer">
        <p>Все права защищены. Слово пасечника 2015</p>
      </div>
    </div>
    <!--//contacts-wrapper-->
  </div>
  <!--//contacts-->
  <!-- Modal HTML embedded directly into document -->
  <div class="modal-window" id="super" style="display: none;">
    <p class="call-me__title">3 баночки крутого мёда + супербаночка в подарок и бесплатная доставка!</p>
    <div class="call-me__phone-block">
      <p class="call-me__phone-block-title">Ваш телефон:</p>
      <input type="text" class="checkbox" id="phones_1" placeholder="+7 (   )">
      <p class="call-me__phone-block-title">Ваш email:</p>
      <input class="_super_call_email" type="text">
    </div>
    <div class="call-me__button"><a class="active-element _super_call" href="#">Отправить</a></div>
  </div>
  <div class="modal-window" id="wooden-buy" style="display: none;">
    <p class="call-me__title">Подарочная эко-баночка с Алтайским мёдом (325 гр) в дереве + одна мини баночка для вас (50 гр)</p>
    <div class="call-me__phone-block">
      <p class="call-me__phone-block-title">Ваш телефон:</p>
      <input type="text" class="checkbox" id="phones_2" placeholder="+7 (   )">
      <p class="call-me__phone-block-title">Ваш email:</p>
      <input class="_wooden_call_email" type="text">
    </div>
    <div class="call-me__button"><a class="active-element _wooden_call" href="#">Отправить</a></div>
  </div>

  <?php query_posts("page_id=26"); ?>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="modal-window" id="delivery" style="display: none;">
      <div class="opt-general">
        <div class="opt-general__opt-detail">
          <?php the_content(); ?>
          <span class="opt-general__opt-detail__line" style="margin-bottom: 8px;"></span>
          <div class="opt-general__opt-detail__central-content">
            <div class="opt-general__opt-detail__central-content-left">
              <p>Остались вопросы?</p>
              <p>Задай их менеджеру</p>
            </div>
            <div class="opt-general__opt-detail__central-content-right">
              <p>+7(812)407-11-43</p>
              <a class="active-element opt-general__opt-detail__central-content-right__active-element" href="#" data-modal="call-me" onclick="jmodal:close">Заказать обратный звонок</a>
            </div>
          </div>
          <span class="opt-general__opt-detail__line" style="margin-bottom: 0; margin-top: 18px;"></span>
        </div>
      </div>
    </div>
  <?php endwhile; endif; ?>
  <?php wp_reset_query(); ?>

  <?php query_posts("page_id=23"); ?>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="modal-window" id="opt" style="display: none;">
      <div class="opt-general">
        <div class="opt-general__opt-detail">
          <?php the_content(); ?>
          <span class="opt-general__opt-detail__line" style="margin-bottom: 8px;"></span>
          <div class="opt-general__opt-detail__central-content">
            <div class="opt-general__opt-detail__central-content-left">
              <p>Остались вопросы?</p>
              <p>Задай их менеджеру</p>
            </div>
            <div class="opt-general__opt-detail__central-content-right">
              <p>+7(812)407-11-43</p>
              <a class="active-element opt-general__opt-detail__central-content-right__active-element" href="#" data-modal="call-me" onclick="jmodal:close">Заказать обратный звонок</a>
            </div>
          </div>
          <span class="opt-general__opt-detail__line" style="margin-bottom: 0; margin-top: 18px;"></span>
        </div>
      </div>
    </div>
  <?php endwhile; endif; ?>
  <?php wp_reset_query(); ?>

  <?php query_posts("page_id=25"); ?>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="modal-window" id="contacts" style="display: none;">
      <div class="opt-general">
        <div class="opt-general__opt-detail">
          <?php the_content(); ?>
          <span class="opt-general__opt-detail__line" style="margin-bottom: 8px;"></span>
          <div class="opt-general__opt-detail__central-content">
            <div class="opt-general__opt-detail__central-content-left">
              <p>Остались вопросы?</p>
              <p>Задай их менеджеру</p>
            </div>
            <div class="opt-general__opt-detail__central-content-right">
              <p>+7(812)407-11-43</p>
              <a class="active-element opt-general__opt-detail__central-content-right__active-element" href="#" data-modal="call-me" onclick="jmodal:close">Заказать обратный звонок</a>
            </div>
          </div>
          <span class="opt-general__opt-detail__line" style="margin-bottom: 0; margin-top: 18px;"></span>
        </div>
      </div>
    </div>
  <?php endwhile; endif; ?>
  <?php wp_reset_query(); ?>


  <div class="modal-window" id="call-me" style="display: none;">
    <p class="call-me__title">Заказать обратный звонок</p>
    <div class="call-me__phone-block">
      <p class="call-me__phone-block-title">Номер телефона:</p>
      <input type="text" class="checkbox" id="phones_0" placeholder="+7 (   )">
    </div>
    <div class="call-me__button"><a class="_call_me_send active-element" href="#">Отправить</a></div>
  </div>

  <?php $postes = get_field('top_products', 22); if( $postes ): ?>
    <?php foreach( $postes as $p ): ?>
    <?php $thisID = $p->ID; ?>

      <div class="modal-window" id="product-<?php echo $thisID; ?>" style="display: none;">
        <div class="altay-detail__left-colunm">

          <?php $i = 0; if( have_rows('gallery', $thisID) ): while ( have_rows('gallery', $thisID ) ) : the_row(); $image = get_sub_field('image'); if( !empty($image) ): ?>
              <?php if ( $i == 0 ) { ?>
                <div class="altay-detail__left-colunm__big-img">
                  <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                </div>
              <?php } ?>
          <?php endif; $i++; endwhile; endif; ?>

          <div class="altay-detail__left-colunm__small-img">
            <?php if( have_rows('gallery', $thisID) ): while ( have_rows('gallery', $thisID ) ) : the_row(); ?>
              <?php $image = get_sub_field('image'); if( !empty($image) ): ?>
                <div class="altay-detail__left-colunm__small-img__div">
                  <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                </div>
              <?php endif; ?>
            <?php endwhile; endif; ?>
          </div>
        </div>
        <div class="altay-detail__right-colunm">
          <?php echo get_post_field('post_content', $p->ID); ?>
          <a class="active-element" href="<?php echo home_url(); ?>/cart.htm">Купить</a>
          <div class="altay-detail__right-colunm__bee">
            <img src="<?php echo get_template_directory_uri(); ?>/img/bee_altay.png" alt="">
          </div>
        </div>
      </div>

    <?php endforeach; ?>
  <?php endif; ?>


  <div class="modal-window" id="etic-bee" style="display: none;">
    <div id="owl-demo2" class="owl-carousel owl-theme true-highlight">
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/1.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/2.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/3.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/4.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/5.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/6.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/7.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/8.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/9.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/10.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/11.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/12.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/13.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/14.png">
      </div>
      <div class="reviews-block-item">
        <img src="<?php echo get_template_directory_uri(); ?>/img/15.png">
      </div>
    </div>
  </div>
  <div class="modal-window" id="subscribe" style="display: none;">
    <div class="subscr-general">
      <div class="subscr-general__detail">
        <p>Получайте этот и другие профессиональные советы раз в неделю.</p>
        <div class="subscr-general__detail-email">
          <input class="_subscribe_text" placeholder="e-mail" type="text">
        </div>
        <div class="active-element subscr-general__detail-submit">
          <a class="_subscribe_link" href="#">узнать</a>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-window" id="letter-top" style="display: none;">
    <div class="letter-top-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/img/letter_img.png">
      <div class="modal-letter-top-bottom">
        <input class="_letter_top_email" placeholder="e-mail" type="text">
        <a class="_letter_top_link" href="#">Оставить заявку</a>
      </div>
    </div>
  </div>
  <div class="modal-window" id="letter-center" style="display: none;">
    <div class="letter-top-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/img/letter_img.png">
      <div class="modal-letter-top-bottom">
        <a class="active-element" href="<?php echo home_url(); ?>/cart.htm">Купить</a>
      </div>
    </div>
  </div>

  <div class="modal-window" id="thanks" style="display: none;">
    <div class="thanks-wrapper">
      <p>Спасибо за заказ. Наш менеджер свяжется с вами в ближайшее время.</p>
      <div class="thanks-bottom">
        <a class="active-element" href="#" onclick="$.jmodal.close();">Спасибо</a>
      </div>
    </div>
  </div>

  <?php wp_footer(); ?>

</body>
</html>
